# Mohammad Moustaqim Portfolio v2

A polished React + Vite portfolio built for fast deployment and future expansion.

## What is included

- React + Vite setup
- Responsive dark/beige portfolio design
- Sticky navigation
- Hero section
- Experience section
- Detailed project cards
- Skills and principles section
- Contact section
- Resume PDF served from `/public`
- No icon libraries or styling dependencies

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal, usually:

```text
http://localhost:5173
```

## Build check

```bash
npm run build
```

This creates a production build in `dist/`.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Go to Vercel and import the GitHub repo.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Where to edit content

Most resume/project details are in:

```text
src/data/portfolio.js
```

Main styling is in:

```text
src/styles.css
```

## Resume link

The resume is located at:

```text
public/Mohammad_Moustaqim_Resume.pdf
```

The live URL will be:

```text
/ Mohammad_Moustaqim_Resume.pdf
```

without the space:

```text
/Mohammad_Moustaqim_Resume.pdf
```
