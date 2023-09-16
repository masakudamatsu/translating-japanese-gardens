# Translating Japanese Gardens

A blog for a Japanese garden design enthusiast (that is, me) to articulate his thought on the design intent behind historical gardens. Currently, articles on Ryoan-ji Rock Garden and Koho-an Temple are posted.

## URLs

https://translating-japanese-gardens.pages.dev

Hosted by [Cloudflare Pages](https://pages.cloudflare.com), which I have chosen for an excellent developer experience that it provides.

## Features

### Subsetted and self-hosted custom fonts

Each blog post and its title on the index page uses a different font to reflect the design principle of each garden (Cormorant Garamond for Ryoan-ji; Playfaire Display and Libre Baskerville for Koho-an). The index page has its own custom font (Reforma 1918). Plus, Japanese characters, rendered in Shippori Miincho, are used for decoration purposes.

Serving all these custom fonts via the Google Fonts server is a performance nightmare. Consequently, I subset each font file to the glyphs actually used on this website, with the help of [Glyphhanger](https://github.com/zachleat/glyphhanger), which in particular allows me to serve only a handful of Japanese characters out of thousands of glyphs in the original font file.

### Kerning with inline SVG

The site logo is made with inline SVG, using the `dx` attribute of the `<tspan>` element to position each individual character.

### Text cropping to control vertical spacing between images and text

Blog posts typically insert images between paragraphs of text. But the amount of space above and below images is rarely thought out. 

In terms of messages delivered to the reader, an image may belong to the previous paragraph but not to the following one. If so, the vertical whitespace should be smaller above the image than below the image. To be more precise, the whitespace above (below) the image should be equal to the space between lines of text (between paragraphs). 

To achieve such whitespace hierarchy, I use the technique known as text-cropping to remove an extra space in text boxes above the cap-height or x-height of text and below the baseline of text. It enables us to control the whitespaces between paragraphs of text and between an image and a paragraph in the same fashion: just use the same value of `margin-top`.

### Linear-gradient CSS art for background texture

For wide screens, both sides of each blog article are lined with historical Japanese patterns (_shippo_ for Ryoan-ji; _seigaiha_ for Koho-an), inspired by East Asian hanging scrolls ([_kakejiku_](https://en.wikipedia.org/wiki/Hanging_scroll)).

To implement these patterns, I use the `linear-gradient()` CSS function by borrowing ideas from Lea Verou's [CSS3 Patterns Gallery](https://projects.verou.me/css3patterns/).






