/**
 * HTML Studio standalone — access keys / passwords.
 * ---------------------------------------------------------------------------
 * This single file holds EVERY key that locks the standalone studio.
 * Edit only this file to change, add or remove keys.
 *
 * ────────────────────────────  SIMPLE  ────────────────────────────
 *  Each key is one line inside window.HS_KEYS below:
 *      { key: 'your-password', tier: 'admin', label: 'What this key unlocks' }
 *  To add a key: copy a line, paste it, change the `key` value.
 *  To remove a key: delete its line.
 *  To change a password: edit the text inside the quotes after `key:`.
 *
 *  Tiers (pick one per key):
 *    admin — full access (every terminal command, plugins, export, settings)
 *    dev   — developer access (edit, run, format, import, export)
 *    guest — read-only access (look around, run the preview, no edits)
 *
 * ────────────────────────────  ADVANCED  ──────────────────────────
 *  • Keys are case-sensitive and trimmed of surrounding spaces.
 *  • Use long, random strings for real passwords, e.g. 'k7Qm2#vLp9!Xz'.
 *  • Two keys can share a tier — give each teammate their own key, same tier.
 *  • Higher tiers do NOT inherit lower ones; each key stands alone.
 *  • The gate locks the WHOLE studio until any valid key is entered. Once
 *    unlocked, the key's tier decides which terminal commands run.
 *  • Unlocking persists for the browser session (reload stays unlocked). Use
 *    the Terminal's "Lock" button, or close every tab of the page, to re-lock.
 *  • For a public deployment, change every default key below before publishing.
 *  • The React app keeps the same list in src/lib/studio/keys.js — keep them
 *    in sync if you publish both versions.
 * ---------------------------------------------------------------------------
 1. Nathan
 2. Dean
 3. Paxton
 4. Jaaken
 5. Konnor
 6. James
 7. 
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
  { key: 'htmlstudio',   tier: 'dev',   label: 'Developer access' },
  { key: 'open-sesame',  tier: 'guest', label: 'Read-only access' }
];

window.HS_KEYS_HELP = {
  simple: 'Edit js/keys.js — one line per key: { key: "your-password", tier: "admin", label: "Full access" }. To add a key, copy a line and change the key value. To change a password, edit the text in quotes.',
  tiers: 'Tiers: admin (everything), dev (edit + run + export), guest (read-only). Each key stands alone — higher tiers do not inherit lower ones.',
  file: 'Standalone: js/keys.js. just so i can remember where i put it i forget sometimes'
};

// Returns the matching key record, or null when the key is unknown.
window.validateKey = function (input) {
  if (!input) return null;
  var trimmed = String(input).trim();
  for (var i = 0; i < window.HS_KEYS.length; i += 1) {
    if (window.HS_KEYS[i].key === trimmed) return window.HS_KEYS[i];
  }
  return null;
};
