# Bridal Studio — working website

A complete Astro + TypeScript + Tailwind CSS site using photography supplied in your Google Drive folder. This is a local MVP; deployment is managed by the owner. “Bridal Studio” is a neutral working title.

## Run locally

Use Node.js 22.23.4 or later; a current Node.js 24 release is recommended.

```sh
npm ci
npm run dev
```

Open http://localhost:4321/en/. If your environment restricts telemetry/config writes, set `ASTRO_TELEMETRY_DISABLED=1` before running commands.

```sh
npm run check
npm run build
npm run preview
```

The build produces a fully static `dist/` directory. It contains 32 HTML pages: seven page types in three languages, nine gown detail pages, an English root and a 404 page. There is no application server or database.

## Edit the business

Update `src/data/business.ts`:

- `name`: replace the working title and, if desired, the monogram in `src/layouts/Layout.astro` and `public/favicon.svg`.
- `whatsapp`: your WhatsApp Business number, international digits only (no plus, spaces or punctuation). Until configured, the form prepares a copyable enquiry and clearly says it has not been sent.
- `email`, `address`: optional, only displayed when populated.
- `showPrices`: turn on only after adding real prices to the package records.
- `published`: false until the website and business details are approved. This controls noindex and robots rules; it is not authentication or access protection.

Set `SITE_URL` to your approved production origin before building. This enables canonical URLs, language alternates, absolute social image links and sitemap URLs. The default build intentionally has an empty sitemap and blocks indexing. No fabricated LocalBusiness structured data is emitted.

## Edit services, packages and gowns

`src/data/content.ts` holds the structured content:

- `services`: seven service descriptions, enquiry IDs and image IDs.
- `packages`: translated names, descriptions, proposed inclusions, optional extras, and optional MYR prices.
- `gowns`: three inspiration looks with styles, silhouettes, descriptions and multiple photographs. They do **not** assert rental stock or size availability. Replace them with real inventory before describing them as rental listings. Set `sizes` to a string array such as `["S", "M", "L"]` only after confirming stock; the detail page renders these values, or shows the honest translated fallback for null/empty sizes. New or renamed gown IDs automatically retain their enquiry context.
- `gallery`: translated alt text and category assignments. Only the categories supported by the supplied selection have photos. Wedding-day and ROM show honest empty states until you add verified images.

Package lists are starting proposals, clearly described as subject to a written quote. No exact duration, image counts, rental terms or pricing have been invented.

## Photography

The supplied Google Drive selection is stored locally as responsive WebP photographs at up to 2000px and 700px wide, without enlarging smaller originals. Source file names and original Drive URLs are in `public/images/credits.json`. Original compositions and existing watermarks are preserved. No stock or AI photographs are used. Confirm authorship, portfolio labels, model permissions and publication rights before public launch.

To replace an image, use the same ID, save a full image as `public/images/ID.webp` and a smaller variant as `public/images/ID-small.webp`, then update alt text in `gallery`. Update `src/data/images.json` with the actual width/height of the full image and `smallWidth` of its smaller variant; these values generate accurate dimensions and `srcset` descriptors. Add every new source to the credits manifest. The original downloads remain outside this deliverable under the task's scratch directory.

`src/lib/media.ts` centralises image URLs. Set `PUBLIC_IMAGE_BASE_URL` to a public R2 custom domain plus any prefix to serve these same files from object storage later. Do not put R2 API keys in public environment variables. Nothing in this MVP creates an R2 bucket or connects to D1.

## Languages

All routes are available under `/en/`, `/zh/` and `/ms/`. Shared UI, metadata, form labels and marketing copy are in `src/i18n/index.ts`; content records have the same three language keys. The navigation switcher preserves the current page and enquiry/gallery query parameters. The brand name is shared deliberately.

## Enquiries

The form requires a name and service, accepts optional dates, budget and a message, and validates dates against today. It constructs a message locally and lets the visitor review it. With a configured number, “Open WhatsApp” opens a correctly encoded `wa.me` link; the visitor still sends the message themselves in WhatsApp. The form stores nothing, makes no booking, and does not send the form to a backend. Clipboard copying works in secure contexts (including localhost); if unavailable, the message can be selected and copied manually.

For a future booking backend, add a server endpoint and D1 only when persistence is needed; introduce a real consent/privacy policy, validation and delivery feedback at that time. Do not relabel this form as a confirmed booking.

## Automatic Cloudflare deployment with GitHub Actions

The owner selected the existing Cloudflare Worker `brosbridal`. The project now includes a GitHub Actions workflow and `wrangler.jsonc` for Workers Static Assets. See [DEPLOYMENT.md](DEPLOYMENT.md) for the one-time GitHub secret setup. After setup, pushes to `main` build and deploy automatically. The existing Pages upload option is retained below.

## Cloudflare Pages direct upload (alternative)

The earlier ZIP workflow uses the Pages dashboard. The GitHub Actions workflow uses the Worker selected later by the owner.

1. Confirm the brand, WhatsApp number, prices if shown, real gown inventory, photograph rights, portfolio labels and production domain.
2. Set `SITE_URL`, switch `published` to true, and rebuild. Review translated content with the team.
3. In Cloudflare Pages, import the approved repository, use build command `npm run build` and output directory `dist` (project root: this folder). Configure a Node version supported by the installed Astro release, such as Node 24.
4. Deploy only when authorised. This static build needs no SSR adapter or Pages Functions. `_headers` configures basic security and asset caching.
5. Check the real domain, sitemap, social previews and WhatsApp number on a phone.

The build command and output follow the [Cloudflare Astro deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/). Cloudflare now recommends Workers Static Assets for new hosting projects; this project retains the Pages-compatible static output explicitly requested in the brief.

## Structure

- `src/components`: page sections, responsive images, package presentation and arrow icon.
- `src/layouts`: shared navigation, SEO, footer and consultation banner.
- `src/pages`: static routes, sitemap, robots and 404.
- `src/scripts/site.ts`: navigation, filters, gown thumbnails, lightbox, enquiry preparation.
- `src/styles/global.css`: Tailwind v4 import, theme and responsive editorial styling.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: development context and visual specifications, never served as site content.

## Verification

Type checks and production build passed. The dependency audit after updating Astro reported zero known vulnerabilities. Browser checks cover desktop/mobile layout, language switching, navigation, gallery categories, lightbox, gown filters, thumbnail selection, enquiry context and message preview. See `VERIFICATION.md` for the final evidence and remaining business inputs.

## Simplified version

The approved English slogan is “Your dream wedding should not break your bank”. Home now has four core sections. Navigation and copy are shorter; repeated homepage chapters were removed. The full service list, gowns, photographs, packages and about page remain available. Enquiries begin with name and service; dates, budget and a message are inside an optional details disclosure.

For Cloudflare Pages drag-and-drop, use the latest `bridal-studio-simplified-cloudflare.zip` supplied alongside this project. It contains only the current compiled site, with `index.html` at its root. Existing Pages projects can use Create a new deployment to upload it.
