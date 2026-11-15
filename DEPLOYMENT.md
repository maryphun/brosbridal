# GitHub Actions deployment

Repository: https://github.com/maryphun/brosbridal

Cloudflare target: the existing **Worker `brosbridal`**, in account `4f94885417b644b2040a2664c114f0d9`, from the dashboard URL supplied by the owner. This is a Workers Static Assets deployment; no custom domain is required. The site's compiled `dist/` directory remains compatible with Pages if hosting changes later.

## One-time credential setup

1. Sign in to Cloudflare and open **Manage Account → Account API Tokens → Create Token**.
2. Use the **Edit Cloudflare Workers** permission template and restrict it to the account above. No custom-domain or DNS setup is needed for a workers.dev address.
3. Open https://github.com/maryphun/brosbridal/settings/secrets/actions .
4. Choose **New repository secret**. Name it `CLOUDFLARE_API_TOKEN` and paste the token as its value. Save it directly in GitHub; do not commit it or paste it into chat.
5. Open https://github.com/maryphun/brosbridal/actions , select **Check and deploy website**, and choose **Run workflow → main**. If the initial run stopped because the secret was missing, use **Re-run all jobs** instead.

Cloudflare's dashboard can show the Worker's actual public workers.dev address under its overview/domains settings. The GitHub deployment step also reports its returned deployment URL in the workflow summary.

## What the workflow does

`.github/workflows/deploy-cloudflare.yml` runs on pushes and pull requests targeting `main`, and can be started manually.

- Installs the locked dependencies with Node.js 24 and `npm ci`.
- Runs Astro/TypeScript checks and builds all static pages.
- Runs a Wrangler dry run against `wrangler.jsonc`.
- Deploys only pushes/manual runs on `main`. Pull requests are checked without deploying.
- Uses the official Cloudflare Wrangler action, with action commits and Wrangler version pinned.
- Preserves existing dashboard variables using `--keep-vars`; secrets are passed only to the deployment step.

The account ID and Worker name are configuration, not secret values. Their current values are taken from the owner's supplied dashboard URL. If changing accounts, update both `wrangler.jsonc` and the workflow action's account ID.

## Optional GitHub repository variables

In **Settings → Secrets and variables → Actions → Variables**, you may set:

| Variable | Value |
| --- | --- |
| `SITE_URL` | The actual public workers.dev origin, after the first deployment |
| `PUBLIC_IMAGE_BASE_URL` | Leave unset while photographs are served with the site |

These are used at build time. After adding `SITE_URL`, re-run the workflow to generate absolute canonical/social URLs and a populated sitemap. The site remains marked `noindex` while `business.published` is false. This is indexing guidance, not password protection.

The WhatsApp number, confirmed branding and gown inventory are still configured in the source, as described in `README.md`.

## Future updates

Edit the website source and push to `main`. GitHub Actions rebuilds and deploys the same Worker automatically. There is no need to upload a ZIP manually. Review pull requests before merging; merging to `main` starts the live deployment.

## Local checks

```sh
npm ci
npm run check
npm run build
npm run deploy:check
```

`deploy:check` validates locally and does not publish. `npm run deploy` performs a real deployment and requires Cloudflare authentication.

References: [Cloudflare Workers GitHub Actions](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/), [Workers static-site routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/), [Wrangler action](https://github.com/cloudflare/wrangler-action).
