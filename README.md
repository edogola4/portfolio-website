# Edwin Ogola Portfolio Website

Welcome to my professional portfolio website! I’m Edwin Ogola, a Full Stack Software Engineer passionate about building scalable web applications tailored for East African markets. This site showcases my skills, projects, and insights into the tech world, designed to connect with potential employers and clients.

![Portfolio Screenshot](/public/images/portfolio-screenshot.png)

## 🌟  Features

- **Responsive Design**: Optimized for all devices, with special attention to mobile (critical for East African markets)
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Fast Loading**: Optimized for variable connection speeds common in East Africa
- **PWA Capabilities**: Partial offline functionality
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Filterable Projects**: Easy navigation through different types of work
- **Blog/Articles**: Technical content sharing capabilities
- **Contact Form**: Direct communication channel for potential clients/employers

## 🛠️ Built With

- **Framework**: [Next.js](https://nextjs.org/) - React framework with SSR/SSG capabilities
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel (optimized for Next.js)
- **Email**: Nodemailer for contact form submissions

## 📋 Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── context/         # React context providers
│   ├── lib/             # Data and API functions
│   ├── utils/           # Utility functions
│   └── styles/          # Global styles
```

## 📱 Pages

1. **Home** - Introduction, featured projects, skills overview
2. **About** - Professional journey, education, personal interests
3. **Projects** - Filterable portfolio of development work
4. **Skills & Services** - Technical capabilities and offered services
5. **Blog** - Technical articles and case studies
6. **Resume** - Interactive resume with downloadable PDF
7. **Contact** - Comprehensive contact form with alternative methods

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/edwinogola/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   EMAIL_SERVICE=gmail
   EMAIL_USERNAME=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   CONTACT_EMAIL=your-email@gmail.com
   ```

4. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Usage

### Adding New Projects

1. Add project images to `/public/images/projects/`
2. Add project data to `/src/lib/projects.js`

### Adding Blog Posts

1. Create a new Markdown file in `/src/content/blog/`
2. Include frontmatter with title, date, excerpt, and featured image

## 🌐 Deployment🌍

This site is optimized for deployment on Vercel:

```bash
npm run build
# or
vercel deploy
```

## 📧 Contact📞

Edwin Ogola - [hello@edwinogola.com](mailto:hello@edwinogola.com)

Website: [edwinogola.com](https://edwinogola.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the East African tech community.
- Inspired by modern portfolio designs and Next.js best practices.

Let’s build something amazing together!