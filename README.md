Beff Star — Software Engineer Portfolio (Modern SPA)

A stunning, interactive single-page portfolio website built with semantic HTML, Tailwind CSS, GSAP animations, and vanilla JavaScript. Fully responsive, SEO-optimized, and designed with modern web standards.

Features

✨ Design & UX
- Tailwind CSS for rapid, responsive design
- Premium fonts: Geist & Geist Mono from Google Fonts
- Glass morphism UI with backdrop blur effects
- Smooth scroll behavior and animated transitions
- Dark theme with gradient accents (Cyan/Teal)
- Fully responsive mobile-first design

🎬 Animations & Interactivity
- GSAP 3 animations with ScrollTrigger
- Scroll-triggered fade-in and stagger effects
- Hover animations on cards (lift, scale)
- Parallax scrolling on hero section
- Marquee skill carousel (infinite loop, pausable)
- Counter animations for stats
- Ripple effects on buttons
- Header scroll effect with glassmorphism

📸 Content & Media
- Placeholder images from Unsplash (easily replaceable)
- 4 featured projects with hover effects
- 3 testimonials with star ratings
- 3 blog article previews
- Hero section with CTA buttons
- About section with float animation

🔧 Functionality
- Hash-based SPA routing (no external framework needed)
- Contact form with validation & status messages
- Resume download button
- Mobile navigation toggle
- Social links (Twitter, GitHub, LinkedIn)
- SEO meta tags & structured data (schema.org)

📂 File Structure

```
Beff-Portfolio1/
├── index.html           # Main SPA with all sections
├── js/
│   └── app.js          # GSAP animations + interactivity
├── css/
│   (Styles now in index.html via Tailwind CDN)
└── README.md           # This file
```

Quick Start

1. Open in browser (no build step required!)
   Simply open `index.html` in your browser, or serve locally:

   ```powershell
   # From project root
   python -m http.server 8000
   # Open http://localhost:8000
   ```

2. Customize
   - Replace placeholder content with your real projects, bio, testimonials
   - Update social links (Twitter, GitHub, LinkedIn)
   - Replace Unsplash images with your own
   - Update domain in meta tags and schema.org

3. Add Resume
   - Place `resume.pdf` in the project root for the Resume button to work

Sections

1. **Home** - Hero with CTA buttons and stat cards
2. **About** - Biography with portrait and key highlights
3. **Skills** - Marquee carousel of tech stack (scrolling)
4. **Projects** - 4 featured projects with images, tags, links
5. **Testimonials** - 3 client testimonials with stars & avatars
6. **Blog** - Latest articles preview (3 posts)
7. **Contact** - Contact form with validation

Animations

- Fade-in on scroll (staggered)
- Parallax hero background
- Card hover lift (y: -10px)
- Button ripple effects
- Header glassmorphism on scroll
- Marquee infinite loop (pausable on hover)
- Counter animations (50+, 8+, 100% stats)
- Form transitions

Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS v3** - Utility-first styling (CDN)
- **JavaScript (Vanilla)** - SPA routing & interactivity
- **GSAP 3** - Advanced animations & ScrollTrigger
- **Lucide Icons** - SVG icon library (CDN)
- **Google Fonts** - Geist typography

Performance

- No build step required (CDN-based)
- Lightweight & fast
- SEO-friendly with meta tags
- Accessible (ARIA labels, semantic HTML)
- Mobile-optimized

Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Customization Guide

Update Your Info
1. Edit hero title & description in `index.html`
2. Replace "Beff Star" with your name
3. Update About section with your bio
4. Change project cards with your work

Add Your Resume
1. Place `resume.pdf` in project root
2. Download button will work automatically

Replace Images
- Update Unsplash URLs in img src attributes
- Keep aspect ratios: hero (1:1), project cards (3:2)

Add More Content
- Duplicate project card HTML to add more projects
- Duplicate testimonial cards for more reviews
- Add blog articles by copying article cards

Deployment

Deploy to:
- **GitHub Pages** - Free, automatic from repo
- **Netlify** - Drag & drop or Git sync
- **Vercel** - Optimized for Next.js (can host static too)
- **Any static host** - No backend needed

Update before deploying:
1. Change canonical URL in meta tags
2. Replace placeholder images
3. Add real project links
4. Update social links
5. Add resume.pdf

SEO

- Title & meta description
- Canonical URL
- Open Graph tags
- Twitter Card tags
- Structured data (Person schema)
- Semantic HTML
- Mobile responsive

Future Enhancements (Optional)

- Dark/light mode toggle
- Smooth page transitions
- Project detail modals
- Blog post pages
- Email form integration (Netlify Forms, Formspree)
- Lighthouse performance optimization
- PWA (offline support)

Questions?

Refer to the inline HTML comments or customize as needed. The site is production-ready and can be deployed immediately.

Built with ❤️ using modern web technologies.

THIS IS MY PORTFOLIO
