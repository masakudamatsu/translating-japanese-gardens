# Translating Japanese Gardens

A blog for a Japanese garden design enthusiast (that is, me) to articulate his thought on the design intent behind historical gardens. Currently, articles on Ryoan-ji Rock Garden and Koho-an Temple are posted.

## Demo

https://github.com/masakudamatsu/translating-japanese-gardens/assets/36348559/309184da-dc48-4b11-90ca-45eb30635bb1

## URL

https://translating-japanese-gardens.pages.dev

The site is hosted by [Cloudflare Pages](https://pages.cloudflare.com), which I have chosen for an excellent developer experience that it provides.

## How It’s Made

This site features my own writings, speculating design intent behind historical gardens in Kyoto. The challenge is to ensure that web typography, the implementation of which is often very sloppy, keeps up with the beauty of these gardens.

### Text cropping to control vertical spacing between images and text

Blog posts typically insert images between paragraphs of text. But the amount of space above and below images is rarely thought out. 

In terms of messages delivered to the reader, an image may belong to the previous paragraph but not to the following one. If so, the vertical whitespace should be smaller above the image than below the image. To be more precise, the whitespace above (below) the image should be equal to the space between lines of text (between paragraphs). 

To achieve such whitespace hierarchy, I use the technique known as _text cropping_ (see [Kevin Powell's article in 2018](https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce)) to remove an extra space in text boxes above the cap-height or x-height of text and below the baseline of text. It enables us to control the whitespace between paragraphs of text and between an image and a paragraph in the same fashion: just use the same value of `margin-top`.

### Kerning with inline SVG

The site logo is made with inline SVG, using the `dx` attribute of the `<tspan>` element to position each individual character. For how I implement it, see [`src/components/SiteTitle.js`](https://github.com/masakudamatsu/translating-japanese-gardens/blob/main/src/components/SiteTitle.js).

### Linear-gradient CSS patterns for background texture

For wide screens, both sides of each blog article are lined with historical Japanese patterns (_shippo_ for Ryoan-ji; _seigaiha_ for Koho-an), inspired by East Asian hanging scrolls ([_kakejiku_](https://en.wikipedia.org/wiki/Hanging_scroll)).

To implement these patterns, I use the `linear-gradient()` CSS function by borrowing ideas from Lea Verou's [CSS3 Patterns Gallery](https://projects.verou.me/css3patterns/). For how I implement it, see:
- [`src/utils/patterns.js`](https://github.com/masakudamatsu/translating-japanese-gardens/blob/main/src/utils/patterns.js)
- [`src/element/Main.js`](https://github.com/masakudamatsu/translating-japanese-gardens/blob/main/src/elements/Main.js) (a Styled Component that styles the `<main>` element across pages)

## Optimization

### Static site generation
Next.js is used for static site generation (SSG) to shorten page load time while using React for code maintainability.

### Image optimization
For mobile device users, the images of narrower widths will be downloaded to minimize the waiting time for seeing the pictures of gardens. This is implemented by manually making up the `<img>` elements with the `sizes` and `srcset` attributes.

### Subsetted and self-hosted custom fonts

Each blog post and its title on the index page uses a different font to reflect the design principle of each garden ([Cormorant](https://www.behance.net/gallery/28579883/Cormorant-an-open-source-display-font-family) for Ryoan-ji; [Playfaire Display](https://fonts.google.com/specimen/Playfair+Display) and [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) for Koho-an). The index page has its own custom font ([Reforma](https://pampatype.com/reforma)). Plus, Japanese characters, rendered in [Shippori Miincho](https://fonts.google.com/specimen/Shippori+Mincho+B1/), are used for decoration purposes.

Serving all these custom fonts via the Google Fonts server is a performance nightmare. 

Consequently, I subset each font file to the glyphs actually used on this website, with the help of [Glyphhanger](https://github.com/zachleat/glyphhanger), which in particular allows me to serve only a handful of Japanese characters out of thousands of glyphs in the original font file.

These subsetted font files are then served from the same server as the one for content ([Lines 18-151 in `src/utils/GlobalStyle.js`](https://github.com/masakudamatsu/translating-japanese-gardens/blob/8022a716e41d3cc06a85f70d1e1d65bf0327d52f/src/utils/GlobalStyle.js#L17)), saving the time for a third-party connection setup.
