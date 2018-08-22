<?php
/**
 * @Author: mowenocng
 * @Date:   2018-08-22 15:39:00
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-22 21:08:38
 */
 //引入connect.php
    include 'connect.php';
    $username = isset($_POST['address'])?$_POST['username'] : null;
    $password = isset($_POST['password'])?$_POST['password'] : null;


    //查找数据库中是否存在所输入的用户名或密码
    $sql = "select * from username where username = '$username' and password = '$password'";
    //执行sql语句
    $result = $mydb->query($sql);
    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }
?>