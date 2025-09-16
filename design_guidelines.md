# Design Guidelines: Professional Software Product Showcase Website

## Design Approach: Reference-Based (Enterprise Software)
Drawing inspiration from leading B2B software companies like Salesforce, HubSpot, and Notion for professional credibility while maintaining modern appeal.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Brand Primary: 216 100% 50% (Professional blue)
- Brand Secondary: 216 15% 20% (Deep charcoal)

**Supporting Colors:**
- Success: 142 69% 58% (Professional green)
- Warning: 38 92% 50% (Amber)
- Background Light: 220 14% 96%
- Background Dark: 216 15% 8%

### B. Typography
- **Primary Font:** Inter (Google Fonts) - Clean, professional sans-serif
- **Headings:** Font weights 600-700, sizes from text-2xl to text-5xl
- **Body:** Font weight 400-500, text-base to text-lg
- **Code/Technical:** JetBrains Mono for any code snippets

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Small gaps: space-y-4, p-4
- Medium spacing: space-y-8, p-8
- Large sections: space-y-16, p-16
- Container max-width: max-w-7xl with mx-auto

### D. Component Library

**Navigation:**
- Fixed header with transparent-to-solid scroll transition
- Clean horizontal navigation with subtle hover states
- Mobile hamburger menu with slide-out drawer

**Hero Sections:**
- Large, impactful headlines with supporting subtext
- Strategic use of gradients (216 100% 60% to 260 100% 55%)
- Professional software screenshots as hero imagery

**Product Showcases:**
- Clean grid layouts (2-3 columns on desktop)
- Card-based design with subtle shadows
- Feature highlight sections with icon + text combinations

**Forms & CTAs:**
- Primary buttons with solid fills and professional hover states
- Secondary buttons with outline variants
- Clean, accessible form inputs with proper labeling

### E. Specific Implementation Notes

**Multi-page Structure:**
- Homepage: Hero + product overview + social proof
- Individual product pages (CRM, ERP, Billing): Detailed feature showcases
- Consistent header/footer across all pages

**Professional Software Aesthetic:**
- Clean, minimal design avoiding flashy elements
- Focus on readability and clear information hierarchy
- Strategic use of whitespace for breathing room
- Professional color scheme building trust and credibility

**Responsive Design:**
- Mobile-first approach with clean breakpoints
- Simplified navigation and stacked layouts on mobile
- Maintained visual hierarchy across all screen sizes

## Images
**Hero Images:** Large, high-quality software interface screenshots showcasing the dashboard/main interface of each product. Place prominently in hero sections of homepage and individual product pages.

**Feature Images:** Smaller interface screenshots highlighting specific features, placed alongside descriptive text in feature sections.

**Background Elements:** Subtle geometric patterns or gradients as section backgrounds, maintaining professional appearance without distraction.