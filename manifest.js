/* DROIDX NEWS DATA — content only; no application logic. */
(function (w) {
  'use strict';
  w.DROIDX_CONTENT = w.DROIDX_CONTENT || {};
  w.DROIDX_CONTENT.manifest = {
  "schema_version": 1,
  "content_version": "1.0.0",
  "last_updated": "2026-11-19T12:00:00Z",
  "files": [
    {
      "id": "news",
      "path": "data/news.js",
      "version": "1.0.0",
      "required": true
    },
    {
      "id": "categories",
      "path": "data/categories.js",
      "version": "1.0.0",
      "required": true
    },
    {
      "id": "settings",
      "path": "data/settings.js",
      "version": "1.0.0",
      "required": true
    },
    {
      "id": "maintenance",
      "path": "data/maintenance.js",
      "version": "1.0.0",
      "required": false
    }
  ]
};
})(window);
