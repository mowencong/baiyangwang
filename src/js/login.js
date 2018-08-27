/* 
* @Author: Marte
* @Date:   2018-08-22 15:46:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 16:16:13
*/

 document.addEventListener('DOMContentLoaded', ()=>{
    let huan = document.querySelector('.huan')
    let fault = document.querySelector('.fault');
    let right = document.querySelector('.right');
    let login = document.querySelector('.lg');
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let code = document.querySelector('#code');
    let udcode = document.querySelector('#udcode');
    let Showcode = document.querySelector('#Showcode');
    let auto = document.querySelector('#auto');
    let ts = document.querySelector('.ts');
    ts.style.height = '10px';
    ts.style.color = 'red';
    ts.style.fontSize = '12px';
    let codes = document.querySelector('.codes');
    // let usernames = document.querySelector('.usernames');
    // let passwords = document.querySelector('.passwords');
    let status = [200,304];
    let isok = false;
    createCode();
    huan.onclick = createCode;






    //登录操作
    (function(){
    login.onclick = ()=>{
        let _username = username.value;
        let _password = password.value;
        let _code = code.value;
        let _Showcode = Showcode.innerText;
        if(_username === '' || _password === ''){
            ts.innerHTML = '请输入用户名或密码';
            return false;
        }
        if(_code!=_Showcode){
            fault.style.display = "block";
            return false;
        }
        else{
            fault.style.display = "none";
            right.style.display = "block";
        }
        
             
        let xhr = new XMLHttpRequest();

        xhr.onload = () =>{

        if(status.indexOf(xhr.status) >= 0){
            let res = xhr.responseText;

       if(xhr.responseText == 'yes'){

            // 验证验证吗输入对错
            

            location.href = "../index.html";
         

        }
        if(xhr.responseText == 'no'){

            ts.innerText = '输入的用户名或密码错误';

            password.value = '';
            username.value = '';
            code.value = '';
        }
        }
    }
        
        xhr.open('post','../api/login.php',true);

        //请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        xhr.send(`username=${_username}&password=${_password}`);
        }
    })()
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