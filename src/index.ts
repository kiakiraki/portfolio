// ─── Type Definitions ────────────────────────────────────────────────────────

interface LinkCard {
  iconLabel: string;
  title: string;
  description: string;
  url: string;
  tag?: string;
  techTag?: string;
}

interface Section {
  title: string;
  cards: LinkCard[];
}

interface SiteMeta {
  name: string;
  handle: string;
  role: string;
  bio: string;
  ogTitle: string;
  ogUrl: string;
}

// ─── Data Constants ──────────────────────────────────────────────────────────

const SHOW_STATUS_BADGE = true;

const SITE_META: SiteMeta = {
  name: "Akira TSURUDA",
  handle: "@kiakiraki",
  role: "Machine Learning Engineer/Backend Engineer",
  bio: "ML Engineer specializing in computer vision and AI system implementation. Passionate about bridging the gap between ML research and production systems.",
  ogTitle: "Akira TSURUDA - ML Engineer",
  ogUrl: "https://kiakiraki.dev",
};

const SECTIONS: Section[] = [
  {
    title: "Social",
    cards: [
      { iconLabel: "GH", title: "GitHub", description: "OSS contributions & projects", url: "https://github.com/kiakiraki" },
      { iconLabel: "X", title: "X", description: "@__kiakiraki__", url: "https://x.com/__kiakiraki__" },
      { iconLabel: "m2", title: "mixi2", description: "@kiakiraki", url: "https://mixi.social/@kiakiraki" },
      { iconLabel: "Zn", title: "Zenn", description: "Technical articles (JP)", url: "https://zenn.dev/kiakiraki" },
      { iconLabel: "in", title: "LinkedIn", description: "Professional profile", url: "https://www.linkedin.com/in/akira-tsuruda-aa1316156/" },
    ],
  },
  {
    title: "Documents",
    cards: [
      { iconLabel: "CV", title: "Curriculum Vitae", description: "職務経歴書", url: "https://curriculum-vitae.kiakiraki.dev/", tag: "CV" },
      { iconLabel: "La", title: "LAPRAS", description: "Technical portfolio & score", url: "https://lapras.com/public/I8IXHAC" },
      { iconLabel: "Fy", title: "Findy", description: "Skills & OSS activity", url: "https://findy-code.io/skills-share/qK0nff4SONW7T" },
    ],
  },
  {
    title: "Projects",
    cards: [
      { iconLabel: "B", title: "blog", description: "Personal blog", url: "https://blog.kiakiraki.dev", techTag: "Cloudflare Workers" },
      { iconLabel: "C", title: "cnsr", description: "Image mosaic & redaction tool", url: "https://cnsr.kiakiraki.dev", techTag: "Cloudflare Pages" },
      { iconLabel: "M", title: "metamark", description: "EXIF metadata overlay for photos", url: "https://metamark.kiakiraki.dev", techTag: "Cloudflare Workers" },
      { iconLabel: "CJ", title: "cyber-japanese-news", description: "Cyberpunk Japan news mapper", url: "https://github.com/kiakiraki/cyber-japanese-news", techTag: "Local / React" },
    ],
  },
  {
    title: "OSS Contributions",
    cards: [
      { iconLabel: "Se", title: "serena", description: "Contributed Ruby language support", url: "https://github.com/oraios/serena", tag: "Contributor" },
    ],
  },
];

// ─── Icon Colors ─────────────────────────────────────────────────────────────

const ICON_COLORS: Record<string, { bg: string; fg: string }> = {
  GH: { bg: "rgba(139,92,246,0.12)", fg: "#a78bfa" },
  Zn: { bg: "rgba(56,189,248,0.12)", fg: "#38bdf8" },
  X: { bg: "rgba(148,163,184,0.12)", fg: "#94a3b8" },
  in: { bg: "rgba(56,189,248,0.12)", fg: "#38bdf8" },
  CV: { bg: "rgba(251,191,36,0.12)", fg: "#fbbf24" },
  B: { bg: "rgba(52,211,153,0.12)", fg: "#34d399" },
  C: { bg: "rgba(251,146,60,0.12)", fg: "#fb923c" },
  M: { bg: "rgba(167,139,250,0.12)", fg: "#a78bfa" },
  CJ: { bg: "rgba(6,182,212,0.12)", fg: "#06b6d4" },
  La: { bg: "rgba(56,189,248,0.12)", fg: "#38bdf8" },
  Fy: { bg: "rgba(52,211,153,0.12)", fg: "#34d399" },
  m2: { bg: "rgba(251,191,36,0.12)", fg: "#fbbf24" },
  Se: { bg: "rgba(248,113,113,0.12)", fg: "#f87171" },
};

// ─── CSS ─────────────────────────────────────────────────────────────────────

