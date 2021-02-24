describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    });
  });


  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    });
  });


  it('Image and sound changes when party-horn is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    });
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
    });
  });


  it('Volume image changes when increasing volumes 0 - 33', () => {
    cy.get('#volume-slider').invoke('val', 30).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when increasing volumes 34 - 67', () => {
    cy.get('#volume-slider').invoke('val', 60).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when increasing volumes 67 - 100', () => {
    cy.get('#volume-slider').invoke('val', 80).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled', "disabled");
    });
  });


  it('Honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear().type('1000');
    cy.get('#party-horn-form').submit().then(function() {
      cy.get('input:invalid').should('have.length', 1);
    });
    
  });




});
