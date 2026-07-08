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
  "subTitleTextLeft"      : "<span class='red_text'>3</span> &nbsp;  Write the ‘<span class='red_text'>-old</span>’ words.",
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
        "text": "[_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/6-img-1.png",
        "answer": ["o","r","jump"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "g[_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/6-img-2.png",
        "answer": ["u","m","p","rose"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "s[_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/6-img-3.png",
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
          "The <span class='red_text'>CVC</span> rule says that when you <br>"+
          "add a suffix, look to see if there <br>"+
          "is a <span class='red_text'>CVC</span>. Double the last letter. <br>"+
          "1. S<span class='red_text'>hop</span> = <span class='red_text'>hop</span> = <span class='red_text'>CVC</span> <br>"+
          "2. Double the letter <span class='red_text'>pp</span> <br>"+
          "3. Add the suffix <span class='red_text'>ed</span>, <span class='red_text'>ing</span>, <span class='red_text'>er</span> shop = sho<span class='red_text'>pped</span>, sho<span class='red_text'>pping</span>, sho<span class='red_text'>pper</span>"+
          "</span>",
          // "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>",

          "<img src='../images/pages/page-3/Sen-3-img.png' class='text_img showImg2'>",
          "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg2'>",
        
        ],
  }