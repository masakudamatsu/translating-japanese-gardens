describe('Integration test with visual testing', () => {
  it('Loads the homepage', () => {
    cy.visit('/');
    cy.scrollTo('bottom', {duration: 2000}); // Scroll to the bottom so all the images will be loaded before taking a snapshot
    // Percy docs recommends scroll-to-bottomjs
    // https://docs.percy.io/docs/capturing-lazy-loading-images#examples
    // but it appears to fix the scroll position at the bottom
    // so cy.scrollTo('top') doesn't appear to work afterwards, to reveal the top app bar

    cy.percySnapshot('index', {widths: [320, 410, 648, 836, 1011]});
    // 320px for the narrowest screen to support
    // 410px for font-size change breakpoint
    // 648px for the middle point between 571px to 727px
    // 836px for the middle point between 728px to 945px
    // 1011px for the breakpoint to show the background on both sides
  });
});
