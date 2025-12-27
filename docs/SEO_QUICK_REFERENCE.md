# SEO Quick Reference Guide

One-page cheatsheet for implementing and maintaining SEO best practices for Prisi Ops.

---

## Meta Tags Checklist

### Every Page Must Have:
- [ ] **Title tag** (50-60 chars, includes primary keyword + location + brand)
- [ ] **Meta description** (150-160 chars, includes CTA and benefits)
- [ ] **Canonical URL** (prevents duplicate content)
- [ ] **OG tags** (og:title, og:description, og:image, og:url)
- [ ] **Twitter Card tags** (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] **Lang attribute** (`<html lang="en">`)
- [ ] **Theme color** (mobile browser chrome)
- [ ] **Viewport meta tag** (mobile responsiveness)

### Example Meta Tags:
```html
<title>AI Automation for Dallas-Fort Worth Businesses | Prisi Ops</title>
<meta name="description" content="Reduce costs 40-80%, save 15-30 hrs/week. Dallas-Fort Worth AI automation experts." />
<link rel="canonical" href="https://prisiops.com" />
```

---

## Structured Data Checklist

- [ ] **Organization schema** (establishes business identity)
- [ ] **LocalBusiness schema** (critical for local SEO)
- [ ] **Service schema** (defines your offerings)
- [ ] **Review schema** (when client testimonials added)

### Testing:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

---

## Image Optimization Checklist

### File Naming:
- ✅ GOOD: `ai-automation-dallas-prisi-ops.jpg`
- ❌ BAD: `IMG_001.jpg`, `screenshot.png`

### Alt Text Rules:
- [ ] Descriptive and specific
- [ ] Include keywords where natural
- [ ] Under 125 characters
- [ ] Don't start with "Image of" or "Picture of"

### Technical Optimization:
- [ ] WebP format (with JPG fallback)
- [ ] < 100KB file size
- [ ] Lazy loading for below-fold images
- [ ] Set explicit width/height attributes

### Example:
```html
<img
  src="/ai-automation-dashboard.webp"
  alt="Prisi Ops AI automation dashboard for Dallas-Fort Worth businesses"
  width="1200"
  height="630"
  loading="lazy"
/>
```

---

## Content Optimization Quick Tips

### Target Content Length:
- Homepage sections: 300-500 words each
- Service pages: 800-1,200 words
- Blog posts: 1,500-2,500 words

### Keyword Density:
- Primary keyword: 1-2% (natural, not forced)
- Secondary keywords: 0.5-1%
- Include in first 100 words

### Heading Structure:
- **One H1** per page (main topic)
- **H2s** for major subsections
- **H3s** for supporting points
- Include keywords naturally

### Internal Linking:
- 3-5 internal links per section
- Use descriptive anchor text (not "click here")
- Link from high-authority pages to new content

---

## Primary Keywords to Target

### DFW Local (Highest Priority):
- AI automation Dallas
- AI consulting DFW
- workflow automation Dallas Fort Worth
- business process automation Dallas
- AI operations automation Texas

### National (Service-Based):
- AI agent development
- custom AI automation for business
- operations automation software
- AI workflow automation

### Long-Tail (High Intent):
- how to automate operations with AI
- AI automation cost for small business
- best AI operations platform for SMB
- ROI of AI automation

---

## Technical SEO Quick Wins

### Site Speed Targets:
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### Quick Wins (30 minutes or less):
1. **Add alt text to all images** (15-30 min)
2. **Update title and meta description** (10-15 min)
3. **Add structured data** (30-45 min)
4. **Create robots.txt and sitemap** (15-20 min)
5. **Claim Google Business Profile** (20-30 min)

### Testing Tools:
- PageSpeed Insights: https://pagespeed.web.dev
- Google Search Console: https://search.google.com/search-console
- Lighthouse (Chrome DevTools): F12 → Lighthouse tab

---

## Local SEO Essentials

### Google Business Profile Must-Haves:
- [ ] Claimed and verified
- [ ] Complete profile (100%)
- [ ] Business category: "Business Consultant" + "Software Company"
- [ ] Services listed (all 6 with descriptions)
- [ ] Regular posts (weekly)
- [ ] Photos (logo, team, work examples)
- [ ] Q&A section populated
- [ ] Encourage and respond to reviews

### NAP Consistency (Name, Address, Phone):
Use exact same format everywhere:
```
Prisi Ops
Dallas-Fort Worth, TX
hello@prisiops.com
[Phone Number]
```

### Essential Local Directories:
1. Google Business Profile
2. Yelp for Business
3. Better Business Bureau
4. LinkedIn Company Page
5. Dallas Chamber of Commerce
6. Fort Worth Chamber of Commerce

---

## Monthly SEO Tasks

### Week 1:
- [ ] Check Google Search Console for errors
- [ ] Review top performing keywords
- [ ] Monitor Core Web Vitals
- [ ] Plan content for the month

### Week 2:
- [ ] Publish blog post (2 per month)
- [ ] Share on LinkedIn and socials
- [ ] Respond to 2-3 HARO queries
- [ ] Update Google Business Profile

### Week 3:
- [ ] Outreach for guest post opportunities (5 emails)
- [ ] Engage in DFW business groups
- [ ] Monitor new backlinks
- [ ] Check competitor rankings

