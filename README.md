# The Curious World

A personal, lifelong learning project about the people, ideas and forces that shape our world. This first version is a responsive static homepage featuring the planned 19 subjects. It is intentionally built with plain HTML, CSS and JavaScript so it can be opened locally and hosted on GitHub Pages without a build step.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server (for example, `python -m http.server 8000`).

## Publish with GitHub Pages

Create a GitHub repository, push this folder to its default branch, then choose **Settings → Pages → Deploy from a branch**, select the default branch and `/ (root)`, and save. GitHub Pages will serve `index.html` at the repository's Pages URL.

## Images and illustrations

The homepage globe is an inline SVG, so it is crisp at every size and needs no image download. For future modules, we can add a small number of carefully chosen images in either of two ways:

- **Remote image URL:** put the image URL in an `<img src="…">`. This keeps the repository small, but the image relies on the host allowing hotlinking and remaining online. Prefer stable sources with clear reuse rights, such as Wikimedia Commons, and include a credit and licence link beside the image.
- **Store the image in the repo:** download an appropriately licensed image into an `images/` folder and reference it locally. This is more reliable for GitHub Pages. Keep an attribution note in the page or a credits file and check the image's licence before reuse.

For maps, timelines and explanatory diagrams, SVG or CSS illustrations are often clearer and more dependable than a decorative photo. Google Fonts are currently loaded from Google's CDN; the site still has system-font fallbacks if that connection is unavailable.
