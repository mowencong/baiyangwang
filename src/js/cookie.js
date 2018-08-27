/* 
* @Author: Marte
* @Date:   2018-08-26 15:40:14
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 09:02:19
*/

// jQuery(function($){
//     var goods = $('.datalist');
//     var goodslist = Cookie.get('goodslist');
//     if(goodslist===''){
//         goodslist = []
//     }else{
//         goodslist = JSON.parse(goodslist);
//     }
//     goods.on('click',function(e){
//         e = e || window.event;
//         var target = e.target || e.srcElement;
//         if(target.parentNode.className === 'cart'){
//             var currentLi = $('.sp');
//             var guid = currentLi.attr('data-id');
//             var currentGoods = goodslist.filter(function(g){
//                 return g.guid === guid;
//             });
//             if(currentGoods.length>0){
//                 currentGoods[0].qty++;
//             }else{
//                 var goods= {
//                     guid:guid,
//                     imgurl:currentLi.children('div').children('img').src,
//                     name:$('.decoration').find('a').innerText,
//                     price:$('.newprice').innerText,
//                     qty:1
//                 }
//                 goodslist.push(goods);
//             }
//             Cookie.set('goodslist',JSON.stringify(goodslist));
//         }
//     })
// }) 