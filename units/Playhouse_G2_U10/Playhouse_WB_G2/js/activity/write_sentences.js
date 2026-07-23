//  ****************************************** //
//  Write Sentences - Version no: 1
//  ****************************************** //

window.WriteSentences = function (obj, dataObj) {
  var options = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],
    has_audio:
      obj[0].dataset.audio !== undefined && obj[0].dataset.audio !== null
        ? obj[0].dataset.audio
        : "no",
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WriteSentences.prototype = {
  init: function (settings) {
    this.ob = settings;
    this.listen(settings);
  },

  /* =====================================================
       Events
    ===================================================== */

  listen: function (settings) {
    var activityArea = settings.activity_area;
    var inputs = activityArea.querySelectorAll(".write_sentence_input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        this.style.color = "black";

        var question = this.closest(".que");

        if (question) {
          var iconWrap = question.querySelector(".icon_wrap");

          var tick = question.querySelector(".tick");

          var cross = question.querySelector(".cross");

          if (iconWrap) {
            iconWrap.style.display = "none";
          }

          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "none";
          }
        }

        var checkButton = document.getElementsByClassName("checkBtn")[0];

        var resetButton = document.getElementsByClassName("resetBtn")[0];

        if (checkButton) {
          checkButton.classList.remove("disabled");
        }

        if (resetButton) {
          resetButton.classList.remove("disabled");
        }
      });
    }
  },

  /* =====================================================
       Normalize sentence

       يتجاهل:
       - Capital letters
       - punctuation
       - repeated spaces
       - spaces before punctuation
    ===================================================== */

  normalizeSentence: function (value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[’‘`]/g, "'")
      .replace(/[.,!?;:"()[\]{}]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  },

  /* =====================================================
       Check if value matches one answer group
    ===================================================== */

  matchesAnswerGroup: function (value, answerGroup) {
    var normalizedValue = this.normalizeSentence(value);

    if (
      normalizedValue === "" ||
      !answerGroup ||
      !Array.isArray(answerGroup.answers)
    ) {
      return false;
    }

    for (var i = 0; i < answerGroup.answers.length; i++) {
      var normalizedAnswer = this.normalizeSentence(answerGroup.answers[i]);

      if (normalizedValue === normalizedAnswer) {
        return true;
      }
    }

    return false;
  },

  /* =====================================================
       Validate
    ===================================================== */

  validate: function () {
    var settings = this.ob;
    var activityArea = settings.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    var resultArr = [];

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      resultArr[questionIndex] = 0;

      var questionElement = questions[questionIndex];

      var questionNumber = parseInt(questionElement.dataset.qno, 10);

      var questionData = settings.data_obj.questions[questionNumber - 1];

      var inputs = questionElement.querySelectorAll(".write_sentence_input");

      var iconWrap = questionElement.querySelector(".icon_wrap");

      var tick = questionElement.querySelector(".tick");

      var cross = questionElement.querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var firstValue = inputs[0] ? inputs[0].value : "";

      var secondValue = inputs[1] ? inputs[1].value : "";

      var answerGroups = questionData.answerGroups || [];

      var questionCorrect = false;

      /*
            =================================================
            يجب أن تكون كل خانة مطابقة لمجموعة مختلفة.

            الترتيب العادي:
            input 1 → answerGroups[0]
            input 2 → answerGroups[1]

            أو الترتيب المعكوس:
            input 1 → answerGroups[1]
            input 2 → answerGroups[0]
            =================================================
            */

      if (
        firstValue.trim() !== "" &&
        secondValue.trim() !== "" &&
        answerGroups.length >= 2
      ) {
        var normalOrder =
          this.matchesAnswerGroup(firstValue, answerGroups[0]) &&
          this.matchesAnswerGroup(secondValue, answerGroups[1]);

        var reversedOrder =
          this.matchesAnswerGroup(firstValue, answerGroups[1]) &&
          this.matchesAnswerGroup(secondValue, answerGroups[0]);

        questionCorrect = normalOrder || reversedOrder;
      }

      if (questionCorrect) {
        resultArr[questionIndex] = 1;

        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        resultArr[questionIndex] = 0;

        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }
    }

    var allCorrect = resultArr.length > 0 && resultArr.indexOf(0) === -1;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.getElementsByClassName("resetBtn")[0];

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /* =====================================================
       Reset
    ===================================================== */

  reset: function () {
    var settings = this.ob;
    var activityArea = settings.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      var questionElement = questions[questionIndex];

      var inputs = questionElement.querySelectorAll(".write_sentence_input");

      var iconWrap = questionElement.querySelector(".icon_wrap");

      var tick = questionElement.querySelector(".tick");

      var cross = questionElement.querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
        inputs[inputIndex].value = "";
        inputs[inputIndex].style.color = "black";
      }
    }

    var checkButton = document.getElementsByClassName("checkBtn")[0];

    var resetButton = document.getElementsByClassName("resetBtn")[0];

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  },

  /* =====================================================
       Initial settings
    ===================================================== */

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