### Week 4:
- [ ] Publish second blog post
- [ ] Review month's analytics
- [ ] Update internal linking
- [ ] Submit to 1-2 new directories

---

## Content Publishing Checklist

### Before Publishing:
- [ ] Keyword research completed (1 primary, 2-3 secondary)
- [ ] Title includes primary keyword
- [ ] First 100 words include primary keyword
- [ ] Subheadings (H2/H3) every 200-300 words
- [ ] 3-5 internal links with descriptive anchors
- [ ] 2-3 external links to authoritative sources
- [ ] All images have alt text
- [ ] Meta description written (150-160 chars)
- [ ] Content is 1,500-2,500 words
- [ ] Clear CTA at the end

### After Publishing:
- [ ] Submit URL to Google Search Console
- [ ] Share on LinkedIn
- [ ] Share on Google Business Profile
- [ ] Email to newsletter subscribers
- [ ] Engage with comments/shares

---

## Link Building Quick Reference

### Monthly Link Building Goals:
- Build 3-5 quality backlinks
- Respond to 8-12 HARO queries
- Reach out for 2 guest post opportunities
- Secure 1 local citation/mention

### High-Value Link Targets:
**Tier 1** (DA 60+): Forbes, Entrepreneur, VentureBeat
**Tier 2** (DA 40-60): Industry blogs, SaaS publications
**Tier 3** (DA 30-40): DFW media, local tech blogs

### Link Building Tactics:
1. **Guest blogging** - Reach out to relevant sites
2. **HARO (Help a Reporter Out)** - Provide expert quotes
3. **Broken link building** - Find and replace broken links
4. **Linkable assets** - Create tools, guides, infographics
5. **Local partnerships** - Collaborate with DFW organizations

---

## Conversion Optimization

### Key Conversion Points:
1. **Contact form** (Connect section)
2. **Calendly link** (Schedule consultation)
3. **Email link** (hello@prisiops.com)
4. **LinkedIn link** (social proof)

### CTA Best Practices:
- Use action verbs ("Schedule", "Get", "Start")
- Create urgency ("Free consultation", "Limited spots")
- Be specific ("Schedule 30-min consultation")
- Make it visible (contrasting colors, prominent placement)

### A/B Testing Ideas:
- CTA button text
- Form placement
- Headline variations
- Trust indicators position

---

## Tools Cheat Sheet

### Essential (Free):
- **Google Search Console** - Performance monitoring
- **Google Analytics 4** - Traffic analysis
- **PageSpeed Insights** - Speed testing
- **Screaming Frog** (free version) - Technical audits (500 URLs)

### Recommended (Paid):
- **Ahrefs** or **SEMrush** ($99-199/mo) - Keyword research, backlinks
- **Surfer SEO** ($59-199/mo) - Content optimization
- **BuzzStream** ($24+/mo) - Outreach management

### Browser Extensions:
- **MozBar** - Quick DA/PA checks
- **SEOquake** - On-page SEO analysis
- **Check My Links** - Find broken links
- **Lighthouse** (built-in Chrome) - Performance audits

---

## Red Flags to Watch

### Immediate Action Required:
- ⚠️ Sudden traffic drop (> 30%)
- ⚠️ Google Search Console errors
- ⚠️ Core Web Vitals in "Poor" range
- ⚠️ Security warnings or penalties
- ⚠️ Site not mobile-friendly

### Monitor Closely:
- ⚡ Declining rankings for primary keywords
- ⚡ Increasing bounce rate (> 70%)
- ⚡ Decreasing CTR in search results
- ⚡ Lost backlinks from quality sites
- ⚡ Competitor ranking improvements

---

## Quick Fixes for Common Issues

### Problem: Low CTR in Search Results
**Fix**: Rewrite meta description with compelling CTA and benefits

### Problem: High Bounce Rate
**Fix**: Improve page speed, ensure content matches search intent

### Problem: Not Ranking for Target Keywords
**Fix**: Increase keyword density, add more comprehensive content

### Problem: Low Domain Authority
**Fix**: Focus on acquiring quality backlinks from relevant sites

### Problem: Poor Mobile Experience
**Fix**: Increase touch target sizes, improve mobile load speed

---

## Monthly Reporting Template

### Executive Summary:
- Total organic traffic: [X] (+/- Y% vs last month)
- Top 10 keyword rankings: [X] (+/- Y vs last month)
- New backlinks acquired: [X]
- Conversions from organic: [X] (+/- Y% vs last month)

### Key Wins:
1. [Specific achievement]
2. [Ranking improvement]
3. [Traffic milestone]

### Top Opportunities:
1. [Keyword to target]
2. [Content gap to fill]
3. [Link building opportunity]

### Action Items for Next Month:
1. [Specific task]
2. [Content to create]
3. [Optimization priority]

---

## Emergency Contact Info

### When to Seek Expert Help:
- Google penalty or manual action
- Site hacked or compromised
- Sudden, unexplained traffic loss (> 50%)
- Technical issues beyond your expertise
- Need for comprehensive audit

### SEO Resources:
- Google Search Central: https://developers.google.com/search
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Blog: https://ahrefs.com/blog
- Search Engine Journal: https://www.searchenginejournal.com

---

**Last Updated**: December 27, 2025
**Version**: 1.0
**Owner**: Prisi Ops Marketing Team
