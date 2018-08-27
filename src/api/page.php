<?php
/**
 * @Author: Marte
 * @Date:   2018-08-24 22:01:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-24 22:02:10
 */
 // 引入connect.php
    include 'connect.php';
   $pageNo = $_GET['pageNo'];
   $qty = $_GET['qty'];
    
    //编写sql语句
    $sql = 'select * from list';

    //获取查询结果集
    $res =  $mydb->getdata($sql);
    $str = array(
        "total" => count($res),
        "data" => array_slice($res,($pageNo-1)*$qty,$qty),
        "pageNo" => $pageNo,
        "qty" => $qty
        );
    // var_dump($str);

    //把结果输出到前台JSON_UNESCAPED_UNICODE
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    

    
?>