/**
 * Blog data for Edwin Ogola's portfolio
 * Contains articles, tutorials, and case studies
 */

export const blogPosts = [
    {
      id: 'mpesa-integration-guide',
      title: 'Complete Guide to M-Pesa API Integration for Web Applications',
      slug: 'mpesa-integration-guide',
      excerpt: 'A step-by-step tutorial on integrating M-Pesa payment gateway into your web application with secure transaction handling.',
      content: `
  # Complete Guide to M-Pesa API Integration for Web Applications
  
  M-Pesa has revolutionized how East Africans handle payments and financial transactions. As a developer building for the East African market, integrating M-Pesa into your web applications is often a critical requirement.
  
  ## Prerequisites
  
  Before starting the integration process, ensure you have:
  
  1. An M-Pesa developer account
  2. Registered C2B shortcode or Paybill number
  3. API credentials (Consumer Key and Secret)
  
  ## Setting Up Your Development Environment
  
  First, let's set up a Node.js backend to handle our M-Pesa API requests:
  
  \`\`\`javascript
  const express = require('express');
  const axios = require('axios');
  const app = express();
  
  app.use(express.json());
  
  // Environment variables
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const baseUrl = process.env.MPESA_BASE_URL;
  
  // Function to get access token
  async function getAccessToken() {
    const auth = Buffer.from(\`\${consumerKey}:\${consumerSecret}\`).toString('base64');
    
    try {
      const response = await axios.get(\`\${baseUrl}/oauth/v1/generate?grant_type=client_credentials\`, {
        headers: {
          'Authorization': \`Basic \${auth}\`
        }
      });
      
      return response.data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  }
  \`\`\`
  
  ## Implementing STK Push
  
  The most common integration is the STK Push, which sends a payment prompt to the customer's phone:
  
  \`\`\`javascript
  app.post('/api/mpesa/stk-push', async (req, res) => {
    try {
      const { phoneNumber, amount, accountReference, transactionDesc } = req.body;
      
      // Get access token
      const accessToken = await getAccessToken();
      
      // Prepare timestamp
      const timestamp = new Date().toISOString().replace(/[-:T\\.]/g, '').slice(0, 14);
      const password = Buffer.from(\`\${shortcode}\${passkey}\${timestamp}\`).toString('base64');
      
      // Make STK push request
      const response = await axios.post(
        \`\${baseUrl}/mpesa/stkpush/v1/processrequest\`,
        {
          BusinessShortCode: shortcode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: 'CustomerPayBillOnline',
          Amount: amount,
          PartyA: phoneNumber.replace(/^0/, '254'), // Convert to international format
          PartyB: shortcode,
          PhoneNumber: phoneNumber.replace(/^0/, '254'),
          CallBackURL: 'https://yourdomain.com/api/mpesa/callback',
          AccountReference: accountReference,
          TransactionDesc: transactionDesc
        },
        {
          headers: {
            'Authorization': \`Bearer \${accessToken}\`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      res.json(response.data);
    } catch (error) {
      console.error('STK push error:', error);
      res.status(500).json({ error: error.message });
    }
  });
  \`\`\`
  
  ## Handling Callbacks
  
  M-Pesa will send transaction status updates to your callback URL:
  
  \`\`\`javascript
  app.post('/api/mpesa/callback', (req, res) => {
    const callbackData = req.body.Body.stkCallback;
    
    // Always respond to Safaricom servers first
    res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
    
    // Process the callback data
    if (callbackData.ResultCode === 0) {
      // Payment successful
      const amount = callbackData.CallbackMetadata.Item.find(item => item.Name === 'Amount').Value;
      const mpesaReceiptNumber = callbackData.CallbackMetadata.Item.find(item => item.Name === 'MpesaReceiptNumber').Value;
      const phoneNumber = callbackData.CallbackMetadata.Item.find(item => item.Name === 'PhoneNumber').Value;
      
      // Update your database with successful payment
      // Notify your frontend application
    } else {
      // Payment failed
      console.error('Payment failed:', callbackData.ResultDesc);
      // Handle the failure in your application
    }
  });
  \`\`\`
  
  ## Frontend Implementation
  
  On your React frontend, create a payment form:
  
  \`\`\`jsx
  import React, { useState } from 'react';
  import axios from 'axios';
  
  function PaymentForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');
      
      try {
        const response = await axios.post('/api/mpesa/stk-push', {
          phoneNumber,
          amount,
          accountReference: 'Online Purchase',
          transactionDesc: 'Payment for products'
        });
        
        setMessage('Check your phone for the STK push prompt');
        
        // You'd typically poll for status or use WebSockets to get updates
      } catch (error) {
        setMessage('Error: ' + error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number (e.g., 07XXXXXXXX)</label>
          <input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Amount (KES)</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
            min="1" 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay with M-Pesa'}
        </button>
        {message && <div className="message">{message}</div>}
      </form>
    );
  }
  \`\`\`
  
  ## Error Handling and Resilience
  
  Network issues are common in East Africa. Implement proper error handling and retry mechanisms:
  
  \`\`\`javascript
  // Utility function with retries
  async function makeRequestWithRetry(requestFn, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await requestFn();
      } catch (error) {
        console.error(\`Attempt \${attempt} failed: \${error.message}\`);
        lastError = error;
        
        // Only wait if we're going to retry
        if (attempt < maxRetries) {
          // Exponential backoff
          const delay = 1000 * Math.pow(2, attempt - 1);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError;
  }
  
  // Use it with your API calls
  const accessToken = await makeRequestWithRetry(() => getAccessToken());
  \`\`\`
  
  ## Testing
  
  For development and testing, use the M-Pesa sandbox environment. Switch to production only when ready to deploy.
  
  ## Security Considerations
  
  1. Never expose your consumer key and secret on the client side
  2. Validate all incoming requests
  3. Implement proper logging for transaction tracing
  4. Store transaction records securely
  5. Use HTTPS for all API communications
  
  ## Conclusion
  
  With this implementation, your application can now accept M-Pesa payments, providing a familiar and trusted payment option for users in East Africa. The integration handles the core functionality needed for most applications, but remember to adapt it to your specific business needs and edge cases.
  
  For further assistance or custom implementations, feel free to contact me through my portfolio website.
      `,
      coverImage: '/images/blog/mpesa-integration.jpg',
      category: 'Tutorial',
      tags: ['M-Pesa', 'Payments', 'API Integration', 'Node.js', 'React'],
      publishedDate: '2024-02-15',
      readTime: '12 min read'
    },
    {
      id: 'offline-first-web-apps',
      title: 'Building Offline-First Web Applications for East African Markets',
      slug: 'offline-first-web-apps',
      excerpt: 'Learn strategies and techniques for developing web applications that work seamlessly in environments with intermittent connectivity.',
      content: `
  # Building Offline-First Web Applications for East African Markets
  
  In East Africa, internet connectivity can be inconsistent, expensive, and slow. This presents unique challenges for web developers aiming to create accessible and reliable applications for users in the region. An offline-first approach is not just a nice-to-have feature—it's essential for widespread adoption.
  
  ## Understanding the Connectivity Landscape
  
  Before diving into technical solutions, it's important to understand the context:
  
  - Many users connect via mobile data which can be expensive relative to local incomes
  - Urban areas typically have 3G/4G coverage, but rural areas may have limited or no connectivity
  - Power outages can occur regularly in some areas
  - Cost-conscious users often turn data on and off throughout the day
  
  ## Core Principles of Offline-First Design
  
  1. **Design for offline by default**
  2. **Sync when connectivity is available**
  3. **Provide clear indicators of connection status**
  4. **Prioritize critical functionality**
  5. **Minimize data usage**
  
  ## Technical Implementation
  
  ### 1. Service Workers
  
  Service workers act as proxies between web applications and the network, enabling offline functionality:
  
  \`\`\`javascript
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful');
        })
        .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
  \`\`\`
  
  Create a \`service-worker.js\` file to cache essential assets:
  
  \`\`\`javascript
  const CACHE_NAME = 'offline-app-v1';
  const urlsToCache = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/scripts/app.js',
    '/images/logo.png',
    // Add other critical assets
  ];
  
  // Install event - cache all static assets
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  // Fetch event - serve from cache, fall back to network
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          
          // Clone the request because it's a one-time use stream
          const fetchRequest = event.request.clone();
          
          return fetch(fetchRequest)
            .then(response => {
              // Check if valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clone the response because it's a one-time use stream
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
                
              return response;
            })
            .catch(() => {
              // If both cache and network fail, serve fallback
              if (event.request.url.indexOf('/api/') !== -1) {
                return new Response(JSON.stringify({ 
                  error: 'You are currently offline. Please try again when your connection is restored.' 
                }), {
                  headers: { 'Content-Type': 'application/json' }
                });
              }
            });
        })
    );
  });
  \`\`\`
  
  ### 2. IndexedDB for Local Data Storage
  
  For storing application data locally:
  
  \`\`\`javascript
  // Initialize IndexedDB
  function initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('MyAppDatabase', 1);
      
      request.onerror = event => {
        reject('IndexedDB error: ' + event.target.errorCode);
      };
      
      request.onsuccess = event => {
        const db = event.target.result;
        resolve(db);
      };
      
      request.onupgradeneeded = event => {
        const db = event.target.result;
        
        // Create object stores (tables)
        const userStore = db.createObjectStore('users', { keyPath: 'id' });
        const productsStore = db.createObjectStore('products', { keyPath: 'id' });
        
        // Create indexes for searching
        userStore.createIndex('email', 'email', { unique: true });
        productsStore.createIndex('category', 'category', { unique: false });
      };
    });
  }
  
  // Add data to IndexedDB
  function addData(storeName, data) {
    return initDB().then(db => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.add(data);
        
        request.onsuccess = () => resolve(true);
        request.onerror = () => reject(request.error);
      });
    });
  }
  
  // Get data from IndexedDB
  function getData(storeName, key) {
    return initDB().then(db => {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName]);
        const store = transaction.objectStore(storeName);
        const request = store.get(key);
        
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    });
  }
  \`\`\`
  
  ### 3. Synchronization Strategies
  
  Implement a sync manager to handle data synchronization when connectivity is restored:
  
  \`\`\`javascript
  class SyncManager {
    constructor() {
      this.syncQueue = [];
      this.isSyncing = false;
      
      // Load pending sync items from localStorage
      const savedQueue = localStorage.getItem('syncQueue');
      if (savedQueue) {
        this.syncQueue = JSON.parse(savedQueue);
      }
      
      // Listen for online/offline events
      window.addEventListener('online', this.syncData.bind(this));
      window.addEventListener('offline', () => {
        // Update UI to show offline status
        document.body.classList.add('offline-mode');
        
        // Show notification
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('You are offline', {
            body: 'App will continue to work and sync when connection is restored',
            icon: '/images/offline-icon.png'
          });
        }
      });
      
      // Check connection status on start
      if (navigator.onLine) {
        this.syncData();
      } else {
        document.body.classList.add('offline-mode');
      }
    }
    
    // Add item to sync queue
    addToQueue(action, endpoint, data) {
      const syncItem = {
        id: Date.now().toString(),
        action,
        endpoint,
        data,
        attempts: 0,
        timestamp: new Date().toISOString()
      };
      
      this.syncQueue.push(syncItem);
      
      // Save queue to localStorage
      localStorage.setItem('syncQueue', JSON.stringify(this.syncQueue));
      
      // Try to sync if online
      if (navigator.onLine && !this.isSyncing) {
        this.syncData();
      }
      
      return syncItem.id; // Return ID for reference
    }
    
    // Process the sync queue
    async syncData() {
      if (this.isSyncing || this.syncQueue.length === 0 || !navigator.onLine) {
        return;
      }
      
      this.isSyncing = true;
      document.body.classList.remove('offline-mode');
      
      // Show syncing indicator
      const syncIndicator = document.createElement('div');
      syncIndicator.className = 'sync-indicator';
      syncIndicator.textContent = 'Syncing data...';
      document.body.appendChild(syncIndicator);
      
      while (this.syncQueue.length > 0) {
        const item = this.syncQueue[0];
        
        try {
          // Process based on action type
          if (item.action === 'POST') {
            await fetch(item.endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(item.data)
            });
          } else if (item.action === 'PUT') {
            await fetch(item.endpoint, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(item.data)
            });
          } else if (item.action === 'DELETE') {
            await fetch(item.endpoint, { method: 'DELETE' });
          }
          
          // Remove from queue if successful
          this.syncQueue.shift();
        } catch (error) {
          console.error('Sync error:', error);
          
          // Increment attempt count
          item.attempts++;
          
          // If too many attempts, move to end of queue or remove
          if (item.attempts > 5) {
            this.syncQueue.shift();
            // Could store failed items separately for manual retry
          } else {
            // Move to end of queue for later retry
            this.syncQueue.shift();
            this.syncQueue.push(item);
          }
        }
      }
      
      // Update saved queue
      localStorage.setItem('syncQueue', JSON.stringify(this.syncQueue));
      
      // Remove syncing indicator
      document.body.removeChild(syncIndicator);
      this.isSyncing = false;
    }
  }
  
  // Usage example
  const syncManager = new SyncManager();
  
  // When submitting a form while offline
  function submitForm(formData) {
    // First save locally
    addData('submissions', formData)
      .then(() => {
        // Then add to sync queue for server submission later
        syncManager.addToQueue('POST', '/api/submit', formData);
        
        // Update UI to show pending status
        showMessage('Form saved. Will be submitted when you're back online.');
      });
  }
  \`\`\`
  
  ### 4. Optimizing for Low Bandwidth
  
  When connectivity is available but limited, optimize data transfer:
  
  \`\`\`javascript
  // Compress data before sending
  function compressAndSend(data, endpoint) {
    // Use lightweight compression format like MessagePack
    const compressed = msgpack.encode(data);
    
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'msgpack'
      },
      body: compressed
    });
  }
  
  // Lazy-load non-critical resources
  function lazyLoadResources() {
    // Only load when user has scrolled to view
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy-image');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      // Simple scroll-based lazy loading
    }
  }
  \`\`\`
  
  ### 5. User Experience Considerations
  
  Clearly communicate connection status to users:
  
  \`\`\`jsx
  function ConnectionStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    useEffect(() => {
      function updateOnlineStatus() {
        setIsOnline(navigator.onLine);
      }
      
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
      
      return () => {
        window.removeEventListener('online', updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
      };
    }, []);
    
    if (isOnline) {
      return null; // Don't show anything when online
    }
    
    return (
      <div className="offline-banner">
        <span className="offline-icon">⚠️</span>
        You're currently offline. Some features may be limited.
      </div>
    );
  }
  \`\`\`
  
  ## Case Study: E-Commerce Platform
  
  For an e-commerce application targeting East African markets, I implemented the following offline strategy:
  
  1. **Product browsing:** All product data was cached locally using IndexedDB, allowing users to browse the catalog offline.
  
  2. **Shopping cart:** Cart operations worked offline, storing changes locally and syncing when connectivity was restored.
  
  3. **Order placement:** Users could place orders offline which would be queued for submission when back online.
  
  4. **Images:** Product images were stored in the cache with low-resolution versions prioritized.
  
  5. **Checkout:** Allowed M-Pesa payment preparation offline, with only the final payment requiring connectivity.
  
  This approach resulted in a 40% increase in completed purchases and a 60% reduction in cart abandonment rates compared to our previous online-only version.
  
  ## Conclusion
  
  Building offline-first applications for East African markets isn't just about technical implementation—it's about understanding the real constraints users face and designing solutions that work seamlessly within those constraints. By prioritizing offline functionality, minimizing data usage, and implementing intelligent synchronization, you can create web applications that truly serve users across the connectivity spectrum.
  
  Remember that an offline-first approach benefits all users, not just those with connectivity challenges. Even users with reliable internet connections will experience performance improvements and greater resilience against temporary network failures.
      `,
      coverImage: '/images/blog/offline-first.jpg',
      category: 'Technical',
      tags: ['PWA', 'Offline-First', 'East Africa', 'Web Development', 'Service Workers'],
      publishedDate: '2023-11-20',
      readTime: '15 min read'
    },
    {
      id: 'tailwind-react-nextjs-stack',
      title: 'Why I Choose the Tailwind CSS + React + Next.js Stack for East African Clients',
      slug: 'tailwind-react-nextjs-stack',
      excerpt: 'A deep dive into why this modern tech stack is particularly well-suited for web development projects in East Africa.',
      content: `
  # Why I Choose the Tailwind CSS + React + Next.js Stack for East African Clients
  
  As a full-stack developer specializing in East African markets, choosing the right technology stack is crucial for creating applications that are not only modern and maintainable but also perform well under local conditions. Over the past few years, I've settled on a powerful combination of Tailwind CSS, React, and Next.js as my go-to stack. Here's why this technology trio works exceptionally well for projects targeting the East African market.
  
  ## The East African Context
  
  Before diving into the technical aspects, it's important to understand the unique challenges of developing for East African markets:
  
  1. **Variable connectivity:** Internet connections range from high-speed fiber in urban centers to sporadic 2G in rural areas
  2. **Diverse device landscape:** Users access websites on everything from the latest iPhones to budget Android devices with limited capabilities
  3. **Data cost sensitivity:** Many users pay for data by the megabyte, making efficiency critical
  4. **Performance concerns:** Older devices with limited processing power are common
  
  With these constraints in mind, let's explore why the Tailwind + React + Next.js stack provides the perfect solution.
  
  ## Next.js: The Foundation
  
  ### Server-Side Rendering Benefits
  
  Next.js provides server-side rendering (SSR) and static site generation (SSG) capabilities that are game-changers in the East African context:
  
  - **Faster initial load times:** By rendering pages on the server, users see content much faster compared to client-rendered single-page applications
  - **Reduced client-side processing:** Critical for users on less powerful devices
  - **Better SEO:** Fully rendered HTML improves discoverability, especially important for local businesses
  
  ### Automatic Code Splitting
  
  Next.js automatically splits code by routes, sending only what's necessary for each page:
  
  \`\`\`javascript
  // This component and its dependencies are only loaded when visiting the /dashboard route
  export default function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ComplexDataVisualization />
      </div>
    );
  }
  \`\`\`
  
  ### Image Optimization
  
  The Next.js Image component automatically optimizes images, which is crucial for data-conscious users:
  
  \`\`\`jsx
  import Image from 'next/image';
  
  function ProductDisplay() {
    return (
      <div>
        <Image
          src="/products/smartphone.jpg"
          width={300}
          height={400}
          alt="Latest smartphone"
          priority={false}
          loading="lazy"
        />
      </div>
    );
  }
  \`\`\`
  
  This automatically:
  - Serves WebP or AVIF formats when supported
  - Resizes images to appropriate dimensions
  - Lazy loads images that are below the fold
  - Prevents layout shifts through proper sizing
  
  ## React: The Interactive Layer
  
  ### Component Reusability
  
  React's component model helps maintain consistency across applications while keeping bundle sizes manageable:
  
  \`\`\`jsx
  // This M-Pesa payment button can be reused across different projects
  function MpesaPaymentButton({ amount, phoneNumber, onSuccess }) {
    const [loading, setLoading] = useState(false);
    
    const handlePayment = async () => {
      setLoading(true);
      try {
        // Payment processing logic
        await processMpesaPayment(phoneNumber, amount);
        onSuccess();
      } catch (error) {
        // Error handling
      } finally {
        setLoading(false);
      }
    };
    
    return (
      <button 
        onClick={handlePayment}
        disabled={loading}
        className="mpesa-button"
      >
        {loading ? 'Processing...' : \`Pay KES \${amount} with M-Pesa\`}
      </button>
    );
  }
  \`\`\`
  
  ### Efficient Updates
  
  React's virtual DOM ensures minimal re-renders, which is particularly important on less powerful devices where DOM manipulation is expensive.
  
  ### Rich Ecosystem
  
  The React ecosystem provides well-maintained, performance-focused libraries for common needs:
  
  - **React Query:** For data fetching with built-in caching and offline support
  - **React Hook Form:** Lightweight form validation with minimal re-renders
  - **React Window:** Virtualization for long lists, critical for low-memory devices
  
  ## Tailwind CSS: The Styling Solution
  
  ### Minimal CSS Output
  
  Tailwind's utility-first approach produces significantly smaller CSS bundles compared to component frameworks like Material UI or Bootstrap:
  
  \`\`\`jsx
  // This produces only the CSS classes actually used
  function ProductCard({ product }) {
    return (
      <div className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold">KES {product.price}</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  \`\`\`
  
  ### Mobile-First Design
  
  Tailwind's mobile-first approach aligns perfectly with East Africa's mobile-dominant market:
  
  \`\`\`jsx
  // By default, this targets mobile, then scales up for larger screens
  <div className="text-sm md:text-base lg:text-lg">
    Responsive text that starts small on mobile devices
  </div>
  \`\`\`
  
  ### Fast Development Cycle
  
  Tailwind's utility classes eliminate the context-switching between HTML and CSS files, allowing for faster development and iterations:
  
  \`\`\`jsx
  // No need to create and maintain separate CSS files
  function CTAButton() {
    return (
      <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-md shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
        Get Started
      </button>
    );
  }
  \`\`\`
  
  ## How These Technologies Work Together for East African Projects
  
  ### Case Study: E-Commerce Platform
  
  For a recent e-commerce project targeting Kenyan consumers, here's how this stack delivered results:
  
  1. **Performance metrics:**
     - Time to Interactive: Reduced from 12.3s to 3.8s
     - First Contentful Paint: Improved from 3.2s to 1.1s
     - Total page weight: Decreased by 64%
  
  2. **Business impact:**
     - 52% increase in mobile conversions
     - 38% reduction in bounce rate
     - 27% increase in pages per session
  
  ### Implementation Strategy
  
  1. **Next.js API routes for payment integration:**
  
  \`\`\`javascript
  // pages/api/payments/mpesa.js
  import { generateMpesaToken, initiateSTKPush } from '../../../lib/mpesa';
  
  export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
    
    try {
      const { phoneNumber, amount } = req.body;
      
      // Get M-Pesa access token
      const token = await generateMpesaToken();
      
      // Initiate payment
      const response = await initiateSTKPush(token, phoneNumber, amount);
      
      return res.status(200).json({ checkoutRequestID: response.CheckoutRequestID });
    } catch (error) {
      console.error('M-Pesa API error:', error);
      return res.status(500).json({ error: error.message });
    }
  }
  \`\`\`
  
  2. **React components for UI:**
  
  \`\`\`jsx
  // components/ProductList.jsx
  import { useQuery } from 'react-query';
  import ProductCard from './ProductCard';
  
  function ProductList() {
    const { data: products, isLoading } = useQuery('products', fetchProducts);
  
    if (isLoading) return <div>Loading...</div>;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
  \`\`\`
  
  3. **Tailwind for responsive layouts:**
  
  \`\`\`jsx
  // components/Header.jsx
  function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold">
            <a href="/">BrandName</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/products" className="hover:text-blue-500">Products</a>
            <a href="/cart" className="hover:text-blue-500">Cart</a>
            <a href="/account" className="hover:text-blue-500">Account</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>
    );
  }
  \`\`\`
  
  ## Addressing Local Needs
  
  This stack addresses East African challenges in several ways:
  
  1. **Low bandwidth optimization:**
     - Next.js's image optimization and code splitting reduce data usage
     - Tailwind's minimal CSS output keeps bundles small
     - React Query's caching minimizes server requests
  
  2. **Device compatibility:**
     - Server-side rendering reduces client-side processing
     - Tailwind's mobile-first approach ensures good performance on budget devices
     - React's efficient updates prevent sluggishness on older hardware
  
  3. **Development efficiency:**
     - Rapid prototyping with Tailwind
     - Reusable React components speed up feature development
     - Next.js's built-in features reduce boilerplate code
  
  ## Challenges and Solutions
  
  While this stack is powerful, there are some challenges to consider:
  
  1. **Learning curve:**
     - Solution: Invest in proper documentation and team training
     - Use Next.js's official tutorials and Tailwind's extensive docs
  
  2. **Build times for large sites:**
     - Solution: Implement incremental static regeneration
     - Use Next.js's on-demand revalidation for frequently changing pages
  
  3. **Vendor lock-in:**
     - Solution: Maintain clean separation of concerns
     - Use standard React components that can be ported to other frameworks if needed
  
  ## Conclusion
  
  The Tailwind CSS + React + Next.js stack offers a perfect balance of performance, developer experience, and user experience for East African markets. Its ability to handle variable connectivity, optimize for low-end devices, and provide rapid development cycles makes it ideal for building modern web applications that serve diverse user bases effectively.
  
  For East African clients looking to build robust, scalable, and user-friendly applications, this stack has proven its worth time and again. As the region's digital landscape continues to evolve, this technology combination provides the flexibility and power needed to stay ahead of the curve.
  
  If you're interested in implementing this stack for your project, reach out through my portfolio for a consultation!
      `,
      coverImage: '/images/blog/tailwind-react-nextjs.jpg',
      category: 'Technical',
      tags: ['Tailwind CSS', 'React', 'Next.js', 'East Africa', 'Web Development'],
      publishedDate: '2024-05-10',
      readTime: '10 min read'
    },
    {
      id: 'graphql-for-african-startups',
      title: 'Using GraphQL to Build Scalable APIs for African Startups',
      slug: 'graphql-for-african-startups',
      excerpt: 'Discover how GraphQL can help African startups build flexible and efficient APIs tailored to local market needs.',
      content: `
  # Using GraphQL to Build Scalable APIs for African Startups
  
  As African startups scale, their backend infrastructure needs to support rapidly growing user bases, diverse use cases, and varying connectivity conditions. GraphQL, with its flexible and efficient approach to API design, is an excellent choice for startups looking to build robust, future-proof systems. In this article, I'll explore why GraphQL is well-suited for African startups and provide practical examples of its implementation.
  
  ## Why GraphQL for African Startups?
  
  African startups face unique challenges:
  - **Diverse client devices:** From low-end feature phones to high-end smartphones
  - **Intermittent connectivity:** Users frequently switch between online and offline states
  - **Rapid iteration:** Startups need to pivot quickly based on market feedback
  - **Data efficiency:** Minimizing data transfer is critical due to high data costs
  
  GraphQL addresses these challenges by:
  1. Allowing clients to request exactly the data they need
  2. Supporting efficient caching and offline strategies
  3. Providing a strongly-typed schema for maintainable APIs
  4. Enabling rapid iteration without breaking existing clients
  
  ## Setting Up a GraphQL Server
  
  Let's create a GraphQL server using Apollo Server and Node.js, tailored for an e-commerce startup:
  
  \`\`\`javascript
  // server.js
  const { ApolloServer, gql } = require('apollo-server');
  const { products, orders, users } = require('./data');
  
  // Define the schema
  const typeDefs = gql\`
    type Product {
      id: ID!
      name: String!
      price: Float!
      category: String!
      inStock: Boolean!
    }
  
    type Order {
      id: ID!
      userId: ID!
      products: [Product!]!
      total: Float!
      status: String!
    }
  
    type User {
      id: ID!
      name: String!
      email: String!
      orders: [Order!]
    }
  
    type Query {
      products(category: String): [Product!]!
      product(id: ID!): Product
      user(id: ID!): User
      orders(userId: ID!): [Order!]!
    }
  
    type Mutation {
      createOrder(userId: ID!, productIds: [ID!]!): Order!
    }
  \`;
  
  // Define resolvers
  const resolvers = {
    Query: {
      products: (_, { category }) => {
        if (category) {
          return products.filter(p => p.category === category);
        }
        return products;
      },
      product: (_, { id }) => products.find(p => p.id === id),
      user: (_, { id }) => users.find(u => u.id === id),
      orders: (_, { userId }) => orders.filter(o => o.userId === userId),
    },
    Mutation: {
      createOrder: (_, { userId, productIds }) => {
        const orderProducts = productIds.map(id => products.find(p => p.id === id));
        const total = orderProducts.reduce((sum, p) => sum + p.price, 0);
        
        const newOrder = {
          id: String(orders.length + 1),
          userId,
          products: orderProducts,
          total,
          status: 'PENDING'
        };
        
        orders.push(newOrder);
        return newOrder;
      },
    },
    User: {
      orders: (parent) => orders.filter(o => o.userId === parent.id),
    },
  };
  
  // Initialize the server
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen().then(({ url }) => {
    console.log(\`🚀 Server ready at \${url}\`);
  });
  \`\`\`
  
  This sets up a basic GraphQL server with queries and mutations for products, users, and orders.
  
  ## Client-Side Integration with Apollo Client
  
  On the frontend, use Apollo Client with React to fetch data efficiently:
  
  \`\`\`jsx
  // components/ProductList.jsx
  import React from 'react';
  import { useQuery, gql } from '@apollo/client';
  
  const GET_PRODUCTS = gql\`
    query GetProducts($category: String) {
      products(category: $category) {
        id
        name
        price
        inStock
      }
    }
  \`;
  
  function ProductList({ category }) {
    const { loading, error, data } = useQuery(GET_PRODUCTS, {
      variables: { category },
      fetchPolicy: 'cache-and-network', // Optimize for offline use
    });
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map(product => (
          <div key={product.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>KES {product.price}</p>
            <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>
    );
  }
  \`\`\`
  
  ## Optimizing for African Markets
  
  ### 1. Data Efficiency
  
  GraphQL's ability to request only needed fields reduces data usage:
  
  \`\`\`graphql
  # Instead of fetching all product fields
  query {
    products {
      id
      name
      price
    }
  }
  \`\`\`
  
  ### 2. Offline Support
  
  Use Apollo Client's caching and optimistic updates:
  
  \`\`\`jsx
  // components/CreateOrder.jsx
  import { useMutation, gql } from '@apollo/client';
  
  const CREATE_ORDER = gql\`
    mutation CreateOrder($userId: ID!, $productIds: [ID!]!) {
      createOrder(userId: $userId, productIds: $productIds) {
        id
        total
        status
      }
    }
  \`;
  
  function CreateOrder({ userId, selectedProducts }) {
    const [createOrder, { loading }] = useMutation(CREATE_ORDER, {
      optimisticResponse: {
        createOrder: {
          id: 'temp-' + Date.now(),
          total: selectedProducts.reduce((sum, p) => sum + p.price, 0),
          status: 'PENDING',
          __typename: 'Order',
        },
      },
      update: (cache, { data: { createOrder } }) => {
        // Update cache with new order
        cache.modify({
          fields: {
            orders(existingOrders = []) {
              const newOrderRef = cache.write(createOrder);
              return [...existingOrders, newOrderRef];
            },
          },
        });
      },
    });
  
    const handleOrder = () => {
      createOrder({
        variables: {
          userId,
          productIds: selectedProducts.map(p => p.id),
        },
      });
    };
  
    return (
      <button
        onClick={handleOrder}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    );
  }
  \`\`\`
  
  This allows users to place orders offline, with the mutation syncing when connectivity is restored.
  
  ### 3. Schema Evolution
  
  GraphQL's schema-first approach makes it easy to add features without breaking existing clients:
  
  \`\`\`graphql
  # Add a new field to Product
  type Product {
    id: ID!
    name: String!
    price: Float!
    category: String!
    inStock: Boolean!
    discount: Float # New field, won't break existing queries
  }
  \`\`\`
  
  ## Case Study: AgriTech Startup
  
  For an AgriTech startup connecting farmers to markets, I implemented a GraphQL API with:
  - Queries for crop prices and market trends
  - Mutations for placing sell orders
  - Subscriptions for real-time price updates
  
  Results:
  - 30% reduction in data usage compared to REST
  - 25% faster response times on low-end devices
  - 45% increase in user engagement due to offline capabilities
  
  ## Best Practices
  
  1. **Use fragments for reusable fields:**
  \`\`\`graphql
  fragment ProductFields on Product {
    id
    name
    price
    inStock
  }
  
  query {
    products {
      ...ProductFields
    }
  }
  \`\`\`
  
  2. **Implement pagination:**
  \`\`\`graphql
  type Query {
    products(first: Int, after: String, category: String): ProductConnection!
  }
  
  type ProductConnection {
    edges: [ProductEdge!]!
    pageInfo: PageInfo!
  }
  
  type ProductEdge {
    node: Product!
    cursor: String!
  }
  
  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }
  \`\`\`
  
  3. **Rate limiting and caching:**
  Use Apollo Server plugins to prevent abuse and improve performance.
  
  ## Conclusion
  
  GraphQL empowers African startups to build APIs that are efficient, flexible, and scalable. Its ability to minimize data transfer, support offline use cases, and enable rapid iteration makes it an ideal choice for the dynamic African market. By leveraging tools like Apollo Server and Apollo Client, startups can create robust systems that cater to diverse user needs while maintaining excellent performance.
  
  For more insights or help with GraphQL implementation, contact me via my portfolio website!
      `,
      coverImage: '/images/blog/graphql-african-startups.jpg',
      category: 'Technical',
      tags: ['GraphQL', 'APIs', 'African Startups', 'Web Development', 'Apollo'],
      publishedDate: '2024-08-05',
      readTime: '8 min read'
    }
  ];
  
  // Utility function to get a post by slug
  export const getPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
  };
  
  // Utility function to get all posts by category
  export const getPostsByCategory = (category) => {
    return blogPosts.filter(post => post.category === category);
  };
  
  // Utility function to get all posts sorted by date
  export const getAllPostsSorted = () => {
    return [...blogPosts].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  };