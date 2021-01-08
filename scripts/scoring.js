/* TODO: Program the following:
 *  Update the Jeopardy game to keep score.
 *
 * 1. Get the `#score` div to show up.
 *      HINT: Use the show() method in jQuery;
 *      Need more help? Check out https://api.jquery.com/show/ or ask a volunteer.
 *
 * 2. Attach click handlers to `#correct-button` and `#incorrect-button` to update the score.
 *      HINT: Finish the `addToScore' and subtractFromScore` helper methods below first.
 *      Need more help? Ask a volunteer.
 *
 * 3. Attach a click handler to `#question-modal-show-answer` which hides `#question-modal-actions`
 *          and shows `#scoring-actions`.
 *      HINT: Use the `hide()` and `show()` methods in jQUery;
 *      Need more help? Check out https://api.jquery.com/ or ask a volunteer.
 */

function renderScoringButtons() {
  $("#score").show();
}

/* TODO: Program the following:
 *  Update the score.
 *
 * 1. Get the current score using getCurrentScore().
 *
 * 2. Compute the new score by adding or subtracting `currentQuestionValue`.
 *
 * 3. Update the game with the new score.
 *      HINT: The score is in the '#current-score' span.
 *
 * BONUS: Use getFormattedScore(score) to format your score before changing the text.
 *      HINT: Use the toUpperCase() function.
 *      TRIVIA: Why is it called UPPERCASE?
 *      Answer: https://bit.ly/3gOwrga
 *
 * BONUS 2: Move the common code from addToScore and subtractFromScore to a helper function!
 *      HINT: Compute the new score and then call the helper function.
 */
function subtractFromScore() {}

function addToScore() {
  let currentScore = getCurrentScore();
  let newScore = currentQuestionValue + currentScore;
}
