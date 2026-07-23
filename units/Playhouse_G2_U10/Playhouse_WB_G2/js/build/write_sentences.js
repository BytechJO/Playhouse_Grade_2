function buildWriteSentencesBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  /* =====================================================
       Back / Next
    ===================================================== */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =====================================================
       Header
    ===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

  if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title d-flex">';

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =====================================================
       Options
    ===================================================== */

  htmlStmt +=
    '<div class="options write_sentences_options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont write_sentences_all_cont">';

  htmlStmt += '<div class="screen_elements write_sentences_screen">';

  /* =====================================================
       Example
    ===================================================== */

  if (aObj.example) {
    htmlStmt += '<div class="write_sentences_example">';

    htmlStmt += '<div class="example_picture_group">';

    htmlStmt += '<div class="example_image_holder">';

    htmlStmt += '<img src="' + aObj.example.image + '" alt="">';

    htmlStmt += "</div>";

    htmlStmt += buildWriteSentenceAdjectives(aObj.example.adjectives);

    htmlStmt += "</div>";

    htmlStmt += '<div class="example_sentences">';

    for (
      var exampleIndex = 0;
      exampleIndex < aObj.example.sentences.length;
      exampleIndex++
    ) {
      htmlStmt +=
        '<div class="example_sentence">' +
        aObj.example.sentences[exampleIndex] +
        "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  /* =====================================================
       Questions
    ===================================================== */

  htmlStmt += '<div class="write_sentences_questions">';

  for (
    var questionIndex = 0;
    questionIndex < aObj.questions.length;
    questionIndex++
  ) {
    var question = aObj.questions[questionIndex];

    htmlStmt +=
      '<div class="que write_sentence_question" ' +
      'data-qno="' +
      (questionIndex + 1) +
      '">';

    htmlStmt += '<div class="question_picture_group">';
    htmlStmt += '<div class="question_image_holder">';

    htmlStmt +=
      '<img src="' +
      question.image +
      '" alt="' +
      (question.imageAlt || "") +
      '">';

    htmlStmt += "</div>";

    htmlStmt += buildWriteSentenceAdjectives(question.adjectives);

    htmlStmt += "</div>";

    htmlStmt += '<div class="write_answer_area">';

    htmlStmt += '<div class="write_input_row">';

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="write_sentence_input" ' +
      'maxlength="' +
      (question.maxlength || 100) +
      '" ' +
      'autocomplete="off" ' +
      'spellcheck="false">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="write_input_row">';

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="write_sentence_input" ' +
      'maxlength="' +
      (question.maxlength || 100) +
      '" ' +
      'autocomplete="off" ' +
      'spellcheck="false">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* Feedback icon */

    htmlStmt += '<div class="icon_wrap_holder write_icon_holder">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Adjectives builder
========================================================= */

function buildWriteSentenceAdjectives(adjectives) {
  var html = "";

  html += '<div class="write_adjectives">';

  for (var i = 0; i < adjectives.length; i++) {
    html += '<span class="write_adjective">' + adjectives[i] + "</span>";
  }

  html += "</div>";

  return html;
}
