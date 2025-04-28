export async function POST(request) {
    try {
      // Parse the request body
      const data = await request.json();
      
      // Validate required fields
      if (!data.email || !data.name || !data.message) {
        return new Response(
          JSON.stringify({ success: false, message: 'Missing required fields' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }
  
      // In a real application, you would:
      // 1. Validate the email format
      // 2. Check for spam using techniques like honeypot fields or captcha
      // 3. Send an email or store the message in a database
      // 4. Possibly send a confirmation email to the user
      
      // For now, we'll just simulate a successful submission
      console.log('Contact form submission:', data);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Your message has been received. I\'ll get back to you soon!' 
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.error('Contact form error:', error);
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Something went wrong. Please try again later.' 
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
        },
      }
    );
  }
}

// If you want to handle GET requests (e.g., for testing)
export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Contact API endpoint is working' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}