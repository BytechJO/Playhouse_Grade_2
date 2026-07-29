// ******************************************
// Double Letter Words Activity
// ******************************************

window.DoubleLetterWords = function (obj, dataObj) {
  var activityArea = obj;

  if (obj && obj.jquery) {
    activityArea = obj[0];
  }

  this.settings = {
    activity_area: activityArea,
    data_obj: dataObj,
  };

  this.init(this.settings);
};

DoubleLetterWords.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen();
  },

  listen: function () {
    var self = this;
    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    // =====================================================
    // First input
    // =====================================================

    $(activityArea)
      .off(
        "input.doubleLetterFirst",
        ".missing_letter_input"
      )
      .on(
        "input.doubleLetterFirst",
        ".missing_letter_input",
        function () {
          if (this.readOnly) {
            return;
          }

          this.value = this.value
            .replace(/[^a-zA-Z]/g, "")
            .slice(0, 1);

          var question = $(this).closest(
            ".double_letter_question"
          );

          self.hideQuestionIcon(question);
          self.enableButtons();
        }
      );

    // =====================================================
    // Second input
    // =====================================================

    $(activityArea)
      .off(
        "input.doubleLetterSecond",
        ".suffix_input"
      )
      .on(
        "input.doubleLetterSecond",
        ".suffix_input",
        function () {
          if (this.readOnly) {
            return;
          }

          this.value = this.value
            .replace(/[^a-zA-Z]/g, "")
            .slice(0, 3);

          var question = $(this).closest(
            ".double_letter_question"
          );

          self.hideQuestionIcon(question);
          self.enableButtons();
        }
      );

    // =====================================================
    // Select word
    // =====================================================

    $(activityArea)
      .off(
        "click.doubleLetter",
        ".word_choice"
      )
      .on(
        "click.doubleLetter",
        ".word_choice",
        function () {
          if (this.disabled) {
            return;
          }

          var question = $(this).closest(
            ".double_letter_question"
          );

          question
            .find(".word_choice")
            .removeClass("selected");

          $(this).addClass("selected");

          self.hideQuestionIcon(question);
          self.enableButtons();
        }
      );
  },

  normalize: function (value) {
    return String(value || "")
      .toLowerCase()
      .trim();
  },

  hideQuestionIcon: function (question) {
    question
      .find(".icon_wrap")
      .hide();

    question
      .find(".tick")
      .hide();

    question
      .find(".cross")
      .hide();
  },

  validate: function () {
    var activityArea = this.ob.activity_area;
    var dataObj = this.ob.data_obj;

    var questions =
      activityArea.querySelectorAll(
        ".double_letter_question"
      );

    var allCorrect = true;

    for (
      var i = 0;
      i < questions.length;
      i++
    ) {
      var questionNumber = parseInt(
        questions[i].dataset.qno
      );

      var questionData =
        dataObj.questions[questionNumber - 1];

      var iconWrap =
        questions[i].querySelector(".icon_wrap");

      var tick =
        questions[i].querySelector(".tick");

      var cross =
        questions[i].querySelector(".cross");

      iconWrap.style.display = "none";
      tick.style.display = "none";
      cross.style.display = "none";

      // السؤال الأول محلول، لا يتم فحصه ولا نظهر عليه أيقونة
      if (
        parseInt(dataObj.defaultAnswer) ===
        questionNumber
      ) {
        continue;
      }

      var firstInput =
        questions[i].querySelector(
          ".missing_letter_input"
        );

      var secondInput =
        questions[i].querySelector(
          ".suffix_input"
        );

      var selectedOption =
        questions[i].querySelector(
          ".word_choice.selected"
        );

      var userLetter = this.normalize(
        firstInput.value
      );

      var correctLetter = this.normalize(
        questionData.missingLetter
      );

      var userSuffix = this.normalize(
        secondInput.value
      );

      var correctSuffix = this.normalize(
        questionData.suffix
      );

      var selectedNumber = selectedOption
        ? parseInt(
            selectedOption.dataset.option
          )
        : 0;

      var letterCorrect =
        userLetter === correctLetter;

      var suffixCorrect =
        userSuffix === correctSuffix;

      var optionCorrect =
        selectedNumber ===
        parseInt(questionData.correctOption);

      if (
        letterCorrect &&
        suffixCorrect &&
        optionCorrect
      ) {
        iconWrap.style.display = "block";
        tick.style.display = "block";
      } else {
        iconWrap.style.display = "block";
        cross.style.display = "block";
        allCorrect = false;
      }
    }

    if (
      typeof showFeedback === "function"
    ) {
      showFeedback(true, allCorrect);
    }

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");
    }
  },

  reset: function () {
    var activityArea = this.ob.activity_area;
    var dataObj = this.ob.data_obj;

    var questions =
      activityArea.querySelectorAll(
        ".double_letter_question"
      );

    for (
      var i = 0;
      i < questions.length;
      i++
    ) {
      var questionNumber = parseInt(
        questions[i].dataset.qno
      );

      var questionData =
        dataObj.questions[questionNumber - 1];

      var firstInput =
        questions[i].querySelector(
          ".missing_letter_input"
        );

      var secondInput =
        questions[i].querySelector(
          ".suffix_input"
        );

      var choices =
        questions[i].querySelectorAll(
          ".word_choice"
        );

      var iconWrap =
        questions[i].querySelector(
          ".icon_wrap"
        );

      var tick =
        questions[i].querySelector(".tick");

      var cross =
        questions[i].querySelector(".cross");

      iconWrap.style.display = "none";
      tick.style.display = "none";
      cross.style.display = "none";

      for (
        var j = 0;
        j < choices.length;
        j++
      ) {
        choices[j].classList.remove(
          "selected"
        );

        choices[j].disabled = false;
      }

      if (
        parseInt(dataObj.defaultAnswer) ===
        questionNumber
      ) {
        firstInput.value =
          questionData.missingLetter;

        firstInput.readOnly = true;

        secondInput.value =
          questionData.suffix;

        secondInput.readOnly = true;

        for (
          var k = 0;
          k < choices.length;
          k++
        ) {
          choices[k].disabled = true;
        }

        choices[
          parseInt(
            questionData.correctOption
          ) - 1
        ].classList.add("selected");
      } else {
        firstInput.value = "";
        firstInput.readOnly = false;

        secondInput.value = "";
        secondInput.readOnly = false;
      }
    }

    $(".checkBtn").addClass("disabled");
    $(".resetBtn").addClass("disabled");
  },

  enableButtons: function () {
    $(".checkBtn").removeClass(
      "disabled"
    );

    $(".resetBtn").removeClass(
      "disabled"
    );
  },

  initialSettings: function () {
    this.reset();

    if (
      typeof initialSettingsDone ===
      "function"
    ) {
      initialSettingsDone(1);
    }
  },
};