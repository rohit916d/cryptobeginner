// Shared Markdown -> HTML renderer for article/lesson bodies.
// Supports: ## / ### headers, **bold**, [links](url), > blockquotes,
// - unordered lists, 1. ordered lists, and | pipe tables |.
// Output is sanitized with DOMPurify at the call site.
export function renderMarkdown(md) {
  if (!md) return "";
  let html = md.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Tables (must run before the generic escaping of paragraph blocks)
  html = html.replace(/((?:^\|.*\|\s*\n)+)/gm, (block) => {
    const lines = block.trim().split("\n");
    if (lines.length < 2) return block;
    const head = lines[0].split("|").slice(1, -1).map((s) => `<th>${s.trim()}</th>`).join("");
    const rows = lines.slice(2).map((r) => {
      const cells = r.split("|").slice(1, -1).map((c) => `<td>${c.trim()}</td>`).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    return `<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  html = html
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/(?:^- .+\n?)+/gm, (m) => {
    const items = m.trim().split("\n").map((l) => `<li>${l.replace(/^- /, "")}</li>`).join("");
    return `<ul>${items}</ul>`;
  });
  html = html.replace(/(?:^\d+\. .+\n?)+/gm, (m) => {
    const items = m.trim().split("\n").map((l) => `<li>${l.replace(/^\d+\. /, "")}</li>`).join("");
    return `<ol>${items}</ol>`;
  });

  // Paragraphs
  html = html.split(/\n{2,}/).map((blk) => {
    if (/^<(h\d|ul|ol|blockquote|table)/.test(blk.trim())) return blk;
    return `<p>${blk.replace(/\n/g, " ")}</p>`;
  }).join("\n");

  return html;
}

// "2026-09-20T10:00:00+00:00" -> "Sep 20, 2026"
export function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
}
