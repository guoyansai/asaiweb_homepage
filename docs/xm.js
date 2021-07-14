var xmData=[
{tit:'华为PPS广告投放系统',des:'(外协)比肩GoogleAds的广告投放、创意设计系统、商品酒店关键词投放等',key:'js,css,html,angular,ts,nodejs,sass,i18n,webpack,vue,es6',oth:'2020-2021年*'},
{tit:'华为创意广告设计平台',des:'(外协)熟练运用vue/es6/axios/webpack等技术部署开发与发布环境，制作在线版图片、H5页面编辑器。',key:'js,css,html,vue,elementUI,axios,nodejs,sass, svg,canvas,i18n,webpack,es6',oth:'2020-2021年*'},
{tit:'华为主题设计工具',des:'(外协)基于electron/vue/nodejs架设开发环境，通过js/sass/svg/canvas/i18n等技术开发win/Mac全端全球适配的IDE。',key:'js,css,html,nodejs,vue,electron,sass, svg,canvas,i18n,webpack,es6',oth:'2019-2021年*'},
{tit:'车商记账统计服务',des:'车商记(合伙)：使用VUE框架、uni-app进行APP前端开发，同时制作官方网站及相关宣传页等',key:'js,css,html,uniapp,vue,es6,nodejs,less,canvas,mysql,jq',oth:'2017-2019年'},
{tit:'专用车电子商务平台',des:'机电牛(合伙)：平台的架构、数据库、WEB前端设计、程序开发、上线部署等，独立完成全部开发工作',key:'js,css,html,asp,mssql,bootstrap',oth:'2017年'},
{tit:'二手车检测服务平台',des:'车疯子、铁锤车检(合伙)：市场调研、需求分析、网站架构，并独立完成网站设计与开发',key:'js,css,html,php,mysql,asp,mssql,bootstrap,jq',oth:'2017年'},
{tit:'生物医药科技行业网站',des:'生易网(合伙)：需求分析、网站架构、前端页面设计、UX交互设计、设计开发、上线运营与维护等全部技术工作',key:'js,css,html,php,mysql,asp,mssql,vue',oth:'2017-2018年'},
{tit:'生产设备电子商务平台',des:'中国设备联盟(技术入股)：带领团队完成旗下十二个行业网站的前端改版升级、底层技术重构及平台维护与运营工作',key:'js,css,html,asp,mssql,vue,bootstrap,jq,管理,运维',oth:'2009-2017年'},
{tit:'地方门户',des:'新南京(创业)：通过市场分析定位门户网站方向，完成网站WEB前端与后台程序设计',key:'js,css,html,asp,mssql',oth:'2008-2009年'},
{tit:'个性服装在线定制',des:'绮思爱(合伙)：通过调研、出需求说明最终确认项目开发架构方案，独立制作完成所有模块',key:'js,css,html,asp,access,bootstrap,jq',oth:'2008-2009年'},
{tit:'汽车交易服务平台',des:'南京二手车网、新车网、租车网：负责旧站改版，并完成新车网、租车网及其他特需项目的前端设计、后端数据库与程序开发',key:'js,css,html,asp,mssql,管理',oth:'2008年'},
{tit:'电子元器件资讯网',des:'SMD资讯网，辞去教师工作来到南京后的第一个网站项目，含资讯、论坛、商品展示等。',key:'js,css,html,asp,mssql',oth:'2007年'},
{tit:'中学网站CMS系统',des:'完成在职学校官网、在职学科社区等一系列学校网络服务系统的开发。',key:'js,css,html,asp,access,mssql',oth:'2005-2007年'},
{tit:'精品课程网站',des:'植物生理学网络课程建设，根据大学导师需求，从事教学素材收集、flash动画制作，以及网络课程、社区论坛、在线考试等综合功能网站开发。',key:'js,css,html,ppt,flash,asp,access',oth:'2002-2005年'},
{tit:'自研作品',des:'自学提升作品：阿赛企业、门户、学校网站系统；资讯app、小程序；uniapp+php/mysql全端开发；vue+webpack开发的内容管理CMS；啾噗app等等',key:'js,css,html,angular,ts,nodejs,sass,i18n,webpack,vue,es6,AS,VS,VScode,DW,PS,VPN,GIT,SVN',oth:'2001-2021年*'},
];

var xmDom='<style>.g-ol ol i{font-style:normal;margin:0 2px;padding:0 2px;border-radius:6px;background-color:#FC0;}.g-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.g-ol ol{counter-reset: show-list;}.g-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.g-ol ol li:before{content: counter(item)")";display: block;position: absolute;left: 0;top:0;}</style><div class="g-ol"><ol>';
var xmDataLen=xmData.length;
var xmi=0;
var xmItem;
var xmKeys=[];
var xmKeysLen=0;
var xmKeyi=0;
while(xmi<xmDataLen){
xmItem=xmData[xmi];
xmKeys=xmItem.key.split(',');
xmKeysLen=xmKeys.length;
xmKeyi=0;
xmDom+='<li>【'+xmItem.tit+'】：'+xmItem.des+'——'+xmItem.oth+'';
while(xmKeyi<xmKeysLen){
xmDom+='<i>'+xmKeys[xmKeyi]+'</i>';
xmKeyi++;
}
xmDom+='</li>';
xmi++;
}
xmDom+='</ol></div>';

document.write(xmDom);