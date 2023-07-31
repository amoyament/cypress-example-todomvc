describe("Testing todo app for GI", () => {
  let toDoItem1 = "Make every second count";
  let toDoItem2 = "Invest in yourself";
  let toDoItem3 = "Learn Cypress";

  beforeEach(() => {
    cy.visit("http://localhost:8888/#/");
  });

  it("displays items", () => {
    cy.get(".new-todo").type(toDoItem1).type("{enter}");
    cy.get(".new-todo").type(toDoItem2).type("{enter}");
    cy.get(".new-todo").type(toDoItem3).type("{enter}");
  });
});

context("Mark all as completed", function () {
  beforeEach(function () {
    cy.createDefaultTodos().as("todos");
  });

  it("should allow me to mark all items as completed", function () {
    cy.get(".toggle-all").check();
    cy.get("@todos").eq(0).should("have.class", "completed");
    cy.get("@todos").eq(1).should("have.class", "completed");
    cy.get("@todos").eq(2).should("have.class", "completed");
  });
});
