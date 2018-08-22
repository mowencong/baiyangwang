<?php
/**
 * @Author: mowencong
 * @Date:   2018-08-22 15:39:00
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-22 18:09:35
 */
    include 'connect.php';
    $username= isset($_POST['username']) ? $_POST['username'] : null; 

    $password = isset($_POST['password']) ? $_POST['password'] : null; 
    
    $sql = "insert into username(username,password) value('$username','$password')"; 

    $result = $mydb->query($sql);

    if($result){
        echo "seccess";
    }
    else{
        echo "fail";
    }
?>