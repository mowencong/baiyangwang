/* 
* @Author: Marte
* @Date:   2018-08-23 20:11:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 17:30:43
*/

$(function(){
       //获取url中的参数
       function getUrlParam(name) {
           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
           var r = window.location.search.substr(1).match(reg);  //匹配目标参数
           if (r != null) return unescape(r[2]); return null; //返回参数值

       }

       var id = getUrlParam('goodsId');
       

       $.ajax({
        type:'get',
        url:'../api/datalist.php',
        dataType:'json',
        success:function(res,status){
            // console.log(res)
            $.each(res, function(idx,val) {
                //根据id获取详情数据
                if(id == val.id){
                  var $plus = $('.addnum'),
                  $reduce = $('.jnum'),
                  $all_sum = $('.shopprice');
                  $plus.click(function () {
                  var $inputVal = $(this).prev('input'),
                  $count = parseInt($inputVal.val())+1,
                  $obj = $(this).parents('.datar33').find('.jnum'),
                  $priceTotalObj = $(this).parents('.datar33').parents('.datar3').prev('.datar2').children('p').find('.shopprice');
                  $priceTotal = $count*val.newprice.substring(1);
                  // $priceTotal = $count*parseInt($price.substring(1));
                $inputVal.val($count);
                $priceTotalObj.html('￥'+$priceTotal+'.00');
                if($inputVal.val()>1 && $obj.hasClass('reSty')){
                $obj.removeClass('reSty');
        }
    });

    $reduce.click(function () {
        var $inputVal = $(this).prev('.addnum').prev('input');
            $count = parseInt($inputVal.val())-1,
            $priceTotalObj = $(this).parents('.datar33').parents('.datar3').prev('.datar2').children('p').find('.shopprice');
            $priceTotal = $count*val.newprice.substring(1);
            console.log($priceTotal)
            if($inputVal.val()>1){
            $inputVal.val($count);
            $priceTotalObj.html('￥'+$priceTotal+'.00');
        }
        if($inputVal.val()==1 && !$(this).hasClass('reSty')){
            $(this).addClass('reSty');
        }
    });

                  // var id = val.id;
                  $('.tl')[0].innerHTML = val.decoration;
                  $('.big').attr('src',val.imgurl);
                  $('.big').attr('data-big',val.imgurl);
                  $('.min').attr('src',val.min);
                  $('.pp')[0].innerHTML = val.pingpai;
                  $('.bt')[0].innerHTML = val.decoration;
                  $('.marketprice')[0].innerHTML ="￥"+val.delprice;
                  $('.shopprice')[0].innerHTML ="￥"+val.newprice;
                  $('.have')[0].innerHTML = val.status;
                  $('.yf')[0].innerHTML = val.yf;
                  $('.ms')[0].innerHTML = val.sf;
                  $('.hh')[0].innerHTML = "商家货号："+val.hh;
                  $('.pp1')[0].innerHTML = "品牌:"+val.pingpai;
                  $('.buy').children('a').attr('href','car.html?id='+val.id);



                  var goods = $('.datar3');
                  var goodslist = Cookie.get('goodslist');
                  if(goodslist===''){
                      goodslist = []
                  }else{
                      goodslist = JSON.parse(goodslist);
                  }
              goods.on('click',function(e){
                  e = e || window.event;
                  var target = e.target || e.srcElement;
                  if(target.parentNode.className === 'addcar'){
                      // var currentLi = $('.sp');
                      var guid =val.id
                      var currentGoods = goodslist.filter(function(g){
                          return g.guid === guid;
                      });
                      if(currentGoods.length>0){
                          currentGoods[0].qty++;
                      }else{
                var goods= {
                    guid:guid,
                    imgurl:val.imgurl,
                    name:val.decoration,
                    price:val.newprice,
                    gg:val.gg,
                    qty:1
                }
                goodslist.push(goods);
            }
            Cookie.set('goodslist',JSON.stringify(goodslist));
        }
    })
    //    var goods = $('.datar3');
    //               var goodslist = Cookie.get('goodslist');
    //               if(goodslist===''){
    //                   goodslist = []
    //               }else{
    //                   goodslist = JSON.parse(goodslist);
    //               }
    //           goods.on('click',function(e){
    //               e = e || window.event;
    //               var target = e.target || e.srcElement;
    //               if(target.parentNode.className === 'addcar'){
    //                   // var currentLi = $('.sp');
    //                   var guid =val.id
    //                   var currentGoods = goodslist.filter(function(g){
    //                       return g.guid === guid;
    //                   });
    //                   if(currentGoods.length>0){
    //                       currentGoods[0].qty++;
    //                   }else{
    //             var goods= {
    //                 guid:guid,
    //                 imgurl:`../${val.url}`,
    //                 name:val.decoration,
    //                 price:val.price,
    //                 gg:val.gg,
    //                 qty:1
    //             }
    //             goodslist.push(goods);
    //         }
    //         Cookie.set('goodslist',JSON.stringify(goodslist));
    //     }
    // })























                  
    }
                 
   })
  }
  });
})
$(function(){
       //获取url中的参数
       function getUrlParam(name) {
           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
           var r = window.location.search.substr(1).match(reg);  //匹配目标参数
           if (r != null) return unescape(r[2]); return null; //返回参数值

       }

       var id = getUrlParam('imgurlId');
       // console.log('id:'+id);

       $.ajax({
        type:'get',
        url:'../api/index.php',
        dataType:'json',
        success:function(res,status){
            // console.log(res)
            $.each(res, function(idx,val) {
                //根据id获取详情数据
                if(id == val.id){
                  var $plus = $('.addnum'),
              $reduce = $('.jnum'),
              $all_sum = $('.shopprice');
              $plus.click(function () {
             var $inputVal = $(this).prev('input'),
              $count = parseInt($inputVal.val())+1,
              $obj = $(this).parents('.datar33').find('.jnum'),
              $priceTotalObj = $(this).parents('.datar33').parents('.datar3').prev('.datar2').children('p').find('.shopprice');
              $priceTotal = $count*val.price.substring(1);
            // $priceTotal = $count*parseInt($price.substring(1));
            $inputVal.val($count);
            $priceTotalObj.html('￥'+$priceTotal+'.00');
            if($inputVal.val()>1 && $obj.hasClass('reSty')){
            $obj.removeClass('reSty');
        }
    });

    $reduce.click(function () {
        var $inputVal = $(this).prev('.addnum').prev('input');
            $count = parseInt($inputVal.val())-1,
            $priceTotalObj = $(this).parents('.datar33').parents('.datar3').prev('.datar2').children('p').find('.shopprice');
            $priceTotal = $count*val.price.substring(1);
            console.log($priceTotal)
            if($inputVal.val()>1){
            $inputVal.val($count);
            $priceTotalObj.html('￥'+$priceTotal+'.00');
        }
        if($inputVal.val()==1 && !$(this).hasClass('reSty')){
            $(this).addClass('reSty');
        }
    });

                  $('.tl')[0].innerHTML = val.decoration;
                  $('.big').attr('src',`../${val.url}`);
                  $('.big').attr('data-big',`../${val.url}`);
                  $('.min').attr('src',`../${val.min}`);
                  $('.min').css('width','60px');
                  $('.min').css('height','60px');
                  $('.pp')[0].innerHTML = val.pp;
                  $('.bt')[0].innerHTML = val.decoration;
                  $('.marketprice')[0].innerHTML =val.marketprice;
                  $('.shopprice')[0].innerHTML =val.price;
                  $('.have')[0].innerHTML = val.status;
                  $('.hh')[0].innerHTML = "商家货号："+val.hh;
                  $('.pp1')[0].innerHTML = "品牌:"+val.pp;
                  $('.buy').children('a').attr('href','car.html?id='+val.id);



    //               var goods = $('.datar3');
    //               var goodslist = Cookie.get('goodslist');
    //               if(goodslist===''){
    //                   goodslist = []
    //               }else{
    //                   goodslist = JSON.parse(goodslist);
    //               }
    //           goods.on('click',function(e){
    //               e = e || window.event;
    //               var target = e.target || e.srcElement;
    //               if(target.parentNode.className === 'addcar'){
    //                   // var currentLi = $('.sp');
    //                   var guid =val.id
    //                   var currentGoods = goodslist.filter(function(g){
    //                       return g.guid === guid;
    //                   });
    //                   if(currentGoods.length>0){
    //                       currentGoods[0].qty++;
    //                   }else{
    //             var goods= {
    //                 guid:guid,
    //                 imgurl:`../${val.imgurl}`,
    //                 name:val.decoration,
    //                 price:val.newprice,
    //                 gg:val.gg,
    //                 qty:1
    //             }
    //             goodslist.push(goods);
    //         }
    //         Cookie.set('goodslist',JSON.stringify(goodslist));
    //     }
    // })
                  
    }
                 
   })
  }
  });
})
// $(function(){
  
// })

