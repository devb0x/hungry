describe('Navigation', () => {
	it('should navigate to the account page', () => {
		// start from the index page
		cy.visit('http://localhost:3000/')

		// find link with a href attribute contain "account" and click it
		cy.get('a[href*="account"]').click()

		// the new url should include "/account"
		cy.url().should('include', '/account')

		// the new page should contain a h1 with "account"
		cy.get('h1').contains('account')

		cy.get('a[href*="/"]').click({multiple: true})
		cy.url().should('include', '')
	})
})