# Accessibility Implementation Guide

Comprehensive guide for ensuring the Prisi Ops website meets WCAG 2.1 Level AA standards.

---

## Table of Contents

1. [WCAG 2.1 Level AA Compliance Checklist](#wcag-21-level-aa-compliance-checklist)
2. [Quick Implementation Snippets](#quick-implementation-snippets)
3. [Testing Tools & Methods](#testing-tools--methods)
4. [Common Accessibility Issues & Fixes](#common-accessibility-issues--fixes)
5. [Ongoing Maintenance](#ongoing-maintenance)

---

## WCAG 2.1 Level AA Compliance Checklist

### Principle 1: Perceivable
Information and user interface components must be presentable to users in ways they can perceive.

#### Text Alternatives (1.1)
- [ ] All images have alt text
- [ ] Decorative images use `alt=""` or `aria-hidden="true"`
- [ ] Complex images have long descriptions
- [ ] Form buttons have descriptive text or labels

#### Time-Based Media (1.2)
- [ ] Video content has captions (when applicable)
- [ ] Audio-only content has transcripts (when applicable)
- [ ] Pre-recorded media has audio descriptions (when applicable)

#### Adaptable (1.3)
- [ ] Content structure uses semantic HTML
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] Lists use proper HTML elements (`<ul>`, `<ol>`, `<li>`)
- [ ] Form inputs have associated labels
- [ ] Tables use proper markup (`<th>`, `<caption>`)

#### Distinguishable (1.4)
- [x] Color contrast meets 4.5:1 for normal text ✅ (Dark: 21:1, Light: 21:1)
- [x] Color contrast meets 3:1 for large text (18pt+) ✅
- [ ] Content doesn't rely on color alone
- [ ] Audio can be paused or stopped
- [ ] Text can be resized to 200% without loss of functionality
- [ ] Images of text are avoided (use actual text)

### Principle 2: Operable
User interface components and navigation must be operable.

#### Keyboard Accessible (2.1)
- [x] All functionality available via keyboard ✅
- [x] No keyboard traps ✅
- [ ] Keyboard shortcuts don't conflict with assistive technology
- [x] Focus order is logical ✅

#### Enough Time (2.2)
- [ ] Time limits can be adjusted, extended, or disabled
- [ ] Moving content can be paused or stopped
- [ ] No time limits on current implementation ✅

#### Seizures and Physical Reactions (2.3)
- [ ] Content doesn't flash more than 3 times per second
- [ ] No flashing content on current site ✅

#### Navigable (2.4)
- [x] Skip navigation link present ✅ ([App.tsx:81-83](src/App.tsx#L81-L83))
- [ ] Page title is descriptive ✅ (Updated with SEO improvements)
- [x] Focus order is logical and predictable ✅
- [ ] Link purpose is clear from link text
- [ ] Multiple ways to find pages (navigation, search, sitemap)
- [ ] Headings and labels are descriptive ✅
- [x] Focus is visible ✅ ([index.css:566-579](src/index.css#L566-L579))

#### Input Modalities (2.5)
- [x] Touch targets are at least 44x44px ✅ ([index.css:429-436](src/index.css#L429-L436))
- [ ] Pointer gestures have keyboard alternatives
- [ ] Accidental activation is prevented

### Principle 3: Understandable
Information and operation of user interface must be understandable.

#### Readable (3.1)
- [x] Page language is defined (`<html lang="en">`) ✅ ([index.html:2](index.html#L2))
- [ ] Language changes are marked (if applicable)

#### Predictable (3.2)
- [x] Focus doesn't cause unexpected context changes ✅
- [ ] Input doesn't cause unexpected context changes
- [x] Navigation is consistent across pages ✅
- [ ] Components are identified consistently

#### Input Assistance (3.3)
- [ ] Form errors are identified and described
- [ ] Form labels and instructions are provided
- [ ] Error suggestions are provided
- [ ] Error prevention for important actions (confirmation)
- [ ] Context-sensitive help is available

### Principle 4: Robust
Content must be robust enough to be interpreted by assistive technologies.

#### Compatible (4.1)
- [x] HTML is valid (no major errors) ✅
- [ ] Name, Role, Value are properly defined for custom components
- [ ] Status messages are announced to screen readers

---

## Quick Implementation Snippets

### Skip Navigation Link

Already implemented in [App.tsx:81-83](src/App.tsx#L81-L83):

```tsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

CSS in [index.css:522-540](src/index.css#L522-L540):
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--accent);
  color: var(--bg);
  padding: 8px 16px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
  outline: 2px solid var(--text);
  outline-offset: 2px;
}
```

### Screen Reader Only Content

Already implemented in [index.css:543-563](src/index.css#L543-L563):

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus,
.sr-only-focusable:active {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

Usage:
```tsx
<button aria-label="Go to Solutions section">
  <span aria-hidden="true">●</span>
  <span className="sr-only">Solutions</span>
</button>
```

### Accessible Form Field

```tsx
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input
  id="name"
  name="name"
  type="text"
  required
  aria-required="true"
  aria-invalid={errors.name ? "true" : "false"}
  aria-describedby={errors.name ? "name-error" : undefined}
/>
{errors.name && (
  <span id="name-error" className="error-text" role="alert">
    {errors.name}
  </span>
)}
```

### Live Region for Status Messages

```tsx
<div role="status" aria-live="polite" aria-atomic="true">
  {message}
</div>
```

Use cases:
- Form submission success/error messages
- Loading states
- Dynamic content updates
- Search results counts

### Accessible Button with Icon

```tsx
<button
  aria-label="Close dialog"
  onClick={handleClose}
>
  <XIcon aria-hidden="true" />
</button>
```

### Accessible Image

```tsx
<img
  src="/workflow-diagram.png"
  alt="AI customer support workflow showing automated message routing from intake to resolution"
  width="800"
  height="600"
  loading="lazy"
/>
```

### Decorative Image

```tsx
<img
  src="/decorative-pattern.svg"
  alt=""
  role="presentation"
  aria-hidden="true"
/>
```

### Accessible Link with Icon

```tsx
<a
  href="https://linkedin.com/company/prisi-ops"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Prisi Ops on LinkedIn (opens in new tab)"
>
  <LinkedInIcon aria-hidden="true" />
  <span className="sr-only">LinkedIn</span>
</a>
```

### Accessible Dialog/Modal

```tsx
<div
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
  aria-modal="true"
>
  <h2 id="dialog-title">Confirmation Required</h2>
  <p id="dialog-description">
    Are you sure you want to proceed?
  </p>
  <button onClick={handleConfirm}>Confirm</button>
  <button onClick={handleCancel}>Cancel</button>
</div>
```

### Accessible Tabs

```tsx
<div role="tablist" aria-label="Case study navigation">
  <button
    role="tab"
    aria-selected={activeTab === 'overview'}
    aria-controls="overview-panel"
    id="overview-tab"
    onClick={() => setActiveTab('overview')}
  >
    Overview
  </button>
  {/* More tabs */}
</div>

<div
  role="tabpanel"
  id="overview-panel"
  aria-labelledby="overview-tab"
  hidden={activeTab !== 'overview'}
>
  {/* Content */}
</div>
```

---

## Testing Tools & Methods

### Automated Testing Tools

#### Browser Extensions (Free)
1. **WAVE (Web Accessibility Evaluation Tool)**
   - Install: https://wave.webaim.org/extension/
   - Use: Click extension icon on any page
   - Shows: Errors, alerts, structural elements, ARIA

2. **axe DevTools**
   - Install: https://www.deque.com/axe/devtools/
   - Use: F12 → axe DevTools tab
   - Shows: Violations, best practices, detailed issue descriptions

3. **Lighthouse (Built into Chrome)**
   - Use: F12 → Lighthouse tab → Run audit
   - Shows: Accessibility score, specific issues, performance

4. **ARIA DevTools**
   - Install: Chrome Web Store
   - Use: Inspect element → ARIA tab
   - Shows: ARIA attributes, computed properties

#### Command Line Tools
1. **Pa11y**
   ```bash
   npm install -g pa11y
   pa11y https://prisiops.com
   ```

2. **axe-core**
   ```bash
   npm install -g @axe-core/cli
   axe https://prisiops.com
   ```

### Manual Testing Methods

#### Keyboard Navigation Test
1. Use **Tab** to navigate forward
2. Use **Shift+Tab** to navigate backward
3. Use **Enter** to activate links/buttons
4. Use **Space** to toggle checkboxes
5. Use **Arrow keys** for radio buttons, dropdowns

**What to Check**:
- All interactive elements are reachable
- Focus order is logical
- Focus indicator is visible
- No keyboard traps
- Can complete all tasks without mouse

#### Screen Reader Testing

**Mac (VoiceOver - Built-in)**:
- Enable: Cmd+F5 or System Preferences → Accessibility → VoiceOver
- Navigate: Control+Option+Arrow keys
- Read: Control+Option+A (read all)

**Windows (NVDA - Free)**:
- Download: https://www.nvaccess.org/download/
- Navigate: Arrow keys, Tab
- Read: NVDA+Down Arrow

**What to Check**:
- All content is announced
- Images have meaningful descriptions
- Form labels are associated
- Error messages are announced
- Focus changes are announced

#### Color Contrast Testing

**Tools**:
1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Chrome DevTools**:
   - Inspect element
   - Styles panel → Color picker
   - Shows contrast ratio

**Standards**:
- Normal text: 4.5:1 minimum (AA)
- Large text (18pt+): 3:1 minimum (AA)
- Current Prisi Ops: 21:1 ✅ (excellent!)

#### Mobile Accessibility Testing

**iOS VoiceOver**:
- Enable: Settings → Accessibility → VoiceOver
- Navigate: Swipe right/left
- Activate: Double tap

**Android TalkBack**:
- Enable: Settings → Accessibility → TalkBack
- Navigate: Swipe right/left
- Activate: Double tap

**What to Check**:
- Touch targets are 44x44px minimum
- Text is readable without zooming
- No horizontal scrolling
- Gestures work as expected

---

## Common Accessibility Issues & Fixes

### Issue 1: Missing Alt Text on Images

**Problem**:
```tsx
<img src="/logo.png" />
```

**Fix**:
```tsx
<img
  src="/logo.png"
  alt="Prisi Ops - AI Automation for Dallas-Fort Worth Businesses"
/>
```

**For Decorative Images**:
```tsx
<img
  src="/decorative.svg"
  alt=""
  aria-hidden="true"
/>
```

### Issue 2: Low Color Contrast

**Problem**:
- Light gray text on white background (#999 on #FFF = 2.8:1) ❌

**Fix**:
- Use darker gray (#666 on #FFF = 5.7:1) ✅
- Or increase font size/weight for large text

**Current Implementation**: ✅ 21:1 (excellent)

### Issue 3: Missing Form Labels

**Problem**:
```tsx
<input type="text" placeholder="Enter your name" />
```

**Fix**:
```tsx
<label htmlFor="name">Name</label>
<input
  id="name"
  type="text"
  placeholder="Enter your name"
  aria-required="true"
/>
```

### Issue 4: Keyboard Trap

**Problem**:
- Modal opens, but can't escape with keyboard

**Fix**:
```tsx
// Trap focus within modal
useEffect(() => {
  if (isOpen) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    modal.addEventListener('keydown', handleTab);
    firstElement.focus();

    return () => modal.removeEventListener('keydown', handleTab);
  }
}, [isOpen]);
```

### Issue 5: Unclear Link Purpose

**Problem**:
```tsx
<a href="/services">Click here</a>
<a href="/contact">Learn more</a>
```

**Fix**:
```tsx
<a href="/services">View our AI automation services</a>
<a href="/contact">Contact us for a free consultation</a>
```

### Issue 6: Missing Focus Indicators

**Problem**:
```css
button:focus {
  outline: none; /* ❌ Never do this */
}
```

**Fix** (already implemented):
```css
button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Issue 7: Form Errors Not Announced

**Problem**:
```tsx
{error && <p className="error">{error}</p>}
```

**Fix**:
```tsx
{error && (
  <p className="error" role="alert" aria-live="assertive">
    {error}
  </p>
)}
```

### Issue 8: Redundant ARIA

**Problem**:
```tsx
<button role="button" aria-label="Submit">Submit</button>
```

**Fix**:
```tsx
<button>Submit</button>
<!-- button already has role="button" and label from text content -->
```

---

## Ongoing Maintenance

### Weekly Checks
- [ ] Test keyboard navigation on new features
- [ ] Verify focus indicators are visible
- [ ] Check any new images have alt text

### Monthly Audits
- [ ] Run Lighthouse accessibility audit
- [ ] Run WAVE or axe DevTools scan
- [ ] Test with screen reader (spot check)
- [ ] Review color contrast for new content

### Quarterly Reviews
- [ ] Comprehensive screen reader testing
- [ ] Full keyboard navigation test
- [ ] Mobile accessibility test (iOS & Android)
- [ ] User testing with people with disabilities (if possible)

### When Adding New Features
- [ ] Consider accessibility from the start
- [ ] Use semantic HTML
- [ ] Test with keyboard only
- [ ] Run automated accessibility tests
- [ ] Add appropriate ARIA attributes
- [ ] Test with screen reader

### Accessibility Checklist for New Components

**Before Shipping**:
1. [ ] Keyboard accessible (all functionality)
2. [ ] Screen reader tested
3. [ ] Color contrast meets 4.5:1 (normal text) or 3:1 (large text)
4. [ ] Focus indicators visible
5. [ ] Semantic HTML used
6. [ ] ARIA attributes added (if needed)
7. [ ] Alt text for images
8. [ ] Forms have labels
9. [ ] Error messages announced
10. [ ] No keyboard traps

---

## Resources & Further Reading

### Official Guidelines
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **WAI-ARIA**: https://www.w3.org/WAI/ARIA/apg/

### Tutorials & Guides
- **WebAIM**: https://webaim.org/
- **A11y Project**: https://www.a11yproject.com/
- **MDN Accessibility**: https://developer.mozilla.org/en-US/docs/Web/Accessibility

### Testing Tools
- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: https://www.deque.com/axe/
- **Pa11y**: https://pa11y.org/
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

### Screen Readers
- **NVDA (Windows, Free)**: https://www.nvaccess.org/
- **JAWS (Windows)**: https://www.freedomscientific.com/products/software/jaws/
- **VoiceOver (Mac/iOS, Built-in)**: Cmd+F5
- **TalkBack (Android, Built-in)**: Settings → Accessibility

### Communities
- **WebAIM Discussion List**: https://webaim.org/discussion/
- **A11y Slack**: https://web-a11y.slack.com/
- **Reddit r/accessibility**: https://www.reddit.com/r/accessibility/

---

## Implementation Priority

### High Priority (Immediate)
- ✅ Skip navigation link
- ✅ Focus indicators
- ✅ Color contrast
- ✅ Semantic HTML
- ✅ Keyboard navigation
- [ ] Alt text for all images
- [ ] Form labels and error handling

### Medium Priority (Next Sprint)
- [ ] ARIA labels for complex components
- [ ] Screen reader testing
- [ ] Mobile accessibility testing
- [ ] Focus management in modals
- [ ] Live regions for dynamic content

### Low Priority (Future Enhancements)
- [ ] Advanced ARIA patterns
- [ ] Accessibility user testing
- [ ] Accessibility statement page
- [ ] Keyboard shortcuts help

---

**Last Updated**: December 27, 2025
**Version**: 1.0
**WCAG Level Target**: AA
**Owner**: Prisi Ops Development Team
