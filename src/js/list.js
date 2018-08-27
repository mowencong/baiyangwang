/* 
* @Author: Mowencong
* @Date:   2018-08-23 09:47:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 11:54:04
*/

document.addEventListener('DOMContentLoaded', ()=>{
    let mainlist = document.querySelector('#main-list');
    console.log(mainlist);
    let datalist = document.querySelector('.datalist');
    let page = document.querySelector('.page');
    let price = document.querySelector('.price1');
    let price1 = document.querySelector('.price2');
    let _qty = 24;
    let _pageNo = 1;
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let res = JSON.parse(xhr.responseText);
        console.log(res);
        let data = res.data;

        


















        //先清空之前的内容
        // mainlist.innerHTML = '';
        page.innerHTML = '';
        datalist.innerHTML = res.data.map(item=>{

                return ` <li class="sp" data-id="${item.id}">
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


























        price.onclick=()=>{
         function sortprice(a,b){
                return b.newprice - a.newprice
            }
            data.sort(sortprice);
            datalist.innerHTML = res.data.map(item=>{

                return ` <li class="sp" data-id="${item.id}">
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

    // },error:function(){
    //     alert("系统繁忙，请稍后重试")
    }

        price1.onclick=()=>{
            function sortprice(a,b){
                return a.newprice - b.newprice
            }
            data.sort(sortprice);
            datalist.innerHTML = res.data.map(item=>{

                return ` <li class="sp" data-id="${item.id}">
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

        }

        //创建分页
        //计算分页数量
        let pageLen = Math.ceil(res.total/res.qty);
        let lt = document.createElement('span');
        lt.className = 'prev';
        lt.innerText = '上一页';
        let next = document.createElement('span');
        next.innerText = '下一页';
        next.className = 'next';
        page.appendChild(lt);



        for(var i=0;i<pageLen;i++){
            var span = document.createElement('span');
            span.innerText = i+1;

            //高亮当前分页
            if(i===res.pageNo-1){
                span.className = 'active';
            }
            page.appendChild(span);
            
        }
        page.appendChild(next);
    }
        xhr.open('get','../api/list.php?qty='+_qty+'&pageNo='+_pageNo);
        xhr.send();
    

     //利用事件委托实现分页切换
        mainlist.onclick = function(e){
            if(e.target.parentNode.className==='page'){
                //得到点击的分页
                _pageNo = e.target.innerText;

                xhr.open('get','../api/list.php?qty='+_qty+'&pageNo='+_pageNo);
                xhr.send();
            }
        }
        let prev = document.getElementsByClassName('.prev');
        let next = document.getElementsByClassName('.next');
        console.log(prev);
        console.log(next);
        prev.onclick=function(){
                 _pageNo--;
           
            xhr.open('get','../api/list.php?qty='+_qty+'&pageNo='+_pageNo);
                xhr.send();

        }
        next.onclick=function(){
                 _pageNo++;
           
            xhr.open('get','../api/list.php?qty='+_qty+'&pageNo='+_pageNo);
                xhr.send();

        }


        // var goods = document.getElementsByClassName('datalist')[0];
        // var goodslist = Cookie.get('goodslist');
        // if(goodslist === ''){
        //     goodslist = [];
        // }else{
        //     goodslist = JSON.parse(goodslist);
        // }
        // goods.onclick = function(e){
        //     e = e || window.event;
        //     var target = e.target || e.srcElement;
        //     if(target.parentNode.className==='cart'){
        //         var currentLi = target.parentNode.parentNode;
        //         var guid = currentLi.getAttribute('data-guid');
        //         var currentGoods = goodslist.filter(function(g){
        //             return g.guid === guid;
        //         });
        //         if(currentGoods.length>0){
        //             currentGoods[0].qty++;
        //         }else{
        //             var goods = {
        //                 guid:guid,
        //                 imgurl:currentLi.children[0].children[0].children[0].src,
        //                 name:currentLi.children[1].children[1].children[0].innerText,
        //                 price:currentLi.children[2].children[2].children[0].innerText,
        //                 qty:1
        //             }
        //             goodslist.push(goods);
        //         }
        //         Cookie.set('goodslist',JSON.stringify(goodslist));
        //     }
        // }
        
         $('.car').on('click',function(){
                        if($('.cart_list').css('display','none')){
                            $('.cart_list').css('display','block');
                        }else if($('.cart_list').css('display','block')){
                            $('.cart_list').css('display','no');
                        }
                    })
                    $('.gb').on('click',function(){
                        // if($('.cart_list').css.display = 'block'){
                            $('.cart_list').css('display','none');
                        // }
                    })
        
});


















