# Accessibility Guidelines

This portfolio is designed to comply with WCAG 2.1 AA standards. This document outlines the accessibility features implemented and provides guidelines for maintaining accessibility when making changes.

## Implemented Accessibility Features

### Navigation and Structure

- Skip-to-content link for keyboard users
- Proper heading hierarchy (h1-h6)
- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA landmarks for key page regions
- Keyboard-navigable components

### Visual Design

- Sufficient color contrast meeting WCAG AA standards
- Text resizing without loss of functionality
- Focus indicators for keyboard navigation
- No content that flashes more than three times per second
- Dark mode option for light sensitivity

### Content

- Alt text for all images
- Accessible form labels and error messages
- ARIA labels for icons and interactive elements without visible text
- Language attribute set on HTML element

### Interactive Elements

- Keyboard accessibility for all interactive components
- ARIA states for interactive elements (expanded, selected, etc.)
- Proper focus management for modals and dynamic content
- Touch-friendly target sizes (minimum 44×44px)

## Testing Accessibility

When making changes to the portfolio, ensure accessibility is maintained by:

1. Testing with keyboard navigation (Tab, Enter, Space, Arrow keys)
2. Checking color contrast (use tools like WebAIM's Contrast Checker)
3. Validating with automated testing tools:
   - WAVE Web Accessibility Evaluation Tool
   - Axe DevTools
   - Lighthouse Accessibility Audit
4. Testing with screen readers (NVDA, VoiceOver, or JAWS)

## Accessibility Checklist

### Images and Media

- [ ] All images have appropriate alt text
- [ ] Decorative images have empty alt attributes (`alt=""`)
- [ ] Complex images have extended descriptions
- [ ] Videos have captions and transcripts

### Keyboard and Navigation

- [ ] All functionality is available using only a keyboard
- [ ] Focus order is logical and intuitive
- [ ] Focus indicators are clearly visible
- [ ] No keyboard traps

### Forms

- [ ] All form controls have associated labels
- [ ] Form validation errors are clearly identified
- [ ] Required fields are clearly marked
- [ ] Error messages are associated with their form fields

### Structure and Semantics

- [ ] Proper heading structure
- [ ] ARIA landmarks are used appropriately
- [ ] Lists are marked up properly
- [ ] Tables have proper headers and captions if used

### Color and Visual Design

- [ ] Color is not the only means of conveying information
- [ ] Text has sufficient contrast against background
- [ ] UI components have sufficient contrast
- [ ] Content is readable when zoomed to 200%

## Resources

- [WebAIM: Web Accessibility In Mind](https://webaim.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN: Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)