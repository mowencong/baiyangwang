 jQuery(function($){
            
            var Car = {
                goodslist:[],
                totalPrice:0,
                ele:'.cart_list ul',


                init(){
                    this.ele = $(this.ele);

                    // 删除单个商品
                    this.ele.on('click','.btn-close',(e)=>{
                        // 获取当前li
                        let $currentLi = $(e.target).closest('li');
                        let idx = $currentLi.index();

                        this.remove(idx);
                    });
                },

                // 添加商品
                add(idx){
                    let $currentLi = $('.goodslist li').eq(idx);
                    let $currentImg =  $currentLi.children('a').find('img');
                    
                     // 获取商品名称
                    let name =  $currentLi.children('p').eq(0).text();
                    let price =  $currentLi.children('p').eq(1).text();

                    // 获取图片路径
                    let imgurl = $currentImg.attr('src');
                     // 获取商品价格
                    

                    this.currentImg = $currentImg;
                
                    this.goodslist.push({
                        name:name,
                        price:price,
                        imgurl:imgurl,
                        qty:1

                    });
                    // 动画完成后渲染
                    this.animate(imgurl,()=>{
                        this.render();
                    })

                    

                },
                remove(idx){
                    this.goodslist.splice(idx,1);

                     this.render();
                },

                // 清空
                clear(){
                    this.goodslist = [];

                    this.render();
                },

                // 渲染数据到页面
                render(){
                    // 生成html结构
                    let content = this.goodslist.map((item,idx)=>{
                        return `<li>
                                <img src="${item.imgurl}" />
                                <h4>${item.name}</h4>
                                <p class="cartprice">${item.price}</p>
                                <span class="btn-close">&times;</span>
                        </li>
                        <div class="money">
                        <span class="allmy">共计金额${item.price}</span>

                        </div>

                        `
                    }).join('');

                    // 写入页面
                    this.ele.html(content);
                    this.ele.append($("<div/>").addClass('money'));
                    $('.money').append($('<span/>').addClass('allmy').html('共计金额:'));
                    $('.money').append($('<span/>').addClass('my'));
                    this.ele.append($("<div/>").addClass('addcart').html('结算购物车中的商品'));
                },

                // 动画
                animate(imgurl,callback){
                    // 创建以imgurl为地址的图片
                    let $copyImg = $('<img/>').attr({src:imgurl});

                    // 设置图片样式
                    $copyImg.css({
                        position:'absolute',
                        left:this.currentImg.offset().left,
                        top:this.currentImg.offset().top,
                        width:this.currentImg.width()
                    });

                    $copyImg.animate({
                        left:this.ele.offset().left,
                        top:this.ele.offset().top+this.ele.outerHeight(),
                        width:10
                    },function(){
                        callback();

                        // 移除复制的图片
                        $copyImg.remove();
                    });

                    // $('body').append($copyImg);
                    $copyImg.appendTo('body');
                }
            }

            Car.init();
            

             // 绑定事件
             // 实现添加到购物车的效果
             $('.goodslist').on('click','div',function(){
                // 获取当前li
                let $currentLi = $(this).closest('li');

                // 获取商品名称
                // let name = $currentLi.children('p').eq(1).text();
                // 获取图片路径
                // let imgurl = $currentLi.children('img').attr('src');

                Car.add($currentLi.index());
             });
            
            
        });