# DROIDX NEWS — Content Repository

This repository stores public content for the DROIDX NEWS frontend.

## Structure

```text
Data/
├── manifest.js
├── data/
│   ├── news.js
│   ├── categories.js
│   ├── settings.js
│   └── maintenance.js
└── README.md
```

## Important

- These files contain public website content. Do not put passwords, API keys, private data, or secrets here.
- The files are classic browser JavaScript files. Each one adds its data to `window.DROIDX_CONTENT`.
- The frontend integration is a separate step. Until the frontend loader is updated, the website will continue using its current embedded demo data.
- Keep the field names in `news.js` compatible with the existing DROIDX NEWS article structure.
- When publishing a content change, increment the affected file's `version` in `manifest.js`. Also update `last_updated`.
- Do not rename IDs of existing articles unless you intend to change their permanent URLs/references.

## Add or edit a news article

Add an object to `data/news.js` under `articles`. Supported fields:

- `id` (required, unique)
- `title` (required)
- `summary`
- `content`
- `image`
- `category`
- `author`
- `published_at`
- `updated_at`
- `source_name`
- `source_url`
- `featured`
- `trending_score`
- `read_minutes`
- `url`

Example:

```js
{
  id: "news-2026-001",
  title: "A clear headline",
  summary: "A short description.",
  content: "The full article text.",
  image: "https://example.com/image.jpg",
  category: "technology",
  author: "DROIDX News Desk",
  published_at: "2026-11-19T12:00:00Z",
  featured: false,
  trending_score: 10,
  read_minutes: 3
}
```

## Current state

The initial news dataset was migrated from the existing DROIDX NEWS frontend demo data. No frontend code has been changed in this step.
