/**
 * Blog data for Edwin Ogola's portfolio
 * Contains articles, tutorials, and case studies
 */
export const blogPosts = [
    {
      id: '1',
      title: 'Building a Scalable API with Next.js',
      slug: 'building-scalable-api-nextjs',
      excerpt: 'Learn how to create a robust API using Next.js for East African startups.',
      content: '# Building a Scalable API with Next.js\n\nIn this tutorial, we’ll explore how to leverage Next.js API routes to build a scalable backend. ```javascript\nconst handler = (req, res) => { res.status(200).json({ message: "Hello, East Africa!" }); };\nexport default handler;\n```\nThis approach is lightweight and efficient.',
      category: 'Tutorial',
      tags: ['Next.js', 'API', 'East Africa'],
      publishedDate: '2023-10-15',
      readTime: '6 min read',
    },
    {
      id: '2',
      title: 'M-Pesa Integration Case Study',
      slug: 'mpesa-integration-case-study',
      excerpt: 'A deep dive into integrating M-Pesa into a web application.',
      content: '# M-Pesa Integration Case Study\n\nM-Pesa is a cornerstone of East African fintech. Here’s how I integrated it into a payment system:\n1. **Setup**: Registered for M-Pesa API credentials.\n2. **Implementation**: Used Node.js to handle transactions.\nThis project reduced payment processing time by 40%.',
      category: 'Case Study',
      tags: ['M-Pesa', 'Node.js', 'Fintech'],
      publishedDate: '2023-11-01',
      readTime: '8 min read',
    },
  ];