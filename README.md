# Claire's Wedding Planning Adventures Website

A beautiful, modern website for Claire's wedding and event planning business. This website showcases her portfolio, services, and provides an easy way for potential clients to get in touch.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Portfolio Showcase**: Interactive gallery of wedding and event projects
- **Contact Form**: Automatic form handling with validation
- **Service Pages**: Detailed information about wedding planning services
- **SEO Optimized**: Built with search engine optimization in mind

## Pages

1. **Homepage** (`index.html`) - Hero section, about, services, and testimonials
2. **Portfolio** (`portfolio.html`) - Interactive gallery of wedding projects
3. **Contact** (`contact.html`) - Contact form and business information

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Playfair Display & Open Sans)

## Getting Started

### Option 1: Simple File Server
1. Download all files to a folder
2. Open `index.html` in a web browser
3. For full functionality, serve files through a local server

### Option 2: Local Development Server
1. Install a simple HTTP server:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` in your browser

### Option 3: Deploy to Web Hosting
1. Upload all files to your web hosting provider
2. Ensure the domain points to the folder containing `index.html`
3. The website will be live immediately

## File Structure

```
claire-wedding-website/
├── index.html          # Homepage
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Contact Information
Update the following in all HTML files:
- Phone number: `(555) 123-4567`
- Email: `claire@clairesevents.com`
- Location: `Your City, State`

### Form Handling
The contact form currently simulates form submission. To make it functional:

1. **Option A: Formspree (Recommended for beginners)**
   - Sign up at [formspree.io](https://formspree.io)
   - Replace the form action in `contact.html`
   - Add your form endpoint

2. **Option B: Netlify Forms**
   - Deploy to Netlify
   - Add `netlify` attribute to the form
   - Forms will be handled automatically

3. **Option C: Custom Backend**
   - Modify the `submitContactForm` function in `script.js`
   - Replace with your API endpoint
   - Handle form data on your server

### Images
Replace placeholder images with Claire's actual wedding photos:
- Update image URLs in HTML files
- Recommended sizes:
  - Hero images: 1000x600px
  - Portfolio images: 800x600px
  - Profile images: 400x400px

### Colors and Branding
Main color scheme is defined in CSS variables:
- Primary Gold: `#d4af37`
- Light Gold: `#f4e4bc`
- Dark Text: `#333`
- Light Text: `#666`

## Deployment Options

### Free Hosting Options

1. **Netlify** (Recommended)
   - Drag and drop your folder to [netlify.com](https://netlify.com)
   - Automatic HTTPS and CDN
   - Built-in form handling

2. **Vercel**
   - Connect your GitHub repository
   - Automatic deployments
   - Great for static sites

3. **GitHub Pages**
   - Upload to GitHub repository
   - Enable Pages in repository settings
   - Free hosting with custom domain support

4. **Firebase Hosting**
   - Install Firebase CLI
   - Deploy with `firebase deploy`
   - Global CDN and HTTPS

### Paid Hosting Options

1. **Traditional Web Hosting** (Bluehost, HostGator, etc.)
2. **VPS Hosting** (DigitalOcean, Linode, etc.)
3. **Cloud Hosting** (AWS, Google Cloud, Azure)

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions
- Alt text for images
- Proper heading hierarchy
- Fast loading times

### Additional SEO Steps
1. Add Google Analytics
2. Submit sitemap to Google Search Console
3. Add structured data markup
4. Optimize images for web
5. Add meta keywords (optional)

## Performance Features

- Optimized images with proper sizing
- Minimal external dependencies
- Efficient CSS and JavaScript
- Responsive images
- Lazy loading for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Regular Updates
- Update portfolio with new projects
- Keep contact information current
- Add new testimonials
- Update service offerings

### Security
- Keep hosting platform updated
- Use HTTPS (most hosting providers include this)
- Regular backups of website files

## Support

For technical support or customization requests, contact your web developer or refer to the documentation of your chosen hosting platform.

## License

This website template is created for Claire's wedding planning business. Please customize as needed for your own use.

---

**Created with ❤️ for Claire's Wedding Planning Adventures**
