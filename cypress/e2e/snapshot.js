describe('Integration test with visual testing', () => {
  it('Loads the homepage', () => {
    cy.visit('/');
    cy.document().its('fonts.status').should('equal', 'loaded');
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
  const pages = ['ryoanji', 'kohoan'];
  pages.forEach(page => {
    it(`Loads ${page} page`, () => {
      cy.visit(`/${page}`);
      cy.document().its('fonts.status').should('equal', 'loaded');
      cy.scrollTo('bottom', {duration: 2000}); // Longer duration won't load more images anyway
      cy.scrollTo('top'); // Scroll up to reveal the top app bar
      cy.findByTestId('top-app-bar').should('be.visible');

      // Snapshot without navigation drawer
      cy.percySnapshot(page, {widths: [320, 410, 648, 836, 1011]});
      // 320px for the narrowest screen to support
      // 410px for font-size change breakpoint
      // 648px for the middle point between 571px to 727px
      // 836px for the middle point between 728px to 945px
      // 1011px for the breakpoint to show the background on both sides

      // Snapshot with navigation drawer
      cy.findByRole('button', {name: 'Menu'}).click();
      cy.findByTestId('nav-menu').should('be.visible');
      cy.percySnapshot(`${page}-with-nav`, {
        widths: [320, 410, 648, 836, 1011],
      });
    });
  });
});
