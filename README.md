# kiakiraki.dev

Personal portfolio site built with Cloudflare Workers.

https://kiakiraki.dev

## Tech Stack

- **Runtime**: Cloudflare Workers
- **Language**: TypeScript
- **Build**: Wrangler (esbuild)
- **Fonts**: JetBrains Mono, Source Sans 3, Noto Sans JP (Google Fonts)

## Architecture

Single-file Worker (`src/index.ts`) that generates HTML at the edge. No frameworks, no build step beyond Wrangler's built-in esbuild bundling.

Static assets (avatar image) are served via Cloudflare Workers Assets from `public/`.

## Development

```bash
npm install
npm run dev        # http://localhost:8787
```

## Type Check

```bash
npm run type-check
```

## Deploy

```bash
npm run deploy
```

## License

MIT
