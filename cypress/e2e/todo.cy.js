describe("Agregar tareas", () => {
    it("Agregar tarea a la lista", () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 1").type("{enter}")
    cy.get('[data-testid="todo-item-label"]')
})
it("Marcar tarea como completada", () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 2").type("{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
})
it("Desmarcar tarea completa", () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 3").type("{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
})
it("Editar tarea", () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 4").type("{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="main"]').type("{selectAll}").type("Tarea 4 modificada").type("{enter}")
    cy.get('[data-testid="todo-item-label"]')
})
it("Borrar tarea", () =>{
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 5").type("{enter}")
    cy.get("button.destroy").click({force:true})
})
it("Filtrar tareas", () =>{
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 6.1 completada").type("{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.2 completada").type("{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.3 completada").type("{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.4 NO completada").type("{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.5 NO completada").type("{enter}")
    cy.get('[data-testid="main"]')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > a').click()
    cy.get('[data-testid="main"]')
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get('[data-testid="main"]')
    cy.get(':nth-child(1) > a').click()
    cy.get('[data-testid="main"]')
})
})
