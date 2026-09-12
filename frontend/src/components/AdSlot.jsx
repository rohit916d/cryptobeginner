import { useEffect, useRef } from "react";

// Set this once your Google AdSense account is approved — looks like
// "ca-pub-1234567890123456". Until it's filled in, AdSlot renders nothing,
// so it's completely safe to leave placed in pages ahead of approval.
export const ADSENSE_CLIENT_ID = process.env.REACT_APP_ADSENSE_CLIENT_ID || "";

// Once you create ad units in AdSense ("Ads" > "By ad unit"), paste each
// unit's slot id here. Leave blank and that placement just won't render.
export const AD_SLOTS = {
  homeMidPage: "",
  articleInline: "",
  sidebarSquare: "",
};

let scriptLoaded = false;

function loadAdSenseScript() {
  if (scriptLoaded || !ADSENSE_CLIENT_ID) return;
  scriptLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

/**
 * Drop this in wherever a display ad should appear (between sections, in a
 * sidebar, inside long articles). Renders nothing at all until
 * REACT_APP_ADSENSE_CLIENT_ID is set and a real `slot` id is passed in —
 * safe to place ahead of AdSense approval.
 */
export default function AdSlot({ slot, format = "auto", className = "", label = true }) {
  const insRef = useRef(null);

  useEffect(() => {
    if (!ADSENSE_CLIENT_ID || !slot) return;
    loadAdSenseScript();
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      // AdSense script not ready yet or blocked (ad blocker) — fail silently.
    }
  }, [slot]);

  if (!ADSENSE_CLIENT_ID || !slot) return null;

  return (
    <div className={`w-full ${className}`}>
      {label && <div className="text-[10px] uppercase tracking-wider text-zinc-600 mb-1.5 text-center">Advertisement</div>}
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
