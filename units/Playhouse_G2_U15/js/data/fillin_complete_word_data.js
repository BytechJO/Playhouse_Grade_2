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
  "numinrow"              : [[1,1,1,1]],
  "mainTitle"             : "../images/icons/phonics_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='red_text'>3</span> &nbsp;  Write the ‘<span class='red_text'>-ck</span>’ to complete the words. Then write the words.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
  "subTitleAudio"         : "../audios/under.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options": [],
  "optionsAudios":[],
  "questions":
    [
      {
        "singleword": false,
        "text": "du[_][_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/7-img-1.png",
        "answer": ["o","r","jump"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "si[_][_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/7-img-2.png",
        "answer": ["u","m","p","rose"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "so[_][_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/7-img-3.png",
        "answer": ["u","m","p","rope"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "o'clo[_][_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/7-img-4.png",
        "answer": ["u","m","p","rope"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
    ],
    "main_title_text":["S","e","n","t","e","n","c","e","&nbsp;","B","u","i","l","d","i","n","g"],
    "items":
        [
          "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg1'>",
          "<img src='../images/pages/page-3/Sen-2-img.png' class='text_img showImg1'>",
         
          "<span class='text'>"+
          "<span class='red_text'>Information</span> questions <br>"+
          "and <span class='red_text'>Yes</span> / <span class='red_text'>No</span> questions<br>"+
          "What's the time? <br>"+
          "(Information question) <br>"+
          "Do you go to bed at eight o'clock? <br>"+
          "(<span class='red_text'>Yes</span> / <span class='red_text'>No</span> question)"+
          "</span>",
          // "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>",

          "<img src='../images/pages/page-3/Sen-3-img.png' class='text_img showImg2'>",
          "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg2'>",
        
        ],
  }