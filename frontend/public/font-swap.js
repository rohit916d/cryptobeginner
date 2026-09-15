// Swaps the preloaded font stylesheet <link> to rel="stylesheet" once it's
// fetched. Loaded synchronously (no defer/async) immediately after the
// <link rel="preload"> tag so it attaches the listener before the fetch
// can complete — an inline `onload=` attribute would do the same job, but
// that requires 'unsafe-inline' in the CSP, so this lives in its own tiny
// external file instead.
(function () {
  var link = document.getElementById("font-preload-link");
  if (!link) return;
  link.addEventListener("load", function () {
    link.rel = "stylesheet";
  });
})();
