/**
 * HTML Studio standalone — access keys / passwords (with optional usernames).
 * ---------------------------------------------------------------------------
 * This single file holds EVERY key that locks the standalone studio.
 * Edit only this file to change, add or remove keys.
 *
 * ────────────────────────────  SIMPLE  ────────────────────────────
 *  Each key is one line inside window.HS_KEYS below:
 *      { key: 'your-password', tier: 'admin', label: 'What this key unlocks' }
 *  To add a username (optional): add a `username` field.
 *      { key: 'your-password', username: 'ada', tier: 'admin', label: 'Ada admin' }
 *  When a username is set, BOTH the username AND the key must match to unlock.
 *  When no username is set, only the key is needed.
 *
 *  Tiers (pick one per key):
 *    owner — exclusive controls (reveal keys, wipe storage) + everything below
 *    admin — full access (every terminal command, plugins, export, settings)
 *    dev   — developer access (edit, run, format, import, export)
 *    guest — read-only access (look around, run the preview, no edits)
 *
 * ────────────────────────────  ADVANCED  ──────────────────────────
 *  • Keys are case-sensitive and trimmed. Usernames are case-insensitive.
 *  • Use long, random strings for real passwords, e.g. 'k7Qm2#vLp9!Xz'.
 *  • Two keys can share a tier — give each teammate their own key, same tier.
 *  • Higher tiers do NOT inherit lower ones; each key stands alone.
 *  • Access is role-based: each terminal command checks the minimum tier it
 *    needs (read / edit / admin / owner).
 *  • The gate locks the WHOLE studio until any valid key is entered.
 *  • Unlocking persists for the browser session (reload stays unlocked).
 *  • For a public deployment, change every default key below before publishing.
 *  • The React app keeps the same list in src/lib/studio/keys.js — keep them
 *    in sync if you publish both versions.
 * ---------------------------------------------------------------------------
 */

window.HS_KEYS = [
  { key: 'ng_studio_dVA9Y3yQy6gRyhHualr1wTeGreKOjoQJ',        tier: 'admin', label: 'Full admin access' },
  { key: 'ng_studio_KoKVL6ZMyCfsGRvFvT0S3ngAirGdtc4t',        tier: 'admin', label: 'Full admin access' },
  { key: 'ng_studio_QBk8yaFeLomZfElX2XLc6oGjMBs54N61',        tier: 'admin', label: 'Full admin access' },
  { key: 'ng_studio_eAodIkSV2Qb4xMLJgP61MMEIxywGJLSu',        tier: 'admin', label: 'Full admin access' },
  { key: 'ng_studio_IZWzL1VJNO9lAQCZI27s6EfrsR4k4UrK',        tier: 'admin', label: 'Full admin access' },
  { key: 'ng_studio_2mszDW52aU8RLYrw2QIxuhpLESQTjGSO',        tier: 'admin', label: 'Full admin access' },
  { key: '9ZP0-528Q-LHEW-9LBL-LBYY-8J61-EU32-FVS8',        tier: 'admin', label: 'Full admin access' },
  { key: 'K0UV-5QLE-DE3V-4YZD-POP4-0UXJ-K8QY-QJQE',   tier: 'dev',   label: 'Developer access' },
  { key: 'UQXK-IQYN-GARM-5VYT-91YS-2POO-U1BS-8A0H',   tier: 'dev',   label: 'Developer access' },
  { key: 'JYCI-KYMH-3STK-ICLL-6YMS-UIUA-YFFU-2CQ2',   tier: 'dev',   label: 'Developer access' },
  { key: 'IBRP-AK22-8SPQ-BFHJ-50YM-396L-AHYA-8LGN',   tier: 'dev',   label: 'Developer access' },
  { key: 'admin',        tier: 'admin', label: 'Full admin access' },
  { key: 'htmlstudio',   tier: 'dev',   label: 'Developer access' },
  { key: 'open-sesame',  tier: 'guest', label: 'Read-only access' },
  { key: 'studio-owner', username: 'owner', tier: 'owner', label: 'Owner — exclusive controls' }
];

window.HS_KEYS_HELP = {
  simple: 'Edit js/keys.js — one line per key. Optionally add username: "ada" to require a username with that key.',
  tiers: 'Tiers: owner (exclusive + everything), admin (everything), dev (edit + run + export), guest (read-only). Each key stands alone.',
  file: 'Standalone: js/keys.js. React app: src/lib/studio/keys.js. Keep the two files in sync.'
};

// Validates a username + key pair. Returns the matching key record, or null.
window.validateKey = function (keyInput, usernameInput) {
  if (!keyInput) return null;
  var key = String(keyInput).trim();
  var username = usernameInput ? String(usernameInput).trim().toLowerCase() : '';
  for (var i = 0; i < window.HS_KEYS.length; i += 1) {
    var k = window.HS_KEYS[i];
    if (k.key !== key) continue;
    if (k.username) { if (k.username.toLowerCase() === username) return k; }
    else return k;
  }
  return null;
};

// Numeric rank for tier comparisons (higher = more access).
window.tierRank = function (tier) {
  return { guest: 1, dev: 2, admin: 3, owner: 4 }[tier] || 0;
};

// Permission thresholds — a tier grants a permission when its rank >= the minimum.
window.HS_PERMISSIONS = { read: 1, edit: 2, admin: 3, owner: 4 };

// Returns true if the current tier meets the minimum rank for a permission.
window.can = function (tier, perm) {
  return window.tierRank(tier) >= (window.HS_PERMISSIONS[perm] || 0);
};
