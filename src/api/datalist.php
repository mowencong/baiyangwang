<?php
    // 引入connect.php
    include 'connect.php';
   
    
    //编写sql语句
    $sql = 'select * from list';

    //获取查询结果集
    $res =  $mydb->getdata($sql);
    // var_dump($res);

    //把结果输出到前台JSON_UNESCAPED_UNICODE
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>