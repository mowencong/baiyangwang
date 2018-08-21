<?php
include 'connect.php';
            //两个参数：sql语句，判断返回1查询或是增删改的返回
                $sql='select * from index-imgurl;';
            $r = $conn->query($sql);
           if (isset($r)) {
                 return $r->fetch_all();//查询语句，返回数组.执行sql的返回方式是all，也可以换成row
            } else {
                return "数据库查询失败！";
            }
     

// 43         /*
// 44          * 数据库连接函数
// 45          */
// 46         public function connect(){
// 47             $Link= mysqli_connect($this->host,$this->User,$this->Pwd,$this->Dbname);
// 48             return $Link;
// 49         }
// 50         
// 51     }
 
  $shujuku=new $conn;
 

  include './login.html';
 //var_dump($shujuku->result);
?>