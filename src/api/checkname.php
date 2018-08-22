<?php
/**
 * @Author: mowencong
 * @Date:   2018-08-22 16:39:50
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-22 16:41:10
 */
 // 引入connect.php
    include 'connect.php';

    /*
        接口功能：验证用户名是否存在
        所需参数：
            * username
     */
    
    $username = isset($_GET['username']) ? $_GET['username'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "select * from username where username='$username'";

    // 执行sql语句
    $result = $mydb->query($sql);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>