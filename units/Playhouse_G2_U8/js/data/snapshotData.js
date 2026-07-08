var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/page_60/pizza.mp3","../audios/page_60/dough.mp3","../audios/page_60/sauce.mp3","../audios/page_60/sprinkle.mp3","../audios/page_60/cheese.mp3","../audios/page_60/add.mp3","../audios/page_60/pepperoni.mp3","../audios/page_60/slice.mp3"],
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
        "mainTitle_audio": "../audios/page_60/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>1</span> Listen and say.", "<span class='red_text'>2</span> Listen and point.", "<span class='red_text'>3</span> Read."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png", "../images/pages/sb-icons/conv_1_icon.png", "../images/pages/page-1/q-1-icon-3.png"],
        "titlesAudio" : ["../audios/page_60/1_Listen_and_say.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 escalator","2  shoe shop", "3 clothes shop","4  toy shop","5 small", "6 medium","7 price","8 large", "9 size","10 food court"],
        "audio": ["../audios/page_60/1_escalator.mp3","../audios/page_60/2_shoe_shop.mp3", "../audios/page_60/3_clothes_shop.mp3",
                  "../audios/page_60/4_toy_shop.mp3","../audios/page_60/5_small.mp3", "../audios/page_60/6_medium.mp3",
                  "../audios/page_60/7_price.mp3","../audios/page_60/8_large.mp3", "../audios/page_60/9_size.mp3",
                  "../audios/page_60/10_food_court.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_60/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>4</span> You do it."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png"],
        "titleTextRight": "<span class='red_text'> Ask and answer.</span>",
        "titlesAudio" : ["../audios/page_60/Pg4_1.2_Adult_Lady.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/page_60/Pg5_2.2_Adult Lady.mp3","../audios/page_60/Pg5_2.3_Adult Lady.mp3"]},
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["escalator","shoe shop", "clothes shop","toy shop","small", "medium","price","large", "size","food court"],
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
 "postions"  : ["left:153px; top:271px;",
                "left:520px; top:70px;",
                "left:587px; top:148px;",
                "left:348px; top:318px;",
                "left:621px; top:458px;",
                "left:773px; top:467px;",//6
                "left:976px; top:247px;",
                "left:887px; top:429px;",//8
                "left:661px; top:470px;",
                "left:1170px; top:433px;",
                // "left:508px; top:475px;",
                // "left:369px; top:569px;",
              ],
  "imagesAudio" : ["../audios/page_60/1_escalator.mp3","../audios/page_60/2_shoe_shop.mp3", "../audios/page_60/3_clothes_shop.mp3",
                   "../audios/page_60/4_toy_shop.mp3","../audios/page_60/5_small.mp3", "../audios/page_60/6_medium.mp3",
                   "../audios/page_60/7_price.mp3","../audios/page_60/8_large.mp3", "../audios/page_60/9_size.mp3",
                   "../audios/page_60/10_food_court.mp3"]
}