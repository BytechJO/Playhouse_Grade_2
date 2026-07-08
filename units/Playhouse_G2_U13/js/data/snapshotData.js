var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/page_98/pizza.mp3","../audios/page_98/dough.mp3","../audios/page_98/sauce.mp3","../audios/page_98/sprinkle.mp3","../audios/page_98/cheese.mp3","../audios/page_98/add.mp3","../audios/page_98/pepperoni.mp3","../audios/page_98/slice.mp3"],
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
        "mainTitle_audio": "../audios/page_98/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>1</span> Listen and say.", "<span class='red_text'>2</span> Listen and point.", "<span class='red_text'>3</span> Read."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png", "../images/pages/sb-icons/conv_1_icon.png", "../images/pages/page-1/q-1-icon-3.png"],
        "titlesAudio" : ["../audios/page_98/1_Listen_and_say.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1  North America","2 Atlantic Ocean", "3 Europe","4 Asia","5 panther", "6 Central America","7 South America","8  Africa", "9 Australia", "10 Antarctica"],
        "audio": ["../audios/page_98/1_North_America.mp3","../audios/page_98/2_Atlantic_Ocean.mp3", "../audios/page_98/3_Europe.mp3",
                  "../audios/page_98/4_Asia.mp3","../audios/page_98/5_Pacific_Ocean.mp3", "../audios/page_98/6_Central_America.mp3",
                  "../audios/page_98/7_South_America.mp3","../audios/page_98/8_Africa.mp3", "../audios/page_98/9_Australia.mp3",
                  "../audios/page_98/10_Antarctica.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_98/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>4</span> You do it."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png"],
        "titleTextRight": "<span class='red_text'> Ask and answer.</span>",
        "titlesAudio" : ["../audios/page_98/Pg4_1.2_Adult_Lady.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/page_98/Pg5_2.2_Adult Lady.mp3","../audios/page_98/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["North America","Atlantic Ocean", "Europe","Asia","panther", "Central America","South America","Africa", "Australia", "Antarctica"],
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
              // "../images/pages/page-1/intro-11.png",
              // "../images/pages/page-1/intro-12.png",
            ],
 "postions"  : ["left:162px; top:148px;",
                "left:414px; top:226px;",
                "left:627px; top:83px;",
                "left:856px; top:234px;",//4
                "left:16px; top:251px;",
                "left:162px; top:295px;",//6
                "left:181px; top:433px;",
                "left:508px; top:255px;",
                "left:1071px; top:506px;",
                "left:518px; top:657px;",
                // "left:508px; top:475px;",
                // "left:369px; top:569px;",
              ],
  "imagesAudio" :["../audios/page_98/1_North_America.mp3","../audios/page_98/2_Atlantic_Ocean.mp3", "../audios/page_98/3_Europe.mp3",
                  "../audios/page_98/4_Asia.mp3","../audios/page_98/5_Pacific_Ocean.mp3", "../audios/page_98/6_Central_America.mp3",
                  "../audios/page_98/7_South_America.mp3","../audios/page_98/8_Africa.mp3", "../audios/page_98/9_Australia.mp3",
                  "../audios/page_98/10_Antarctica.mp3"]
}