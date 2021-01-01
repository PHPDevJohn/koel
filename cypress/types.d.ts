declare namespace Cypress {
  interface Chainable {
    $login(redirectTo?: string): Chainable<AUTWindow>
    $loginAsNonAdmin(redirectTo?: string): Chainable<AUTWindow>
    $each(dataset: Array<Array<any>>, callback: Function): void
    $confirm(): void
    $clickSidebarItem(sidebarItemText: string): Chainable<JQuery>

    /**
     * Support finding an element within an element identified with a test ID.
     * For example, given a DOM like this:
     *   <form data-testid="my-form">
     *     <input name="email">
     *   </form>
     * then the input can be accessed with:
     *   cy.$findInTestId('my-form input[name=email]')
     * which is identical to
     *   cy.findByTestId('my-form').find('input[name=email]')
     */
    $findInTestId<E extends Node = HTMLElement>(selector: string): Chainable<JQuery<E>>
  }
}
