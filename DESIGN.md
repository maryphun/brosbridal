---
name: Bridal Studio
description: An intimate bridal editorial album in warm paper, olive charcoal and romantic photography.
colors:
  paper: "#f5f2ec"
  ink: "#343b32"
  muted: "#68685e"
  line: "#d8d4cb"
  champagne: "#e9e2d7"
  forest: "#343f35"
  forest-hover: "#4a5849"
  paper-hover: "#e6ded0"
  olive-emphasis: "#6b735f"
  focus: "#806b4b"
  approach-field: "#eeece4"
  field-border: "#c8c7bc"
  link-rule: "#a6a493"
  lightbox: "#161b17"
  white: "#fff"
typography:
  display:
    fontFamily: "'Bodoni Moda','Noto Serif SC','Songti SC',Georgia,serif"
    fontSize: "clamp(43px,4.25vw,66px)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-.025em"
  headline:
    fontFamily: "'Bodoni Moda','Noto Serif SC','Songti SC',Georgia,serif"
    fontSize: "clamp(32px,3.2vw,44px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.025em"
  title:
    fontFamily: "'Bodoni Moda','Noto Serif SC','Songti SC',Georgia,serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.015em"
  body:
    fontFamily: "'Manrope','Noto Sans SC','Microsoft YaHei',sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  button:
    fontFamily: "'Manrope','Noto Sans SC','Microsoft YaHei',sans-serif"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: ".025em"
  label:
    fontFamily: "'Manrope','Noto Sans SC','Microsoft YaHei',sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: ".08em"
rounded:
  square: "0"
spacing:
  compact: "12px"
  inset: "16px"
  medium: "20px"
  roomy: "25px"
  grid: "30px"
  section-mobile: "48px"
  section-tablet: "64px"
  section-desktop: "80px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.forest-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "15px 24px"
  button-light-hover:
    backgroundColor: "{colors.paper-hover}"
  text-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "8px 0"
  input:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
  navigation:
    textColor: "{colors.ink}"
    padding: "12px 0"
  portfolio-filter:
    textColor: "{colors.muted}"
    padding: "22px 0"
  portfolio-filter-selected:
    textColor: "{colors.ink}"
  package:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  faq-summary:
    textColor: "{colors.ink}"
    padding: "24px 0"
---

# Design System: Bridal Studio

## Overview

**Creative North Star: "An Intimate Bridal Editorial Album"**

The supplied photography, warm ivory surfaces, forest charcoal actions and serif/sans pairing remain the visual identity. The user requested a simpler site and the exact English slogan "Your dream wedding should not break your bank". Give each section one clear purpose and keep service information direct.

**Key Characteristics:**
- Supplied romantic photography and warm neutral surfaces.
- Bodoni Moda headings with Manrope body and interface text.
- Clear navigation, short copy and generous space.
- Optional detail disclosed when needed.

## Colors

Forest charcoal identifies primary actions. Ivory is the main canvas; the quiet neutral field groups the homepage package comparison. Supporting text uses warm taupe. Preserve the existing photograph colors and source marks. The frontmatter holds the palette; the sidecar retains its tonal metadata.

## Typography

Bodoni Moda regular and italic supply the display voice; Manrope regular and medium carry reading and controls. Both are self-hosted. Noto Serif SC/Songti SC and Noto Sans SC/Microsoft YaHei remain CJK fallbacks.

Use the frontmatter display and headline roles. Main body text is 14px on desktop and 13px in many mobile sections. Controls use 12–14px text; native form text is 16px on phones. Small location/rights metadata is 10–11px. Keep the final phrase of the hero slogan together with an inline no-wrap span. Chinese and Malay retain their own heading metrics.

## Layout

The shared section max-width is 1500px, with desktop padding 80px 6.5vw, tablet padding 64px 6vw and mobile padding 48px 6vw. The header is 88px on desktop, 78px below 900px and 72px on phones.

The desktop hero keeps the existing 52/48 split between copy and garden portrait. It has one primary action. Mobile stacks the text above a 440px photograph. Homepage content has four core sections: hero, service entry points, compact packages and three FAQs. Related detail remains on the service, gown, photo, package and about pages.

Home service photographs use one aligned unequal three-column row, then image-and-title rows on mobile. Compact package previews are separated rows; the full package page has three columns that stack on phones. Services use heading/description rows. The portfolio retains masonry, filtering and its viewer; gowns retain filters, detail pages and thumbnails.

Breakpoints are 1600px, 1100px, 900px, 640px and 370px. Do not restore the removed staggered image chapters, process section or repeated approach prose.

## Elevation & Depth

Use flat surfaces, spacing and fine rules. The floating enquiry button retains the soft shadow (0 5px 20px #182c2422). The photo viewer has an opaque charcoal backdrop. Ordinary service and package content has no raised card shell.

## Shapes

Keep rectangular photographs, square buttons and square form fields. Preserve fine separators and the consistent thin-stroke arrow. The header uses the wordmark without the large decorative monogram.

## Components

### Actions and navigation

Primary actions use the forest fill, white text, 15px 24px padding and a 52px minimum height. Hover uses the existing forest-hover tone. Editorial links have a fine underline. Keyboard focus remains a visible 2px warm outline with 5px offset.

Desktop navigation shows Services, Gowns, Photos and Packages. About and all other routes remain accessible in the footer and mobile menu. Keep the native language selector.

### Packages

Compact previews show name, one short description and a quote link. The full page shows inclusions, with optional extras behind a native disclosure. Prices remain conditional on real configured data.

### Enquiry

Name and service are visible first. A native "Add wedding details (optional)" disclosure contains both dates, budget and message. Every field retains its label, validation and generated-message behavior. The prepared message and unsent state remain explicit.

### Photos, gowns and FAQ

Preserve responsive image sources, intrinsic dimensions and localized alternatives. The gallery viewer keeps keyboard controls, optional fullscreen requests and swipe support. Gown filters and multiple-image detail views remain. FAQs use native details/summary, fine separators and short answers.

### Motion

The hero photo settles from scale 1.025 over 1.2 seconds using the existing exponential ease. Image hover reaches scale 1.02. Reduced-motion preference removes motion and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** preserve the supplied photos, their provenance and source marks.
- **Do** keep the exact approved English slogan and natural local translations.
- **Do** use short copy and progressive disclosure for optional information.
- **Do** retain accessible controls and visible keyboard focus.

### Don't:
- **Don't** repeat service, team and pricing explanations across multiple homepage chapters.
- **Don't** add decorative monograms, photographic captions or card shells to fill space.
- **Don't** remove gallery, gown or enquiry functionality to make the layout look simpler.
