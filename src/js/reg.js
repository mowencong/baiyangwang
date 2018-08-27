/* 
* @Author: Mowencong
* @Date:   2018-08-22 20:06:32
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 14:47:42
*/

document.addEventListener('DOMContentLoaded', ()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let ts = document.querySelector('.u-ts');
    let code = document.querySelector('#code');
    let udcode = document.querySelector('udcode');
    let Showcode = document.querySelector('#Showcode');
    let huan = document.querySelector('.huan')
    let fault = document.querySelector('.fault');
    let right = document.querySelector('.right');
    let register = document.querySelector('#register');
    let login = document.querySelector('.lg');
    let status = [200,304];
    let isok = false;
    createCode();
    huan.onclick = createCode;
    
    //用户名是否已存在
    username.onblur = ()=>{
        let user = document.querySelector('.username')
        let _username = username.value;
        if(!/^1[3-9]\d{9}$/.test(_username)){
                    ts.style.display = 'block';
                    return false;
                    }
       
        let xhr = new XMLHttpRequest();
        xhr.onload = () =>{
            if(status.indexOf(xhr.status)>=0){
                console.log(xhr.responseText);
                if(xhr.responseText === 'yes'){
                    isok = true;
                    //成功：添加has-success类
                        user.classList.remove('error');
                        user.classList.add('success');
                        ts.style.display = 'none';
                }
                else if(xhr.responseText === 'no'){
                    isok = false;
                    user.classList.remove('success');
                    user.classList.add('error');
                }
                
                
            }
        }
        xhr.open('get','../api/checkname.php?username='+_username,true);
        xhr.send();
    }
    password.onblur = ()=>{
        let _password = password.value
         if(!/^\S{6,20}$/.test(_password)){
            alert('密码不能有空格');
            return false;
        }
    }

    // 注册操作
    register.onclick = function(e){
        e = e || window.event;
        var _username = username.value;

        var _password = password.value;
        var _code = code.value;
        // 发起请求
        let xhr = new XMLHttpRequest();
            if(isok == true){
                //处理数据
        xhr.onload = ()=>{
             if(status.indexOf(xhr.status)>=0){
                    console.log(xhr.responseText);
            }
               
        }
    }


    if(_username===''||_password===''){
                alert('帐号密码不能为空');
                username.focus();
                password.focus();
                // code.focus();
                return false;
            }
    if(_code === ''){
        alert('请输入验证码');
        return false;
    }
            
   if(_username!='' && _password!='' && code != ''){
        return true;
    }
    if(xhr.responseText === 'success'){
        
        location.href = "login.html";
        console.log(xhr.responseText);
        
    }
    //返回数据
    xhr.open('post','../api/reg.php',true);
    //
    //设置请求头，以便后端接收数据
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(`username=${_username}&password=${_password}`);
    }
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