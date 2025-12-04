# DevForge - Software Development Agency Landing Page

A modern, responsive landing page for a software development agency built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, modern design with dark theme and cyan accents
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Glass-morphism cards
- Contact form with validation
- SEO optimized

## Editing Content

All website content is centralized in a single file for easy editing:

### Content File Location
```
src/data/content.ts
```

### What You Can Edit

#### 1. Site Configuration
Edit `siteConfig` to change:
- Company name
- Email, phone, social links (Telegram, GitHub, LinkedIn)

#### 2. Hero Section
Edit `heroContent` to change:
- Main headline
- Subheadline
- Description text
- CTA button text

#### 3. About Section
Edit `aboutContent` to change:
- Title and subtitle
- Company description
- Highlight cards (title, description, icon)

Available icons: `Zap`, `Shield`, `MessageSquare`, `Layers`

#### 4. Services Section
Edit `servicesContent.services` array to add/remove/edit services:

```typescript
{
  title: "Service Name",
  description: "Service description",
  icon: "Globe", // Available: Globe, Bot, Server, Cog, Palette, Lightbulb
  technologies: ["Tech1", "Tech2", "Tech3"],
}
```

#### 5. Portfolio/Projects Section
Edit `portfolioContent.projects` array to add/remove/edit projects:

```typescript
{
  title: "Project Name",
  description: "Project description",
  image: "/placeholder.svg", // Replace with actual image path
  technologies: ["React", "Node.js"],
  liveUrl: "https://...", // Optional
  githubUrl: "https://...", // Optional
}
```

#### 6. Testimonials Section
Edit `testimonialsContent.testimonials` array:

```typescript
{
  quote: "Client testimonial text",
  author: "Client Name",
  role: "Client Role, Company",
  avatar: "/placeholder.svg", // Optional avatar image
}
```

#### 7. Contact Section
Edit `contactContent` to change:
- Section title and subtitle
- Description text
- Form field labels

#### 8. Footer
Edit `footerContent` to change:
- Copyright text
- Footer links

## Adding Images

1. Place images in the `public/` directory
2. Reference them as `/image-name.png` in the content file

## Deployment

Deploy your changes using your preferred hosting platform (Vercel, Netlify, etc.).

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- Lucide React icons
- Framer Motion (animations)

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shadcn components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts    # All editable content
├── pages/
│   └── Index.tsx     # Main page
└── index.css         # Design system
```
