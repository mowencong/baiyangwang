/* 
* @Author: Marte
* @Date:   2018-08-24 21:01:26
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 03:00:20
*/

jQuery($=>{
   
    $('.price1').on('click',function(){
     $.ajax({
        url:'../api/list.php',
        dataType:'json',
        success:function(resp){
             var data = resp;
            function sortprice(a,b){
                return b.newprice - a.newprice
            }
            data.sort(sortprice);
            $('.datalist')[0].innerHTML = data.map(item=>{
                return `<li data-id="${item.id}">
                <div class="pci"><a href='datalist.html?goodsId=${item.id}'title="${item.decoration}"class="milld"><img src="${item.imgurl}"/ ></a></div>
                <div class="dh" >
                <ul><li><a href="javascript:void(0)"><img src="${item.min}" class="min"/></a></li></ul>
                <p class="decoration"><a href="#">${item.decoration}</a></p>
                <p class="price"><span class="newprice">￥${item.newprice}</span>
                <del class="delprice">￥${item.delprice}</del></p>
                <p class="compare"><span class="goods-compare select" data-param="${item.id}"><input type="checkbox"/>加入对比</span></p>
                <ul class="xp" style="height:55px;width:220px;">
                <li class="xl"><a href="#" class="jt"style="width:50px;border:none;">0</a><p>商品销量</p></li>
                <li class="pl"><a href="#" calss="status" style="width:50px;border:none;">0</a><p>用户评论</p></li></ul>
                <p class="shop">百洋健康跨境自营店</p>
                <p class="cart"><a href="javascript:void(0)"><i class="glyphicon glyphicon-shopping-cart"></i>加入购物车</a></p>
                </div>

                </li>
                     `
            }).join('');
        },error:function(){
            alert("系统繁忙 请稍后重试")
        }
    });
})
$('.price2').on('click',function(){
    $.ajax({
        url:'../api/list.php',//获取数据库数据
        dataType:'json',
        success:function(resp){
            // console.log(resp);
            var data = resp;
            function sortprice(a,b){
                return a.newprice - b.newprice
            }
            data.sort(sortprice);
            // console.log(data);//排序后的数据
             $('.datalist')[0].innerHTML = data.map(item=>{
                return `<li data-id="${item.id}">
                <div class="pci"><a href='datalist.html?goodsId=${item.id}'title="${item.decoration}"class="milld"><img src="${item.imgurl}"/ ></a></div>
                <div class="dh" >
                <ul><li><a href="javascript:void(0)"><img src="${item.min}" class="min"/></a></li></ul>
                <p class="decoration"><a href="#">${item.decoration}</a></p>
                <p class="price"><span class="newprice">￥${item.newprice}</span>
                <del class="delprice">￥${item.delprice}</del></p>
                <p class="compare"><span class="goods-compare select" data-param="${item.id}"><input type="checkbox"/>加入对比</span></p>
                <ul class="xp" style="height:55px;width:220px;">
                <li class="xl"><a href="#" class="jt"style="width:50px;border:none;">0</a><p>商品销量</p></li>
                <li class="pl"><a href="#" calss="status" style="width:50px;border:none;">0</a><p>用户评论</p></li></ul>
                <p class="shop">百洋健康跨境自营店</p>
                <p class="cart"><a href="javascript:void(0)"><i class="glyphicon glyphicon-shopping-cart"></i>加入购物车</a></p>
                </div>

                </li>
                     `
            }).join('');
        },
        error:function(resp){
            alert("系统繁忙 请稍后重试")
        }
    });
})
})




















// })