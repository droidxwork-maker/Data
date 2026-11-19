/* DROIDX NEWS DATA — content only; no application logic. */
(function (w) {
  'use strict';
  w.DROIDX_CONTENT = w.DROIDX_CONTENT || {};
  w.DROIDX_CONTENT.manifest = {
  "schema_version": 1,
  "content_version": "1.1.0",
  "last_updated": "2026-11-19T23:30:00Z",
  "files": [
    {
      "id": "news",
      "path": "news.js",
      "version": "1.1.0",
      "required": true
    },
    {
      "id": "categories",
      "path": "categories.js",
      "version": "1.0.0",
      "required": true
    },
    {
      "id": "settings",
      "path": "settings.js",
      "version": "1.0.0",
      "required": true
    },
    {
      "id": "maintenance",
      "path": "maintenance.js",
      "version": "1.0.0",
      "required": false
    }
  ]
};
})(window);
