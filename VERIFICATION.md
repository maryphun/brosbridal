# Verification

Completed on 15 November 2026 (Japan time).

## Automated checks

- `npm run check`: zero errors, warnings or hints across 18 checked files.
- `npm run build`: 32 static HTML pages generated successfully.
- Dependency audit after updating to Astro 7.4.12: zero known vulnerabilities.
- Static HTML inspection: 32 pages each have one h1; 1,209 local link/asset references resolve; no missing content-image alt attributes.
- Image provenance scan: all 30 responsive WebP derivatives have source sidecars. Original source names/Drive URLs are recorded in the credits manifest. Image dimensions are measured, not inferred.

## Browser checks

| Surface/state | Result |
| --- | --- |
| Home at 1440 × 1000 and 390 × 844 | Rendered, no horizontal overflow |
| English → Chinese → Bahasa Malaysia | Correct localized routes, labels and headings |
| Mobile menu and Escape | Opens, closes, keyboard focus returns |
| Studio gallery filter | 6 photos; all filter restores 12 |
| ROM filter | 0 photos with honest empty state; clear restores collection |
| Lightbox | Opens, next/previous and arrow keys work; Escape closes |
| Gown style + silhouette | Matches data; empty combination and reset work |
| Gown detail thumbnails | Main image changes; enquiry keeps dress ID |
| Consultation preparation | Name/service preserved; localized labels; gown name is human-readable |
| Clipboard copy | “Message copied” status confirmed |
| Service, package and story desktop views | Rendered; no observed overflow |

Native fullscreen was requested in the in-app browser but did not enter a browser fullscreen state. The image dialog itself fills the viewport, with an optional Fullscreen API request for supporting browsers. Touch swipe support is implemented; it has not been tested on physical iOS/Android hardware.

The full-page capture mechanism omitted photos, so those captures are invalid and not used as review evidence. Valid evidence is the native viewport capture set under `.impeccable/review/`: desktop-top, desktop-middle, mobile-top, gowns-mobile, contact-message-mobile, chinese-mobile, malay-mobile, services-desktop, packages-desktop, about-desktop. These files are development evidence, not shipping webpage assets.

## Business inputs remaining

- Final brand name/logo, WhatsApp Business number, optional email and exact consultation address.
- Final prices if displayed, package inclusions/terms, and actual rental inventory/sizes.
- Photo portfolio labels and publication rights. Existing watermarks have been preserved.
- Approved production domain and explicit deployment approval.

The build is unpublished and intentionally blocks indexing until configured. No enquiries are saved to a backend and no real WhatsApp message has been sent. No backend credentials are needed for the current static MVP.

## Independent review

The finish reviewer scored both material findings resolved: configured gown sizes now render from typed structured data, and newly added or renamed gown IDs retain their enquiry context. The reviewer reopened all ten refreshed native captures and returned `ship` for the scored fixes and viewport evidence. That verdict does not verify real WhatsApp delivery or native fullscreen.

## Simplification update — 15 November 2026

The exact English slogan was verified in the built h1. Type checking reported zero errors/warnings/hints across 19 files; all 32 pages built. Static inspection resolved 1,067 local links/assets with no errors. Native desktop/mobile captures were checked, along with a 768px intermediate width: no observed horizontal overflow. The short enquiry starts with two visible fields, and expanded optional details remain in its generated message. Locale switching, mobile menu/Escape, gown-filter empty/reset states, gallery filtering and lightbox next navigation were exercised. The mechanical scan returned design-system advisories against the earlier typography record; the intentional simplification metrics are now documented in DESIGN.md. No new photos were generated or substituted. No external deployment was performed. The prior independent-review verdict applies to its original fix scope, not this later simplification pass.
