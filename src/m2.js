 let a=10

 let obj={
  name:'历程',
  age:15,
  sex:'女'
}

 let fn=function(){
  console.log('init操作')
}

 let arr=[23,'sdfj',fn,{name:'刘庆',age:24}]

 let test='我这个怎么出bug了'


 //使用同时暴露
 export {
  a,obj,fn,arr,test
 }