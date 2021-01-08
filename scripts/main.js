$(function() {
    $(window).resize(resizeFunction);
    renderCategories();
    renderQuestions();
    resizeFunction();
    attachClickHandlers();
    attachScoringClickHandler();
    renderScoringButtons();
    $("#correct-button").click(() => hideQuestionPopup());
    $("#incorrect-button").click(() => hideQuestionPopup());
});

function attachScoringClickHandler() {
    $(".question-cell").each((index, questionElement) => {
        $(questionElement).click(() => {
            currentQuestionElement = questionElement;
            currentQuestionValue = parseInt($(questionElement).text().replace("$", ""));
        });
      });
}

function resizeFunction() {
    var textHeight = Math.max.apply(null, ($('.category-cell').map(function() { return $(this).height(); })));
    var width = Math.max.apply(null, ($('.category-cell').map(function() { return $(this).parent().width(); })));
    var aspectRatioHeight = width * (9 / 16);
    var height = Math.max(textHeight, aspectRatioHeight);
    $('.category-cell').height(height).width(width);
};

// Handle the hiding of the question modal.
$('#question-modal').on('hidden.bs.modal', function () {
    $(currentQuestionElement).addClass('disabled-question-cell').removeClass('question-cell').unbind().html("");
    $("#correct-button").prop("disabled", false);
    $("#question-modal-actions").show();
    $("#scoring-actions").hide();
})

function getCurrentScore() {
    return parseInt($("#current-score").html().replace(/[^0-9.-]+/g,""));
}

function getFormattedScore(score) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(score);
}