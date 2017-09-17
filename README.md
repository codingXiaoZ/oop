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

## 表格组件

<a href="http://tclound.com/oop/%E8%A1%A8%E6%A0%BC%E6%8F%92%E4%BB%B6/customer/musicList.html">预览</a>
这个组件能帮你轻松完成表格的增删改查，你只需要导入指定信息，提供删除，上传函数，就可以运行该组件
参考
```javascript
var animo = [
    {id:'001',name:'大象',type:'哺乳',weight:'1T'},
    {id:'002',name:'熊猫',type:'哺乳',weight:'200kg'},
    {id:'003',name:'老虎',type:'哺乳',weight:'400kg'}
  ];
window.onload = function(){

    function delAnimal(ID){
      for(var i=0;i<animo.length;i++){
        if(animo[i].id==ID){
          animo.splice(i,1);
        }

      }
    }
    //增加函数
    function addAnimal(animal){
      animo.push(animal);
    }
    //上传函数

    function updateAnimal(animal){
      for(var p in animo){
        if(animo[p].id==animal.id){
          for(var i in animal){
            animo[p][i]=animal[i];
          }
        }
      }
    }

    grid({
      title:'动物信息列表',
      data:animo,
      container:'con',
      key:'id',
      delfn:delAnimal,
      addfn:addAnimal,/*
      updatafn:updateAnimal,*/
      fields:[
        {name:'id',type:'text'},
        {name:'name',type:'text'},
        {
          name:'type',type:'select',
          option:[
            {name:'哺乳',text:'哺乳'},
            {name:'胎生',text:'胎生'},
            {name:'爬行',text:'爬行'}
          ]

        },
        {name:'weight',weight:'weight',type:'text'}
        ]
    });
  }
  
  
```
  
