// ============================================================
//  EDIT ONLY THIS FILE. index.html and admin.html both read it.
//  Keep config.js in the same folder as index.html and admin.html.
// ============================================================
window.TV_CONFIG = {
  // Supabase > Project Settings > API
  SUPABASE_URL: 'PASTE_YOUR_PROJECT_URL',        // looks like https://abcdxyz.supabase.co
  SUPABASE_KEY: 'PASTE_YOUR_PUBLISHABLE_KEY',    // the "anon" / "publishable" key. NEVER paste the secret / service_role key.

  // Used only until the delivery fee is saved in the admin page (Promos tab).
  DELIVERY_FEE: 50,

  // Optional. If you add a Google Maps Geocoding API key, delivery addresses are
  // checked against Google Maps. If left empty, OpenStreetMap is used instead.
  GOOGLE_MAPS_KEY: ''
};
