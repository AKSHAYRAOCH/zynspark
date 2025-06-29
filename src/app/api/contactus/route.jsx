import { db } from '@/app/db/drizzle';
import { contactUs } from '@/app/db/schema';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { eq } from "drizzle-orm";



const rateLimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(5, '10 s'), // 5 requests in 10 seconds
  });

const contactUsSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export async function POST(req) {
  const body = await req.json();
  
  try {
    // Rate limiting logic
    await rateLimit.limit(req.ip); 
  } catch (err) {
    console.error('Rate limit exceeded:', err);
    return new Response(
      JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      { status: 429 } 
    );
  }

  try {
    const parsedData = contactUsSchema.parse(body);
    const { name, email, message } = parsedData;
    const existingRecord = await db
      .select()
      .from(contactUs)
      .where(eq(contactUs.name,name)&& eq(contactUs.email, email)&& eq(contactUs.message, message))
      .limit(1)
      .execute();

    // If a record already exists, respond with an error
    if (existingRecord.length > 0) {
      return new Response(
        JSON.stringify({ error: 'Duplicate submission detected. This message has already been submitted.' }),
        { status: 409 } // Conflict status code
      );
    }

    const result = await db.insert(contactUs).values({ name, email, message }).returning();

    
    return new Response(
      JSON.stringify({ success: true, data: result[0] }),
      { status: 200 }
    );
  } catch (err) {
    // Zod validation errors
    if (err instanceof z.ZodError) {
      console.error('Validation Failed:', err.errors);

      return new Response(
        JSON.stringify({ error: 'Validation failed', details: err.errors }),
        { status: 400 }
      );
    }

    // Handle any other errors
    console.error('DB error:', err);
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      { status: 500 }
    );
  }
}