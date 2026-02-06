# Ali Siam - Cybersecurity Portfolio 🔐

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![WCAG AA](https://img.shields.io/badge/WCAG-AA_Compliant-blue)

A modern, cybersecurity-themed personal portfolio showcasing my experience, projects, and skills in cybersecurity and penetration testing.

## 🌐 Live Demo

**[View Portfolio](https://naziulsiam.github.io/aliportfolio/)**

## 📋 About

This portfolio website highlights my:
- **Professional Experience** in cybersecurity and penetration testing
- **Education** and academic background
- **Technical Projects** demonstrating real-world problem-solving
- **Skills & Expertise** across security tools, programming, and methodologies
- **Security Documentation** work and technical writing

## ✨ Features

### Design & UX
- 🎨 **Cybersecurity Theme**: Dark mode design with cyan/purple accents and animated grid background
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Loading**: Optimized performance with smooth animations
- 🎭 **Custom 404 Page**: Cybersecurity-themed error page with helpful navigation

### Accessibility & SEO
- ♿ **WCAG AA Compliant**: Improved color contrast and accessibility features
- 🔍 **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Cards
- ⌨️ **Keyboard Navigation**: Full keyboard accessibility with visible focus states
- 📢 **Screen Reader Friendly**: Proper ARIA labels and semantic HTML

### Interactive Features
- 📧 **Contact Form**: Integrated contact form with validation and feedback
- ✅ **Form Validation**: Real-time validation with helpful error messages
- 🔄 **Loading States**: Visual feedback during form submission
- 🔝 **Smooth Navigation**: Fixed navbar with smooth scrolling and active section highlighting
- 🔝 **Back to Top**: Convenient scroll-to-top button

### Technical
- 📄 **Modular Structure**: Separated HTML, CSS, and JavaScript files
- 🔒 **PWA Ready**: Web manifest configured for progressive web app support
- 🎯 **Clean Code**: Well-organized, commented, and maintainable codebase

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom animations and effects
- **TailwindCSS**: Utility-first CSS framework
- **JavaScript (Vanilla)**: Interactive features and animations
- **FormSubmit.co**: Contact form handling

## 📁 Project Structure

```
aliportfolio/
├── index.html          # Main HTML file
├── 404.html             # Custom error page
├── css/
│   └── style.css       # Custom styles and animations
├── js/
│   └── script.js       # Interactive functionality
├── assets/
│   ├── site.webmanifest  # PWA configuration
│   └── README.md         # Asset generation guide
├── alisiam.pdf         # Downloadable CV/Resume
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a static website that runs directly in any modern browser.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/naziulsiam/aliportfolio.git
   cd aliportfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` (or the port shown)

## 🎨 Customization

### Update Personal Information

1. **Contact Details** (in `index.html`):
   - Email: Search for `naziulsiam3@gmail.com`
   - Phone: Search for `+44 7944 250839`
   - LinkedIn: Update the placeholder link in the contact section

2. **Content Sections**:
   - About: `#about` section
   - Experience: `#experience` section
   - Education: `#education` section
   - Projects: `#projects` section
   - Skills: `#skills` section

### Modify Styling

- **Colors**: Edit CSS variables in `css/style.css` (lines 5-15)
- **Animations**: Modify keyframes in `css/style.css`
- **Layout**: Adjust Tailwind classes in `index.html`

### Add Favicons

See `assets/README.md` for detailed instructions on generating favicon files. Current site uses a temporary SVG emoji.

### Update CV/Resume

Replace `alisiam.pdf` with your own resume file (keep the same filename or update the link in `index.html`).

## 📧 Contact Form Setup

The contact form uses [FormSubmit.co](https://formsubmit.co) for handling submissions.

**To use your own email:**
1. Find the form in `index.html` (search for `formsubmit.co`)
2. Replace the email in the action URL:
   ```html
   <form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
   ```
3. First submission will require email verification from FormSubmit

**Features included:**
- Real-time validation (name, email, message)
- Loading spinner during submission
- Success/error feedback messages
- Form reset on successful submission

## 🔧 Deployment

### GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select **main** branch as source
3. Click **Save**
4. Your site will be live at `https://yourusername.github.io/aliportfolio/`

### Custom Domain

1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Other Platforms

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import project and deploy with zero configuration
- **Cloudflare Pages**: Fast global CDN deployment
- **Any Static Host**: Upload the entire folder to any web server

## 📝 Sections Overview

1. **Hero Section**: Introduction with CTA for placement opportunities
2. **About**: Professional summary and career objectives
3. **Experience**: Work history with detailed responsibilities
4. **Education**: Academic qualifications
5. **Projects**: Portfolio of completed and ongoing projects
6. **Skills**: Technical skills categorized by domain
7. **Documentation**: Security documentation work
8. **Contact**: Contact form and information

## ✅ Recent Improvements

- ✅ Separated CSS and JavaScript into external files
- ✅ Added comprehensive SEO meta tags
- ✅ Improved WCAG AA color contrast compliance
- ✅ Added form validation with real-time feedback
- ✅ Created custom 404 error page
- ✅ Added PWA web manifest
- ✅ Enhanced accessibility with ARIA labels
- ✅ Improved keyboard navigation and focus states

## 🎯 Future Enhancements

- [ ] Generate proper favicon files (multiple sizes)
- [ ] Add project screenshots and demos
- [ ] Implement dark/light theme toggle
- [ ] Add blog/articles section
- [ ] Integrate privacy-friendly analytics
- [ ] Add certifications section
- [ ] Create downloadable project case studies
- [ ] Add testimonials/recommendations
- [ ] Optimize images with WebP format

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ali Reza Mohammad Naziul Haque (Siam)**

- GitHub: [@naziulsiam](https://github.com/naziulsiam)
- Email: naziulsiam3@gmail.com
- LinkedIn: 

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first framework
- FormSubmit.co for contact form handling
- The cybersecurity community for inspiration
- Open source contributors and the web development community

---

⭐ **Seeking Cybersecurity Placement Year 2026** | SOC Analyst • Penetration Tester • Blue Team

*Built with passion for cybersecurity and clean code.*
