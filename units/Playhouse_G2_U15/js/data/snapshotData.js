var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/page_110/pizza.mp3","../audios/page_110/dough.mp3","../audios/page_110/sauce.mp3","../audios/page_110/sprinkle.mp3","../audios/page_110/cheese.mp3","../audios/page_110/add.mp3","../audios/page_110/pepperoni.mp3","../audios/page_110/slice.mp3"],
      "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png"],
      "word": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>","<span>add</span>","<span>pepperoni</span>","<span>slice</span>"],
      "imagePlacePos":[[1,1,1],[1,1,1],[1,0,1]]
        }
  ],"popuptitle": "What I Want To Know:"
}

var snapshotPopup_data="<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

var Popups_data = {
  "slides": [
    {
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_110/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>1</span> Listen and say.", "<span class='red_text'>2</span> Listen and point.", "<span class='red_text'>3</span> Read."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png", "../images/pages/sb-icons/conv_1_icon.png", "../images/pages/page-1/q-1-icon-3.png"],
        "titlesAudio" : ["../audios/page_110/1_Listen_and_say.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1  break time","2  in the morning", "3 noon","4 in the afternoon","5 at night", "6 early","7 on time","8  late", "9 clock", "10 time","11 meet","12 watch"],
        "audio": ["../audios/page_110/1_break_time.mp3","../audios/page_110/2_in_the_morning.mp3", "../audios/page_110/3_noon.mp3",
                  "../audios/page_110/4_in_the_afternoon.mp3","../audios/page_110/5_at_night.mp3", "../audios/page_110/6_early.mp3",
                  "../audios/page_110/7_on_time.mp3","../audios/page_110/8_late.mp3", "../audios/page_110/9_clock.mp3",
                  "../audios/page_110/10_time.mp3","../audios/page_110/11_meet.mp3", "../audios/page_110/12_watch.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_110/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>4</span> You do it."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png"],
        "titleTextRight": "<span class='red_text'> Ask and answer.</span>",
        "titlesAudio" : ["../audios/page_110/Pg4_1.2_Adult_Lady.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/page_110/Pg5_2.2_Adult Lady.mp3","../audios/page_110/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["break time"," in the morning", "noon","in the afternoon","at night", "early","on time","late", "clock", "time","meet","watch"],
  "points"  : ["../images/pages/page-1/intro-1.png",
              "../images/pages/page-1/intro-2.png",
              "../images/pages/page-1/intro-3.png",
              "../images/pages/page-1/intro-4.png",
              "../images/pages/page-1/intro-5.png",
              "../images/pages/page-1/intro-6.png",
              "../images/pages/page-1/intro-7.png",
              "../images/pages/page-1/intro-8.png",
              "../images/pages/page-1/intro-9.png",
              "../images/pages/page-1/intro-10.png",
              "../images/pages/page-1/intro-11.png",
              "../images/pages/page-1/intro-12.png",
            ],
 "postions"  : ["left:1198px; top:615px;",
                "left:227px; top:382px;",
                "left:507px; top:219px;",
                "left:1062px; top:18px;",//4
                "left:681px; top:413px;",
                "left:110px; top:529px;",//6
                "left:899px; top:180px;",
                "left:1184px; top:25px;",
                "left:631px; top:96px;",
                "left:578px; top:286px;",
                "left:105px; top:185px;",
                "left:343px; top:406px;",
              ],
  "imagesAudio" :["../audios/page_110/1_break_time.mp3","../audios/page_110/2_in_the_morning.mp3", "../audios/page_110/3_noon.mp3",
                  "../audios/page_110/4_in_the_afternoon.mp3","../audios/page_110/5_at_night.mp3", "../audios/page_110/6_early.mp3",
                  "../audios/page_110/7_on_time.mp3","../audios/page_110/8_late.mp3", "../audios/page_110/9_clock.mp3",
                  "../audios/page_110/10_time.mp3","../audios/page_110/11_meet.mp3", "../audios/page_110/12_watch.mp3"]
}