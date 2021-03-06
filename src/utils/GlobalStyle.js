import {createGlobalStyle} from 'styled-components';
import {colour} from 'src/utils/colorScheme';
import {
  cormorant,
  cormorantGaramond,
  cormorantGaramondItalic,
  cormorantSCBold,
  cormorantSCSemiBold,
  libreBaskervilleRegular,
  libreBaskervilleRegularItalic,
  playfairDisplay,
  playfairDisplaySC,
} from 'src/utils/fontMetrics';

// glyphhanger --whitelist=龍安寺孤篷庵 --subset=ShipporiMinchoB1-Medium.ttf
const GlobalStyle = createGlobalStyle`
/* Self-hosted fonts */
@font-face {
  font-family: 'Cormorant';
  src: url('fonts/Cormorant-Bold-subset.woff2') format('woff2'),
       url('fonts/Cormorant-Bold-subset.zopfli.woff') format('woff'),
       url('fonts/Cormorant-Bold-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${cormorant.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('fonts/CormorantGaramond-SemiBold-subset.woff2') format('woff2'),
       url('fonts/CormorantGaramond-SemiBold-subset.zopfli.woff') format('woff'),
       url('fonts/CormorantGaramond-SemiBold-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${cormorantGaramond.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Cormorant Garamond Italic';
  src: url('fonts/CormorantGaramond-SemiBoldItalic-subset.woff2') format('woff2'),
       url('fonts/CormorantGaramond-SemiBoldItalic-subset.zopfli.woff') format('woff'),
       url('fonts/CormorantGaramond-SemiBoldItalic-subset.ttf') format('truetype');
  font-style: ${cormorantGaramondItalic.fontStyle};
  font-weight: ${cormorantGaramondItalic.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Cormorant SC Semi-bold';
  src: url('fonts/CormorantSC-SemiBold-subset.woff2') format('woff2'),
       url('fonts/CormorantSC-SemiBold-subset.zopfli.woff') format('woff'),
       url('fonts/CormorantSC-SemiBold-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${cormorantSCSemiBold.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Cormorant SC Bold';
  src: url('fonts/CormorantSC-Bold-subset.woff2') format('woff2'),
       url('fonts/CormorantSC-Bold-subset.zopfli.woff') format('woff'),
       url('fonts/CormorantSC-Bold-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${cormorantSCBold.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Libre Baskerville';
  src: url('fonts/LibreBaskerville-Regular-subset.woff2') format('woff2'),
       url('fonts/LibreBaskerville-Regular-subset.zopfli.woff') format('woff'),
       url('fonts/LibreBaskerville-Regular-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${libreBaskervilleRegular.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Libre Baskerville Italic';
  src: url('fonts/LibreBaskerville-Italic-subset.woff2') format('woff2'),
       url('fonts/LibreBaskerville-Italic-subset.zopfli.woff') format('woff'),
       url('fonts/LibreBaskerville-Italic-subset.ttf') format('truetype');
  font-style: ${libreBaskervilleRegularItalic.fontStyle};
  font-weight: ${libreBaskervilleRegularItalic.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Playfair Display';
  src: url('fonts/PlayfairDisplay-SemiBold-subset.woff2') format('woff2'),
       url('fonts/PlayfairDisplay-SemiBold-subset.zopfli.woff') format('woff'),
       url('fonts/PlayfairDisplay-SemiBold-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${playfairDisplay.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Playfair Display SC';
  src: url('fonts/PlayfairDisplaySC-Regular-subset.woff2') format('woff2'),
       url('fonts/PlayfairDisplaySC-Regular-subset.zopfli.woff') format('woff'),
       url('fonts/PlayfairDisplaySC-Regular-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: ${playfairDisplaySC.fontWeight};
  font-display: swap;
}
@font-face {
  font-family: 'Shippori Mincho';
  src: url('fonts/ShipporiMincho-Medium-subset.woff2') format('woff2'),
       url('fonts/ShipporiMincho-Medium-subset.zopfli.woff') format('woff'),
       url('fonts/ShipporiMincho-Medium-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Shippori Mincho B1';
  src: url('fonts/ShipporiMinchoB1-Medium-subset.woff2') format('woff2'),
       url('fonts/ShipporiMinchoB1-Medium-subset.zopfli.woff') format('woff'),
       url('fonts/ShipporiMinchoB1-Medium-subset.ttf') format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Reforma 1918 Blanca';
  src: url('fonts/Reforma1918-Blanca.eot?#iefix') format('embedded-opentype'), /* IE8 or earlier */
       url('fonts/Reforma1918-Blanca-subset.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/Reforma1918-Blanca-subset-zopfli.woff') format('woff'), /* Modern Browsers */
       url('fonts/Reforma1918-Blanca-subset.ttf') format('truetype');	 /* Safari, Android, iOS */
  font-style: normal;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  font-display: swap;
}

@font-face {
  font-family: 'Reforma 1918 Gris';
  src: url('fonts/Reforma1918-Gris.eot?#iefix') format('embedded-opentype'), /* IE8 or earlier */
       url('fonts/Reforma1918-Gris-subset.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/Reforma1918-Gris-subset-zopfli.woff') format('woff'), /* Modern Browsers */
       url('fonts/Reforma1918-Gris-subset.ttf') format('truetype');	 /* Safari, Android, iOS */
  font-style: normal;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  font-display: swap;
}

@font-face {
  font-family: 'Reforma 1918 Gris Italica';
  src: url('fonts/Reforma1918-GrisItalica.eot') format('embedded-opentype'), /* IE8 or earlier */
       url('fonts/Reforma1918-GrisItalica-subset.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/Reforma1918-GrisItalica-subset-zopfli.woff') format('woff'), /* Modern Browsers */
       url('fonts/Reforma1918-GrisItalica-subset.ttf') format('truetype');	 /* Safari, Android, iOS */
  font-style: italic;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  font-display: swap;
}

/*!
 * ress.css • v3.0.1
 * MIT License
 * github.com/filipelinhares/ress
 */

/* # =================================================================
   # Global selectors
   # ================================================================= */

html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat; /* Set "background-repeat: no-repeat" to all elements and pseudo elements */
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}

* {
  padding: 0; /* Reset "padding" and "margin" of all elements */
  margin: 0;
}

/* # =================================================================
   # General elements
   # ================================================================= */

hr {
  overflow: visible; /* Show the overflow in Edge and IE */
  height: 0; /* Add the correct box sizing in Firefox */
}

details,
main {
  display: block; /* Render the "main" element consistently in IE. */
}

summary {
  display: list-item; /* Add the correct display in all browsers */
}

small {
  font-size: 80%; /* Set font-size to 80% in "small" elements */
}

[hidden] {
  display: none; /* Add the correct display in IE */
}

abbr[title] {
  border-bottom: none; /* Remove the bottom border in Chrome 57 */
  /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
  text-decoration: underline;
  text-decoration: underline dotted;
}

a {
  background-color: transparent; /* Remove the gray background on active links in IE 10 */
}

a:active,
a:hover {
  outline-width: 0; /* Remove the outline when hovering in all browsers */
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace; /* Specify the font family of code elements */
}

pre {
  font-size: 1em; /* Correct the odd "em" font sizing in all browsers */
}

b,
strong {
  font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
}

/* https://gist.github.com/unruthless/413930 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* # =================================================================
   # Forms
   # ================================================================= */

input {
  border-radius: 0;
}

/* Replace pointer cursor in disabled elements */
[disabled] {
  cursor: default;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
}

[type="search"] {
  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
  outline-offset: -2px; /* Correct the outline style in Safari */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
}

textarea {
  overflow: auto; /* Internet Explorer 11+ */
  resize: vertical; /* Specify textarea resizability */
}

button,
input,
optgroup,
select,
textarea {
  font: inherit; /* Specify font inheritance of form elements */
}

optgroup {
  font-weight: bold; /* Restore the font weight unset by the previous rule */
}

button {
  overflow: visible; /* Address "overflow" set to "hidden" in IE 8/9/10/11 */
}

button,
select {
  text-transform: none; /* Firefox 40+, Internet Explorer 11- */
}

/* Apply cursor pointer to button elements */
button,
[type="button"],
[type="reset"],
[type="submit"],
[role="button"] {
  cursor: pointer;
  /* color: inherit; Removed as this somehow overrides the style defined with styled.button */
}

/* Remove inner padding and border in Firefox 4+ */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/* Replace focus style removed in the border reset above */
button:-moz-focusring,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  outline: 1px dotted ButtonText;
}

button,
html [type="button"], /* Prevent a WebKit bug where (2) destroys native "audio" and "video"controls in Android 4 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
}

/* Remove the default button styling in all browsers */
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
}

/* Style select like a standard input */
select {
  -moz-appearance: none; /* Firefox 36+ */
  -webkit-appearance: none; /* Chrome 41+ */
}

select::-ms-expand {
  display: none; /* Internet Explorer 11+ */
}

select::-ms-value {
  color: currentColor; /* Internet Explorer 11+ */
}

legend {
  border: 0; /* Correct "color" not being inherited in IE 8/9/10/11 */
  color: inherit; /* Correct the color inheritance from "fieldset" elements in IE */
  display: table; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge and IE */
  white-space: normal; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge 18- and IE */
}

::-webkit-file-upload-button {
  /* Correct the inability to style clickable types in iOS and Safari */
  -webkit-appearance: button;
  color: inherit;
  font: inherit; /* Change font properties to "inherit" in Chrome and Safari */
}

/* # =================================================================
   # Specify media element style
   # ================================================================= */

img {
  border-style: none; /* Remove border when inside "a" element in IE 8/9/10 */
}

/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
progress {
  vertical-align: baseline;
}

/* # =================================================================
   # Accessibility
   # ================================================================= */

/* Hide content from screens but not screenreaders */
@media screen {
  [hidden~="screen"] {
    display: inherit;
  }
  [hidden~="screen"]:not(:active):not(:focus):not(:target) {
    position: absolute !important;
    clip: rect(0 0 0 0) !important;
  }
}

/* Specify the progress cursor of updating elements */
[aria-busy="true"] {
  cursor: progress;
}

/* Specify the pointer cursor of trigger elements */
[aria-controls] {
  cursor: pointer;
}

/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
[aria-disabled] {
  cursor: default;
}

/* Reset range input style */
/* See https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/#applying-base-css-styles */
input[type=range] {
  /* Hides the slider so that custom slider can be made */
  -webkit-appearance: none;
  /* Remove white background in Chrome */
  background: transparent;
  /* "width: 100%;" (for Firefox which requires a specific width) is removed as it will override the custom-style (for unknown reason) */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  outline: none;
}

input[type=range]::-ms-track {
  cursor: pointer;
  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/***********************************
  Custom global style
************************************/
input {
  color: inherit; /* Prevent Chrome from applying "internal-light-dark" to override the body element's color property */
}

:root { /* The background-color on the body element won't spread over the entire page for some reason. */
  background-color: ${colour.global.background};
}
`;

export default GlobalStyle;
