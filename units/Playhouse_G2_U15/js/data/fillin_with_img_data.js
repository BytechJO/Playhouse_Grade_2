var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(210, 35, 42)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1,1,1]],
    "mainTitle"             : "../images/icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "-18px"},
    "subTitleTextLeft"      : "<span class='red_text'>2</span> What are they saying?",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 : "",
    "questions": [{
            "textfront": "Meet me at",
            "textend": "tomorrow.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-1.png",
            "answer": ["lamp"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "Meet me at",
            "textend": "tomorrow.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-2.png",
            "answer": ["table"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "Meet me at",
            "textend": "tomorrow.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-3.png",
            "answer": ["bed"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}