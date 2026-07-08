var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/page_22/pizza.mp3","../audios/page_22/dough.mp3","../audios/page_22/sauce.mp3","../audios/page_22/sprinkle.mp3","../audios/page_22/cheese.mp3","../audios/page_22/add.mp3","../audios/page_22/pepperoni.mp3","../audios/page_22/slice.mp3"],
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
        "mainTitle_audio": "../audios/page_22/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>1</span> Listen and say.", "<span class='red_text'>2</span> Listen and point.", "<span class='red_text'>3</span> Read."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png", "../images/pages/sb-icons/conv_1_icon.png", "../images/pages/page-1/q-1-icon-3.png"],
        "titlesAudio" : ["../audios/page_22/1_Listen_and_say.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 box","2  jar of mayonnaise", "3 sugar","4  carton of eggs","5 bottle of ketchup", "6 can","7 flour","8 bag of pasta", "9 bag","10 kilo (kg)", "11 packet of biscuits","12 bar of chocolate"],
        "audio": ["../audios/page_22/1_box.mp3","../audios/page_22/2_jar_of_mayonnaise.mp3", "../audios/page_22/3_sugar.mp3",
                  "../audios/page_22/4_carton_of_eggs.mp3","../audios/page_22/5_bottle_of_ketchup.mp3", "../audios/page_22/6_can.mp3",
                  "../audios/page_22/7_flour.mp3","../audios/page_22/8_bag_of_pasta.mp3", "../audios/page_22/9_bag.mp3",
                  "../audios/page_22/10_kilo_(kg).mp3","../audios/page_22/11_packet_of_biscuits.mp3", "../audios/page_22/12_bar_of_chocolate.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/icons/word-power.png",
        "mainTitle_audio": "../audios/page_22/WORD_POWER.mp3",
        "titleTexts" : ["<span class='red_text'>4</span> You do it."],
        "titleIcons" : ["../images/pages/sb-icons/conv_1_icon.png"],
        "titleTextRight": "<span class='red_text'> Ask and answer.</span>",
        "titlesAudio" : ["../audios/page_22/Pg4_1.2_Adult_Lady.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/page_22/Pg5_2.2_Adult Lady.mp3","../audios/page_22/Pg5_2.3_Adult Lady.mp3"]},
},
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words": ["box","jar of mayonnaise", "sugar"," carton of eggs","bottle of ketchup", "can","flour","bag of pasta", "bag","kilo (kg)", "packet of biscuits","bar of chocolate"],
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
 "postions"  : ["left: 110px;top: 700px;",
                "left: 310px;top: 100px;",
                "left: 690px;top: 90px;",
                "left: 890px;top: 85px;",
                "left: 280px;top: 210px;",
                "left: 100px;top: 230px;",
                "left: 680px;top: 220px;",
                "left: 1090px;top: 220px;",
                "left: 600px;top: 380px;",
                "left: 540px;top: 460px;",
                // "left:508px; top:475px;",
                // "left:369px; top:569px;",
              ],
  "imagesAudio" :["../audios/page_22/1_box.mp3","../audios/page_22/2_jar_of_mayonnaise.mp3", "../audios/page_22/3_sugar.mp3",
                  "../audios/page_22/4_carton_of_eggs.mp3","../audios/page_22/5_bottle_of_ketchup.mp3", "../audios/page_22/6_can.mp3",
                  "../audios/page_22/7_flour.mp3","../audios/page_22/8_bag_of_pasta.mp3", "../audios/page_22/9_bag.mp3",
                  "../audios/page_22/10_kilo_(kg).mp3","../audios/page_22/11_packet_of_biscuits.mp3", "../audios/page_22/12_bar_of_chocolate.mp3"]
}