function getStyles(): string {
  return `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}

@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes terminalBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

body {
  background: #0c0f14;
  color: #e2e8f0;
  font-family: 'Source Sans 3', 'Noto Sans JP', sans-serif;
  line-height: 1.6;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Dot grid background */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23ffffff' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat;
  z-index: 0;
  pointer-events: none;
}

/* Gradient orbs */
body::after {
  content: '';
  position: fixed;
  top: -200px;
  left: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}

.orb-purple {
  position: fixed;
  bottom: -200px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
}

.container {
  max-width: 560px;
  margin: 0 auto;
  padding: 60px 24px 40px;
  position: relative;
  z-index: 1;
}

/* ── Header ── */
.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 48px;
  animation: fadeSlideIn 0.5s ease both;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(71,85,105,0.4);
  flex-shrink: 0;
}

.header-info {
  flex: 1;
  min-width: 0;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.15);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #22c55e;
  margin-bottom: 8px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: terminalBlink 2s ease-in-out infinite;
}

.header-name {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 2px;
}

.header-handle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 8px;
}

.header-role {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 12px;
}

.header-bio {
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
}

/* ── Section ── */
.section {
  margin-bottom: 32px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.section-label span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #475569;
  white-space: nowrap;
}

.section-label hr {
  flex: 1;
  border: none;
  border-top: 1px solid rgba(71,85,105,0.3);
}

/* ── Cards ── */
.card-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(15,23,42,0.6);
  border: 1px solid rgba(51,65,85,0.3);
  text-decoration: none;
  color: inherit;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  background: rgba(30,41,59,0.8);
  border-color: rgba(71,85,105,0.5);
  transform: translateY(-1px);
}

.card:hover .card-arrow {
  opacity: 1;
}

.card-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0;
}

.card-desc {
  font-family: 'Source Sans 3', 'Noto Sans JP', sans-serif;
  font-size: 12.5px;
  color: #64748b;
}

.card-right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.card-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(71,85,105,0.2);
  color: #64748b;
  white-space: nowrap;
}

.card-arrow {
  opacity: 0.3;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

/* ── Footer ── */
.footer {
  border-top: 1px solid rgba(71,85,105,0.3);
  padding-top: 20px;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #334155;
  animation: fadeSlideIn 0.5s ease both;
}

/* ── Staggered animation ── */
.section:nth-child(1) { animation: fadeSlideIn 0.5s ease both 0.1s; }
.section:nth-child(2) { animation: fadeSlideIn 0.5s ease both 0.2s; }
.section:nth-child(3) { animation: fadeSlideIn 0.5s ease both 0.3s; }
.section:nth-child(4) { animation: fadeSlideIn 0.5s ease both 0.4s; }

@media (max-width: 480px) {
  .container { padding: 40px 16px 32px; }
  .header-name { font-size: 24px; }
  .footer { flex-direction: column; gap: 4px; text-align: center; }
}
`;
}

// ─── HTML Renderers ──────────────────────────────────────────────────────────

const ARROW_SVG = `<svg class="card-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderCard(card: LinkCard): string {
  const colors = ICON_COLORS[card.iconLabel] ?? { bg: "rgba(148,163,184,0.12)", fg: "#94a3b8" };
  const tag = card.techTag ?? card.tag ?? "";
  const tagHtml = tag ? `<span class="card-tag">${escapeHtml(tag)}</span>` : "";

  return `
    <a class="card" href="${escapeHtml(card.url)}" target="_blank" rel="noopener noreferrer">
      <div class="card-icon" style="background:${colors.bg};color:${colors.fg}">${escapeHtml(card.iconLabel)}</div>
      <div class="card-body">
        <div class="card-title">${escapeHtml(card.title)}</div>
        <div class="card-desc">${escapeHtml(card.description)}</div>
      </div>
      <div class="card-right">
        ${tagHtml}
        ${ARROW_SVG}
      </div>
    </a>`;
}

function renderSection(section: Section): string {
  const cards = section.cards.map(renderCard).join("");
  return `
    <div class="section">
      <div class="section-label">
        <span>${escapeHtml(section.title)}</span>
        <hr>
      </div>
      <div class="card-list">
        ${cards}
      </div>
    </div>`;
}

function renderPage(): string {
  const sections = SECTIONS.map(renderSection).join("");

  const statusBadge = SHOW_STATUS_BADGE
    ? `<div class="status-badge"><span class="status-dot"></span>Open to opportunities</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(SITE_META.ogTitle)}</title>

  <!-- OGP -->
  <meta property="og:title" content="${escapeHtml(SITE_META.ogTitle)}">
  <meta property="og:description" content="${escapeHtml(SITE_META.bio)}">
  <meta property="og:url" content="${escapeHtml(SITE_META.ogUrl)}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary">
  <meta name="description" content="${escapeHtml(SITE_META.bio)}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Source+Sans+3:wght@400;600&family=Noto+Sans+JP:wght@400;500&display=swap">

  <style>${getStyles()}</style>
</head>
<body>
  <div class="orb-purple"></div>
  <div class="container">
    <header class="header">
      <img class="avatar" src="/avatar.jpg" alt="${escapeHtml(SITE_META.name)}" width="72" height="72">
      <div class="header-info">
        ${statusBadge}
        <h1 class="header-name">${escapeHtml(SITE_META.name)}</h1>
        <div class="header-handle">${escapeHtml(SITE_META.handle)}</div>
        <div class="header-role">${escapeHtml(SITE_META.role)}</div>
        <p class="header-bio">${escapeHtml(SITE_META.bio)}</p>
      </div>
    </header>

    <main>
      ${sections}
    </main>

    <footer class="footer">
      <span>&copy; 2026 kiakiraki</span>
      <span>Powered by Cloudflare Workers</span>
    </footer>
  </div>
</body>
</html>`;
}

// ─── Worker Handler ──────────────────────────────────────────────────────────

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // www → apex 301 redirect
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    const html = renderPage();
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  },
} satisfies ExportedHandler;
