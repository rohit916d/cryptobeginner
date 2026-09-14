// Suppress a known noisy browser DevTools/DataCloneError caused by
// PerformanceServerTiming objects that can't be structured-cloned when
// certain browser extensions relay performance entries.
window.addEventListener(
  "error",
  function (e) {
    if (
      e.error instanceof DOMException &&
      e.error.name === "DataCloneError" &&
      e.message &&
      e.message.includes("PerformanceServerTiming")
    ) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  },
  true
);

// Google tag (gtag.js) — loaded after main content is rendered, so it
// doesn't block LCP/FCP.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-8QVXWH9SCZ");

function loadGA() {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-8QVXWH9SCZ";
  document.head.appendChild(s);
}
if ("requestIdleCallback" in window) {
  window.addEventListener("load", function () {
    requestIdleCallback(loadGA, { timeout: 4000 });
  });
} else {
  window.addEventListener("load", function () {
    setTimeout(loadGA, 2000);
  });
}
