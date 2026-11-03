const { getAsObject } = require('@mindful-web/object-path');

const DAY = 86400000;

// Appends ?since=<newsletter date + 1 day> to a site URL so scheduled stories load when clicked.
// Temporary in-repo copy of @mindful-web/marko-newsletters/utils/content-url (1.105.2) until this
// repo's framework is bumped. Only for site URLs — never a promotion's external linkUrl.
// A twin copy lives in packages/common/utils/content-url.js (shared does not depend on common).
module.exports = (out, url) => {
  if (!url) return url;
  const { date } = getAsObject(out, 'global.req.query');
  // Only a numeric timestamp is supported; other `date` forms are left undecorated.
  if (!Number.isFinite(Number(date))) return url;
  let parsed;
  try { parsed = new URL(url); } catch (e) { return url; }
  parsed.searchParams.set('since', String(Number(date) + DAY));
  return String(parsed);
};
