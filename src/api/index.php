<?php
    // 引入connect.php
    include 'connect.php';
   
    
    //编写sql语句
    $sql = 'select * from imgurl';

    //获取查询结果集
    $res =  $mydb->getdata($sql);

    //把结果输出到前台JSON_UNESCAPED_UNICODE
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>