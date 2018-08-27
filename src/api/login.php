<?php
/**
 * @Author: mowenocng
 * @Date:   2018-08-22 15:39:00
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-24 19:19:14
 */
 //引入connect.php
    include 'connect.php';

    $username = isset($_POST['username'])?$_POST['username'] : null;
    $password = isset($_POST['password'])?$_POST['password'] : null;

    // echo "$username";
    // echo "$password";
    //查找数据库中是否存在所输入的用户名或密码
    $sql = "select * from username where username = '$username' and password = '$password'";
    //执行sql语句
    $result = $mydb->query($sql);
    // var_dump($result);
    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }
?>