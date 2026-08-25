# mymindiswonderful

A static, editorial-style knowledge website built around curiosity, nature, the human mind, traditional knowledge, observation and personal notes.

## Included

- Responsive multi-page design
- Light/dark mode
- Search and category filtering
- Random “Teach me something” discovery
- Article pages with reading progress and table of contents
- Knowledge Map
- Personal Notes
- Field Notes
- Evidence / historical knowledge / observation / interpretation labels
- Related-article exploration
- Accessible semantic HTML
- No likes, follower counts or social-media mechanics

## Pages

- `index.html` — homepage
- `explore.html` — searchable archive
- `article.html` — dynamic article template
- `notes.html` — personal notebook
- `field-notes.html` — outdoor journal
- `knowledge-map.html` — interconnected subjects
- `about.html` — philosophy and sourcing principles

## Run locally

Open `index.html` directly in a browser, or serve the folder with a local HTTP server.

## Important publishing note

The article examples are deliberately written as prototype content. Before publishing factual material, replace placeholder source entries with real primary sources, books, university pages, museum collections or archives. Keep evidence, historical knowledge, personal observation, interpretation and speculation clearly separated.

## Next technical step

For a production version, move `data.js` into a content system or JSON/Markdown collection and add a small build pipeline. A graph database is not required initially: article IDs + related IDs/tags are enough to generate the first knowledge graph.
