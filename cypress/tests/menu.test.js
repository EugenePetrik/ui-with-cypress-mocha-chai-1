/// <reference types="cypress" />

import { FinanceIndexPage } from '../pages/FinanceIndexPage';
import { home } from '../elements/home';

describe('As a Yahoo Finance site user', function () {
  describe('I should have menu items', function () {
    before(function () {
      FinanceIndexPage.open();
    });

    // use cy.contains for this test https://docs.cypress.io/api/commands/contains#Selector
    it('Watchlist', function () {});

    // use cy.contains for this test https://docs.cypress.io/api/commands/contains#Selector
    it('My Portfolio', function () {});
  });
});
