# The Curious World

## Project structure

- Keep the site runnable as plain HTML, CSS, and JavaScript on GitHub Pages and a local static server. Use relative paths for internal links so they work under the repository's Pages URL.
- Keep the homepage and each subject's curriculum as entry points. Give each finished module its own page and link it from its curriculum card. Build modules one at a time as requested.

## Subject and module design

- Give each subject a consistent theme for its curriculum and module chrome. History & Civilisations uses a warm paper palette, forest green, serif headings, and an archive feel.
- Give each module its own visual theme that serves the topic. For example, use a dark observatory palette and telescope imagery for cosmic origins. For civilisations, use the visual language of the period and a relevant map with labels, dates, and a legend.
- Use icons, timelines, maps, diagrams, and charts where they help explain the material. Label approximate dates, borders, and scales. Keep the interface responsive and operable by keyboard with visible focus, readable contrast, and reduced motion support.

## Lessons and media

- Teach for an interested beginner. Use storytelling, concrete examples, and connections between topics. Explain evidence and uncertainty, link reliable sources, and end with concise revision notes.
- Use plenty of relevant existing images loaded from direct HTTPS URLs. Do not generate or download images into the repository. Prefer museums, archives, science agencies, or Wikimedia Commons. Check the original asset page and reuse terms, include visible attribution and a source link, and provide useful alt text. Lazy load images below the fold.
- Embed relevant YouTube videos or other reputable videos in each finished module. Use click to load or lazy loading, descriptive iframe titles, an explicit `strict-origin-when-cross-origin` referrer policy, and visible direct watch links. YouTube embeds may fail with error 153 when opened as `file://` or when browser privacy tools strip the referrer; preview through a local web server such as VS Code Live Server. Explain what to look for in each video. Keep readings and quizzes usable if external media fails.
- Follow the requested study time for each module. If videos are optional, distinguish their time from the core lesson.
- Give each module a curated "Explore further" section with relevant articles and primary sources, books, films/documentaries, suitable OTT series or episodes, and trustworthy websites or interactive resources. Keep recommendations genuinely relevant, identify the format and why it helps, and link to official or reputable pages. Streaming availability varies by country and over time, so prefer official title pages and avoid promising a platform unless checked.
- Treat image counts as a visual-planning target, not a quota. Choose images, maps, diagrams, charts, and timeline illustrations that each teach something; avoid filler galleries. For a 15-minute lesson, aim for roughly 8–15 purposeful visual moments, and for a 30-minute-or-longer lesson roughly 15–25, adjusting for topic and layout. Use a compact optional gallery for additional worthwhile images. Use direct HTTPS sources, attribution, useful alt text, and lazy loading to keep pages fast.
- Prefer large, high-resolution source images when they add value, and vary their displayed size and aspect ratio to suit the story: use wide hero images, landscape or portrait editorial images, full-width maps/diagrams, and smaller supporting images. Avoid forcing every image into identical cards or crops. Preserve important subjects with `object-fit`/positioning or uncropped layouts, and provide responsive sizing so large visuals work on mobile without slowing initial load.
- Align each visual with the heading or text it supports, and keep a deliberate vertical rhythm when a lesson uses a stack or gallery of images. On narrow screens, preserve comfortable spacing as the text and visuals become a single column.
- Give every finished module a substantial quiz that covers every chapter. Mix formats when useful, such as multiple choice, multiple select, true or false, and ordering. Include explanatory feedback, scoring, and a retry option.
