/* 
* @Author: mowencong
* @Date:   2018-08-17 20:28:46
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-22 15:34:12
*/
// document.addEventListener('DOMContentLoaded',()=>{
            //let status = [200,304];
            /*let xhr = new XMLHttpRequest();
            // onload加载完成
            xhr.onload = function(){
                if(status.indexOf(xhr.status)>=0){
                    let data = JSON.parse(xhr.responseText);
                let urls = data.slice(0,4);
                let main-list = document.getelmentbyclassname('.main-list')[0];
                main-list.innerHTML = urls.map(item=>{
                    return `
                        <li>
                            <a href="#"><img src = "${item.src}"/></a>
                        </li>
                    `
                }).join('');
            }
        }
                
            xhr.open('get','../api/data/football.json');
            xhr.send();
            }
            */
                jQuery($=>{
                    $.ajax({
                        url:'./api/index.php',
                        dataType:'json',
                        success:function(data){
                            let urls = data.slice(0,4);
                            let urls1 = data.slice(4,9);
                            let urls2 = data.slice(9,14);
                            let urls3 = data.slice(14,19);
                            let urls4 = data.slice(19,24);
                            let urls5 = data.slice(24,29);
                            let urls6 = data.slice(29,34);
                            let urls7 = data.slice(34,39);
                            let urls8 = data.slice(39,52);
                        $('.main-list')[0].innerHTML = urls.map(item=>{
                            return `<li>
                            <a href="#"><img src="${item.url}"/></a>
                            </li>
                            `
                        }).join('');

                        $('.main-list1')[0].innerHTML = urls1.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            <p><a href="#">${item.decoration}</a></p>
                            <p class="price">${item.price}</p>
                            <div class="buy">立即购买</div>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list2')[0].innerHTML = urls1.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            <p><a href="#">${item.decoration}</a></p>
                            <p class="price">${item.price}</p>
                            <div class="buy">立即购买</div>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list3')[0].innerHTML = urls1.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            <p><a href="#">${item.decoration}</a></p>
                            <p class="price">${item.price}</p>
                            <div class="buy">立即购买</div>
                            </li>
                            
                            `
                        }).join('');

                        $('.main3-list-list')[0].innerHTML = urls2.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list4')[0].innerHTML = urls3.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list5')[0].innerHTML = urls4.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list6')[0].innerHTML = urls5.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list7')[0].innerHTML = urls6.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            </li>
                            
                            `
                        }).join('');

                        $('.main-list8')[0].innerHTML = urls7.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            </li>
                            
                            `
                        }).join('');
                         $('.main-list9')[0].innerHTML = urls8.map(item=>{
                            return `<li>
                            <a href="#"><img src = "${item.url}"/></a>
                            <p><a href="#">${item.decoration}</a></p>
                            <p class="price">${item.price}</p>
                            </li>
                            
                            `
                        }).join('');
                        }
                    })

                })


            document.addEventListener('DOMContentLoaded',()=>{
                
                let toTop = document.querySelector('.back');
                // 点击返回顶部
            toTop.onclick = ()=>{
                let timer = setInterval(()=>{
                    // 计算缓冲速度
                    let speed = Math.ceil(window.scrollY/5);//1

                    scrollBy(0,-speed);


                    if(window.scrollY <= 0){
                        clearInterval(timer);
                    }
                },30)
            }

            
            let banner = document.getElementsByClassName('item')[0];
            let ul = banner.children[0];
            let li = banner.children[0];

            // 初始化
            let index = 0;

            // 无缝滚动关键1：把第一张复制到最后
            // ul.appendChild(ul.children[0].cloneNode(true));

            let len = ul.children.length;

            // 设置ul宽度，实现水平排列效果
            ul.style.width = banner.clientWidth * len + 'px';

            let timer = setInterval(autoPlay,3000);


            // 鼠标移入移除
            banner.onmouseover = ()=>{
                clearInterval(timer);
            }

            banner.onmouseout = ()=>{
                timer = setInterval(autoPlay,3000);

            }

            banner.onclick = e=>{

                // 上一张，下一张
                if(e.target.className === 'left'){
                    index--;
                    show();
                }else if(e.target.className === 'right'){
                    index++;
                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index>=len){
                    // 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
                    ul.style.left = 0;
                    index = 1;
                }else if(index<0){
                    index = len-2;
                }

                animate(ul,{left:-index*li.clientWidth});

            }
        });
        
// }

// });







 // let side = document.querySelector('.pos');
 //    let details = document.querySelector('.details');
 //    // 获取所有a标签
 //    var links = side.getElementsByTagName('a');
 //    console.log(links);
 //    for(var i=0;i<links.length;i++){
 //        links[i].onmouseover = function(){
 //            details.innerText = this.title;
 //            console.log(details.innerText)
 //            details.style.display = 'block';
 //            // 备份title内容
 //            this.bak = this.title;

 //            // 去除title属性，避免默认效果
 //            this.removeAttribute('title')
 //        }
 //        links[i].onmouseout = function(){
 //            details.style.display = 'none';
 //            // 恢复title属性
 //            this.title = this.bak;
 //        }
 //        //跟随光标效果
 //        //mousemove
 //        links[i].onmouseover = function(e){
 //            e = e || window.event;
 //            //跟随：改变details的top,left
 //            details.style.left = e.clientX - 35 + 'px';
 //            details.style.top = e.clientY + 35 + 'px';
 //        }
 //    }

 //    $(function(){
 //        $.post('../api/index.php',{})
 //    })
