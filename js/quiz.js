function verifyQuiz() {
  var correctAnswers = [1, 0, 2, 2, 3, 1, 1, 1, 0, 1];
  var score = 0;

  var resultsHTML =
    '<div id="results" class="results-section">' +
    '<h2>Your Score: <span id="score">0</span>/10</h2>' +
    '<div class="results-table-container">' +
    '<table class="results-table">' +
    "<thead><tr><th>Question</th><th>Your Answer</th><th>Result</th></tr></thead>" +
    "<tbody>";

  for (var i = 1; i <= 10; i++) {
    var question = document.getElementsByName("q" + i);
    var questionText = document
      .getElementsByClassName("quiz-card")
      [i - 1].getElementsByTagName("h3")[0].innerHTML;
    var userAnswer = "";
    var isCorrect = false;

    for (var j = 0; j < question.length; j++) {
      if (question[j].checked) {
        userAnswer = question[j].parentNode.innerHTML
          .replace(/<input[^>]*>/g, "")
          .trim();
        isCorrect = parseInt(question[j].value) === correctAnswers[i - 1];
        if (isCorrect) score++;
      }
    }

    resultsHTML +=
      "<tr><td>" +
      questionText +
      "</td>" +
      "<td>" +
      (userAnswer || "No answer") +
      "</td>" +
      '<td><span class="result-icon ' +
      (isCorrect ? "correct" : "incorrect") +
      '">' +
      (isCorrect ? "✓" : "✗") +
      "</span></td></tr>";
  }

  resultsHTML +=
    "</tbody></table></div>" +
    '<a href="quiz.html"><button class="submit-button">Try Again</button></a>' +
    "</div>";

  document.getElementsByClassName("quiz-container")[0].innerHTML = resultsHTML;
  document.getElementById("score").textContent = score;

  return false;
}

document.getElementsByClassName("submit-button")[0].onclick = function () {
  verifyQuiz();
  return false;
};
