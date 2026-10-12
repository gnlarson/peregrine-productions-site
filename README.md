# Peregrine Productions

Marketing site for [peregrineproductions.studio](https://peregrineproductions.studio). Built with React and Vite, hosted on GitHub Pages.

## Local development

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally
```

## Deployment

Every push to `main` builds the site and publishes it through the workflow in `.github/workflows/deploy.yml`.

One-time setup:

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Under **Custom domain**, enter `peregrineproductions.studio` and save. `public/CNAME` already holds the domain, so it ships with every build.
4. At your domain registrar, add these DNS records:

   | Type  | Host | Value                   |
   |-------|------|-------------------------|
   | A     | @    | 185.199.108.153         |
   | A     | @    | 185.199.109.153         |
   | A     | @    | 185.199.110.153         |
   | A     | @    | 185.199.111.153         |
   | AAAA  | @    | 2606:50c0:8000::153     |
   | AAAA  | @    | 2606:50c0:8001::153     |
   | AAAA  | @    | 2606:50c0:8002::153     |
   | AAAA  | @    | 2606:50c0:8003::153     |
   | CNAME | www  | `<your-github-username>.github.io` |

5. Once DNS resolves (minutes to a few hours), check **Enforce HTTPS** in the Pages settings.

GitHub also recommends [verifying the domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) on your account so no one else can claim it for their Pages site.

## Structure

- `src/App.jsx`: page content and sections
- `src/index.css`: styles and the brand palette (CSS variables at the top)
- `src/components/FalconMark.jsx`: the falcon logo, also used in `public/favicon.svg`
