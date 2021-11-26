var jjData = [
  {
    tit: "十多年一线开发经验，从全栈拓展学习到前端专项钻研，专注技术突破与团队提升。",
    des: "",
  },
  {
    tit: "2002年读大学时开始从事网站开发",
    des: "完成学院精品课程网站开发。",
  },
  {
    tit: "2005年毕业后职业中学教师",
    des: "完成学校官网建设，负责机房管理。",
  },
  {
    tit: "2007年来南京专职互联网工作",
    des: "前后端均涉猎，带过团队，完成二十多个大型网站项目(基于ASP/PHP/MYSQL/MSSQL)，独立架构开发的开源项目有阿赛企业网站系统、阿赛门户网站系统、阿赛树型论坛系统、阿赛聊天室系统等，各大源码下载网均有收录。",
  },
  {
    tit: "2016年始专注前端技术研发",
    des: "喜欢学习与时俱进！精通前端HTML5/CSS3/JS/VUE/Angular/node.js/webpack等，精通electron桌面软件开发/uni-app手机全端开发等。多年一线的开发角色，从事过十多个项目的从零到上线的前端架构开发工作，熟悉各种框架的架构配置与开发，致力于新技术及疑难点的研究与攻克，拥有丰富的开发与架构实战经验。",
  },
  {
    tit: "近期将继续提升对前端新技术的应用实战",
    des: "扩大相关技术能力涉猎，与前端团队一起实现能力突破提升，更好服务项目。",
  },
];

var jjDom =
  '<style>.jj-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.jj-ol ol{counter-reset: show-list;}.jj-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.jj-ol ol li:before{content: ""counter(item)">";display: block;position: absolute;left: 0;top:0;}</style><div class="jj-ol"><ol>';
var jjDataLen = jjData.length;
var jji = 0;
var jjItem;
while (jji < jjDataLen) {
  jjItem = jjData[jji];
  if (jjItem.des) {
    jjDom += "<li>" + jjItem.tit + "：" + jjItem.des + "</li>";
  } else {
    jjDom += "<li><b>" + jjItem.tit + "</b></li>";
  }
  jji++;
}
jjDom += "</ol></div>";

document.write(jjDom);
