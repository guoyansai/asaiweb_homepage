var qzData = [
  {
    tit: "姓名",
    des: "郭言赛",
  },
  {
    tit: "性别",
    des: "男",
  },
  {
    tit: "出生",
    des: "1984年7月",
  },
  {
    tit: "学校",
    des: "江苏师范大学",
  },
  {
    tit: "专业",
    des: "生物科学（应用生物技术）（师范）",
  },
  {
    tit: "学历",
    des: "本科",
  },
  {
    tit: "毕业",
    des: "2005年6月",
  },
  {
    tit: "求职",
    des: "技术总监 √　WEB/APP前端开发架构工程师 √　PHP/ASP网站开发 √",
  },
];

var qzDom =
  '<style>.qz-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.qz-ol ol{counter-reset: show-list;}.qz-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}</style><div class="qz-ol"><ol>';
var qzDataLen = qzData.length;
var qzi = 0;
var qzItem;
while (qzi < qzDataLen) {
  qzItem = qzData[qzi];
  if (qzItem.des) {
    qzDom += "<li>" + qzItem.tit + "：" + qzItem.des + "</li>";
  } else {
    qzDom += "<li><b>" + qzItem.tit + "</b></li>";
  }
  qzi++;
}
qzDom += "</ol></div>";

document.write(qzDom);
