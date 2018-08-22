/* 
* @Author: Marte
* @Date:   2018-08-22 15:46:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-22 21:19:50
*/

 document.addEventListener('DOMContentLoaded', ()=>{
    let huan = document.querySelector('.huan')
    let fault = document.querySelector('.fault');
    let right = document.querySelector('.right');
    let login = document.querySelector('.lg');
    let name = document.querySelector('#username');
    let password = document.querySelector('#password');
    let code = document.querySelector('#code');
    let udcode = document.querySelector('#udcode');
    let showcode = document.querySelector('#Showcode');
    let auto = document.querySelector('#auto');
    let ts = document.querySelector('.ts');
    let codes = document.querySelector('.codes');
    let usernames = document.querySelector('.usernames');
    let passwords = document.querySelector('.passwords');
    let status = [200,304];
    let isok = false;
    createCode();
    huan.onclick = createCode;







    //登录操作
    login.onclick = ()=>{
        let xhr = new XMLHttpRequest();
        xhr.onload = () =>{
        if(status.indexOf(xhr.status) >= 0){
        if(xhr.responseText == 'yes'){
        location.href = "../index.html";

        }else if(xhr.responseText == 'no'){
        ts.innerText = '输入的用户名或密码错误';
        password.value = '';
        }
        }
        
        xhr.open('post','../api/login.php',true);

        //请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        xhr.send(`username=${_username}&password=${_password}`);
         if(_code != Showcode.innerHTML){
                codes.style.border='1px solid #ddd';
                codes.style.borderColor = "#f00"
                return false;
            }else{
                codes.style.borderColor = "#58bc58";
            }


    }
}

    //     //获取输入的值;
    //     var _username = username.value;
    //     var _password = password.value;
    //     var _code = code.value; 
    //     if(_username===''||_password===''){
    //             ts.innerHTML = '用户名密码不能为空'
    //             username.focus();
    //             password.focus();
    //             return false;   
    //         }
           
    // }



    //     //验证用户名密码是否已注册
    //     username.onblur = ()=>{
    //         let _username=username.value;
    //         if(!/^1[3-9]\d{9}$/.test(_username)){
    //                 ts.innerHTML = '请输入正确的手机号';
    //                 return false;
    //                 }
    //         let xhr = new XMLHttpRequest();
    //         xhr.onload = ()=>{
    //             if(status.indexOf(xhr.status) >= 0){
    //                 if(xhr.responseText === 'yes'){
    //                     isok = true;
    //                     //成功：添加has-success类
    //                     usernames.classList.remove('error');
    //                     usernames.classList.add('success');
    //                     ts.innerHTML = '';

    //                 }
    //                 else if(xhr.responseText === 'no'){
    //                         isok = false;
    //                         usernames.classList.remove('success');
    //                         usernames.classList.add('error');
    //                         ts.innerHTML = '用户名或密码不存在，请注册后再登录';

                            
    //                 }
    //             }
    //         }
    //         xhr.open('get','../api/login.php?username='+_username,true);
    //             xhr.send();
    //     }

    //     password.onblur = ()=>{
    //         let _password = password.value;
    //         let xhr = new XMLHttpRequest();
    //         xhr.onload = ()=>{
    //             if(status.indexOf(xhr.status) >= 0){
    //                 console.log(xhr.responseText);
    //                 if(xhr.responseText === 'yes'){
    //                     isok = true;
    //                     //成功：添加has-success类
    //                      passwords.classList.remove('error');
    //                      passwords.classList.add('success');
                        

    //                 }
    //                 else if(xhr.responseText === 'no'){
    //                         isok = false;
    //                         passwords.classList.remove('success');
    //                         passwords.classList.add('error');
    //                         // ts.innerHTML = '用户名或密码不存在，请注册后再登录';
    //                 }
    //             }
    //         }
    //         xhr.open('get','../api/login.php?password='+_password,true);
    //             xhr.send();
    //     }


    //验证验证吗输入对错
    code.onblur=()=>{
        let _code = code.value;
        let fault = document.querySelector('.fault');
        let right = document.querySelector('.right');
        let _Showcode = Showcode.innerText;
        if(_code!=_Showcode){
            fault.style.display = "block";
        }
        else{
            fault.style.display = "none";
            right.style.display = "block";
        }
    }
    //验证码更新
        huan.onclick=function(){
            createCode();
        }
        function createCode(){
        var res='';
        for(var i=0;i<4;i++){
             var num=parseInt(Math.random()*10);
             res+=num;
         }
        Showcode.innerHTML=res;
        }
});