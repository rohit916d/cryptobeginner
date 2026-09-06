const KEY = "cb_demo_device_id";

/**
 * Returns a persistent, anonymous id for this browser, used to keep a
 * demo/paper-trading account without requiring login. Generated once and
 * stored in localStorage — clearing site data resets the demo account.
 */
export function getDeviceId() {
  if (typeof window === "undefined" || !window.localStorage) return "server";

  let id = window.localStorage.getItem(KEY);
  if (!id) {
    id =
      (window.crypto && window.crypto.randomUUID && window.crypto.randomUUID()) ||
      `dev-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(KEY, id);
  }
  return id;
}
