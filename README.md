# oop
面向对象封装的一些组件

## 轮播图组件
<a href="http://tclound.com/oop/%E5%B9%BB%E7%81%AF%E7%89%87%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91/show.html">预览</a>

这个3d轮播图组件是基于jquery开发的，
需要引入jquery，后引入文件的
参考
```javascript

<link rel="stylesheet" href="show.css">
//引入轮播图样式表
<script src="jquery-3.2.1/jquery-3.2.1.min.js"></script>
<script src="imageshow.js"></script>
<script>
$(function(){
  var arr=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg',];
  //将你需要展示的图片放到arr数组中，
  
  Carousel({
    container:'body',
    //图片放置的位置
    arrImages:arr,
    //图片信息  
  });
});
</script>

```

## 
