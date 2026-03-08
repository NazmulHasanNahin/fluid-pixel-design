

# DEVZeroOne Content Replacement Plan

Replace all content across the site while keeping FAQ section. No design/animation changes.

## Files to Update

### 1. `src/components/Navbar.tsx`
- Brand: Diamond icon + "Awake" → Code icon + "DEVZeroOne"
- Links: `["Home", "Services", "Portfolio", "Pricing", "About", "FAQ"]`
- CTA: "Let's Collaborate" → "Book A Free Call"

### 2. `src/components/HeroSection.tsx`
- Headline: "High Converting Shopify Stores" + italic "for DTC Brands"
- Subtitle: "We design, develop, and optimize conversion focused Shopify stores for fast growing DTC brands worldwide."
- CTA buttons: "Book A Free Call" + "View Our Project"
- Replace social proof with stats strip: 7+ Projects, 5+ Clients, 2+ Years, 98% Satisfaction
- Keep video placeholder, update label to "Watch our process"

### 3. `src/components/ServicesSection.tsx`
- Title: "What We Do" / subtitle "Our Services"
- Subtitle text: "End-to-end Shopify solutions designed to help your brand grow from zero to one."
- 6 services: Shopify Store Design, Store Redesign, Custom Development, Dropshipping Setup, Store Optimization, Growth Strategy

### 4. `src/components/AboutStats.tsx`
- Repurpose as "Why Choose DEVZeroOne" section with 6 value cards
- Cards: Treats your business like our own, Trusted business partner, Client satisfaction is top priority, Focus on long-term growth, Delivers real results, Data-driven decision making
- Remove old stats (moved to hero)

### 5. `src/components/CTABanner.tsx`
- "See Our Work in Action" → "Ready to Start Your Shopify Journey?"
- "Start Your Creative Journey" → "Let's build a store that converts"
- Buttons: "Book A Free Call" + "View Portfolio"

### 6. `src/components/PortfolioSection.tsx`
- Title: "Our Recent Work"
- Subtitle: "Explore some of the successful Shopify stores we've built for clients worldwide."
- 6 projects: NeurospicyKidz (Toy), Esabao (Dropshipping), Noeva Boutique (Fashion), Health Care Store, One Product Store, DecalGraphixx (Sticker)

### 7. `src/components/TeamSection.tsx`
- Repurpose as "How Does It Work" — 5-step process section
- Steps: 30 Min Consultancy → Requirement & Analysis → Implementation → Revision → Project Delivery
- Use numbered cards instead of team member cards

### 8. `src/components/TestimonialsSection.tsx`
- Keep but update content for Shopify context
- "Working with Awake" → "Working with DEVZeroOne transformed our online store..."
- Update names/companies to e-commerce context

### 9. `src/components/PricingSection.tsx`
- 3 plans: Basic ($80), Standard ($250, BEST VALUE), Premium ($300)
- Full feature lists from provided content
- CTA: "Book a Call"

### 10. `src/components/FAQSection.tsx`
- Keep section, update questions to Shopify-focused content
- New FAQs about Shopify services, timelines, revisions, etc.

### 11. `src/components/AccoladesSection.tsx`
- Remove from Index.tsx (not in new content)

### 12. `src/components/FinalCTA.tsx`
- Title: "Ready to Build a High Converting Shopify Store?"
- Subtitle about e-commerce growth
- CTA: "Book A Free Call"
- Add contact form (name, email, message + Send Message button)

### 13. `src/components/Footer.tsx`
- Brand: "DEVZeroOne"
- Tagline: "We build high converting Shopify stores..."
- Quick Links: Services, Portfolio, Pricing, About, Contact
- Services column: Shopify Store Design, Shopify Store Redesign, Dropshipping Setup
- Contact: contact@devzeroone.com, Worldwide Remote, Book A Free Call
- Socials → remove or keep generic

### 14. `src/components/LogoMarquee.tsx`
- Update text: "Trusted by DTC brands worldwide" or remove — will keep with updated text

### 15. `src/pages/Index.tsx`
- Remove: AccoladesSection
- Keep order: Hero → LogoMarquee → AboutStats (Why Choose) → Services → CTA → Portfolio → Team (Process) → Testimonials → Pricing → FAQ → FinalCTA → Footer

### 16. `src/pages/Contact.tsx`
- Update brand to DEVZeroOne, contact info to contact@devzeroone.com, Worldwide Remote
- Simplify form: Name, Email, Message
- Subject options → Shopify services

### 17. `src/hooks/useActiveSection.ts`
- Update section IDs: `["home", "services", "portfolio", "pricing", "about", "faq"]`

**~17 files modified, content-only changes, all animations and design preserved.**

