
Echart 引入 Axure 库包
===================


 Echart 整理样例代码文件、目的方便引入**Axure**进行快速原型设计，并展现实际的动效

----------


####  <i class="icon-folder-open"></i>SVN链接

http://10.5.0.128/ZXVMAX/DOC/UX/原型/echart_lib
> **Category:**

> - css：样式文件目录
> - js：js文件目录
> - theme：主题文件目录
> - pic：图片目录
> - vendors：第三方插件目录，包含**echarts.min.js** ，**map**主要省市地图js文件
> - html：具体的html文件，可供axure直接引用


#### <i class="icon-file"></i> Procedure

   1、在axure中新建页面，添加一个**iframe**，将**Properties**属性中的**Frame Scrollbars**设置为**Never show**，并勾选**Hide border**选项

![image](/pic/axure/20160901160911.jpg)

 2、双击iFrame设置链接路径url，选择**Link to an external url or file**,填写**Hyperlink**,填写具体的引用html页面url即可

![image](/pic/axure/20160901160922.jpg)

3、设置预览页面，用于在原型生成前查看具体样式，在**Properties**中选择**custom**，import相应图片即可

![image](/pic/axure/20160901160923.jpg)

4、设置**Icon**，用于库文件做明显区分，在**Widget Properties**中设置 **Custom icon**，可选**28*28**,**56*56**两种尺寸

![image](/pic/axure/20160901160945.jpg)

5、保存**lib**后在原型中引入相应的lib后即可拖拽使用，可以自动调节iframe框架大小，生成预览后实际效果会自动适应相应iframe大小

![image](/pic/axure/20160901160955.jpg)


----------




