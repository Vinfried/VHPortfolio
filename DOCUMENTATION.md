# Portfolio Documentation

This document provides detailed instructions for setting up, customizing, and deploying the Game Developer Portfolio.

## Table of Contents

1. [Installation](#installation)
2. [File Structure](#file-structure)
3. [Customization Guide](#customization-guide)
4. [Adding Projects](#adding-projects)
5. [Deployment](#deployment)
6. [Performance Optimization](#performance-optimization)
7. [Troubleshooting](#troubleshooting)

## Installation

To get started with this portfolio locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Vinfried/VHPortfolio.git
   cd VHPortfolio
   ```

2. Open `index.html` in your browser to view the site locally.

3. For live reloading during development, you can use a tool like live-server:
   ```bash
   # Install live-server globally (requires Node.js)
   npm install -g live-server
   
   # Run from the project directory
   live-server
   ```

## File Structure

```
VHPortfolio/
├── index.html               # Main HTML file
├── style.css                # Main stylesheet
├── scripts.js               # JavaScript functionality
├── assets/                  # Static assets
│   ├── images/              # Images for the portfolio
│   ├── icons/               # Icons and favicons
│   └── docs/                # Downloadable documents
├── .github/                 # GitHub-specific files
│   ├── workflows/           # GitHub Actions workflows
│   └── CONTRIBUTING.md      # Contribution guidelines
├── README.md                # Project overview
└── DOCUMENTATION.md         # This detailed documentation
```

## Customization Guide

### Personal Information

1. Open `index.html` and update the following:
   - Replace "Victor Hugo" with your name throughout the document
   - Update meta tags and titles
   - Update contact information in the contact section
   - Replace social media links

### Styling

1. Open `style.css` to modify the visual appearance:
   - Color variables are defined at the top in the `:root` section
   - Font sizes and spacing can be adjusted in the same section
   - Dark mode styles can be customized in the `[data-theme="dark"]` section

### Projects

1. Edit the project cards in the "Featured Projects" section
2. Update project details in the `getProjectDetails()` function in `scripts.js`

### Skills

Modify the skills section to reflect your actual skill levels:
1. Edit the list items in the skills section
2. Adjust the skill progress values (--progress) to reflect your proficiency

## Adding Projects

To add a new project:

1. Add a new project card in the `index.html` file's project section
2. Add the project details in the `getProjectDetails()` function in `scripts.js`
3. Place project images in the `assets/images/` directory
4. Update the data-category attribute to ensure proper filtering

Example project card structure:
```html
<article class="project-card" data-category="unreal cpp">
    <div class="project-preview">
        <img src="assets/images/your-project.jpg" alt="Project Title" loading="lazy" width="600" height="340">
        <div class="project-links">
            <a href="#project-modal" class="btn btn-small project-details-trigger">Details</a>
            <a href="https://github.com/username/project" class="btn btn-small" target="_blank">Code</a>
            <a href="#gameplay" class="btn btn-small">Demo</a>
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Project Title</h3>
        <p class="project-description">Short description of the project.</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</article>
```

## Deployment

### GitHub Pages Deployment

This portfolio is pre-configured for GitHub Pages deployment:

1. Ensure your repository is public
2. GitHub Actions workflow will automatically deploy to GitHub Pages on push to main
3. The site will be available at `https://[your-username].github.io/VHPortfolio/`

### Manual Deployment

To deploy to a different hosting service:

1. Upload all files to your web server
2. Ensure the file structure is maintained
3. No build process is required as this is a static website

## Performance Optimization

For optimal performance:

1. Compress all images using tools like TinyPNG or Squoosh
2. Convert images to WebP format where possible
3. Use appropriate image sizes (don't use larger images than needed)
4. Minify CSS and JavaScript files for production

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths in HTML
   - Ensure images are in the correct directory

2. **JavaScript features not working**
   - Check browser console for errors
   - Verify that scripts.js is properly linked

3. **Deployment issues**
   - Check GitHub Actions tab for workflow failures
   - Ensure GitHub Pages is enabled in repository settings

### Getting Help

If you encounter issues:

1. Check the documentation first
2. Search for similar issues in the repository's Issues tab
3. Open a new issue with a detailed description of the problem