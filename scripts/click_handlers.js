/* TODO: Program the following:
 *  Finish each helper function below.
 *
 * 1. Finish attachClickHandlers().
 *      HINT: It looks like someone forgot to add a click handler to the Jeopardy questions!
 *
 * 2. Check to make sure that your code change works.
 *      HINT: Launch the game and click on a question. If you see a pop-up with the question, category and value, then it worked!
 *            Your screen should look like {LINK}.
 *      Need more help? Ask a volunteer.
 *
 * 3. Finish questionOnClick().
 *      HINT: It looks like the previous engineer also forgot to add a click handler for displaying the answer in the jeopardy box.
 *
 * 4. Check to make sure that your code change works.
 *      HINT: Launch the game and click on a question. Then click on "show answer". If the answer is displayed, then it worked!
 *            Your screen should look like {LINK}.
 *      Need more help? Ask a volunteer.
 *
 * 5. Challenge!!!!! Fix the "close" button.
 *      HINT: Read through the code and identify where the click handler is added to the close button.
 *
 * 6. Check to make sure that your code change works.
 *      HINT: Launch the game and click on a question, click on "show answer" and finally click on "close".
 *            If the popup closes correctly, then it worked!
 *      Need more help? Ask a volunteer.
 */

/* TODO: Program the following:
 *   Attach a click handler to each question on the Jeopardy board.
 *
 * 1. Call the questionOnClick helper function when $(questionElement) is clicked.
 *      HINT: The questionOnClick takes two parameters.
 *      Find out which ones by looking at the function.
 *      Need more help? Check out https://bit.ly/2RP3RBg or ask a volunteer.
 */
function attachClickHandlers() {
  $(".question-cell").each((index, questionElement) => {
    // categoryIndex is used to look up the jeopardy question for this element.
    let categoryIndex = $(questionElement).attr("data-category");
    let moneyValue = $(questionElement).text().replace("$", "");
    $(questionElement).click(() => {
      questionOnClick(categoryIndex, moneyValue);
    });
  });
}

/* TODO: Program the following:
 *   Populate the question modal with data for the appropriate question.
 *
 * 1. Replace the console.log with the helper function that displays the answer.
 *      HINT: One of the helper methods in this file displays the answer. Find it!
 *      Need more help? Ask a volunteer.
 */
function questionOnClick(categoryIndex, moneyValue) {
  let question = getQuestion(categoryIndex, moneyValue);
  $("#question-modal-title").html(
    categories[categoryIndex] + " - $" + moneyValue
  );
  $("#question-modal-text").html(question.question_text);
  $("#question-modal-show-answer")
    .click(() => {
      answerOnClick(categoryIndex, moneyValue);
      console.log("I just got clicked, I wish I could do more though!");
      answerOnClick;
    })
    .show();

  $("#question-modal-close").click(() => {
    hideQuestionPopup();
    console.log("I just got clicked, I wish I could do more though!");
  });
  $("#question-modal").modal("show");
}

// This helper function uses the categoryIndex and moneyValue to return the question.
function getQuestion(categoryIndex, moneyValue) {
  return questions_by_category[categoryIndex][moneyValue];
}

// Hides the question popup.
function hideQuestionPopup() {
  $("#question-modal").modal("hide");
}

// This function is the click handler for the "show answer" button.
function answerOnClick(categoryIndex, moneyValue) {
  let question = getQuestion(categoryIndex, moneyValue);
  $("#question-modal-show-answer").hide();
  $("#question-modal-text").html(question.answer_text);
}
