
describe('Quiz App', () => {
    beforeEach(() => {
      cy.visit('/quiz');
    });
  
    it('starts the quiz when clicking "Start Quiz"', () => {
      cy.contains('Start Quiz').click();
      cy.get('.card').should('exist');
      cy.get('h2').should('not.have.text', 'Quiz Completed');
    });
  
  
    it('loads and displays a question with answers', () => {
      cy.contains('Start Quiz').click();
  
      cy.get('h2', { timeout: 10000 }).should('exist'); // Wait for question
      cy.get('button').should('have.length.greaterThan', 0); // Should have answer buttons
    });
  
    it('selects answers and completes the quiz', () => {
      cy.contains('Start Quiz').click();
  
      // Simulate answering all questions
      cy.get('body').then(($body) => {
        function answerNextQuestion() {
          if ($body.find('h2:contains("Quiz Completed")').length > 0) {
            cy.contains('Quiz Completed').should('exist');
            cy.contains('Take New Quiz').should('exist');
            return;
          }
  
          cy.get('.btn.btn-primary').first().click();
  
          cy.wait(500); // simulate user delay
          cy.get('body').then(answerNextQuestion);
        }
  
        answerNextQuestion();
      });
    });
  
    it('restarts quiz from completion screen', () => {
      cy.contains('Start Quiz').click();
  
      // Finish quiz quickly by answering all questions
      cy.get('body').then(($body) => {
        function answerAll() {
          if ($body.find('h2:contains("Quiz Completed")').length > 0) {
            cy.contains('Take New Quiz').click();
            cy.contains('Start Quiz').should('not.exist'); // quiz restarted
            return;
          }
  
          cy.get('.btn.btn-primary').first().click();
          cy.wait(300);
          cy.get('body').then(answerAll);
        }
  
        answerAll();
      });
    });
  });
  