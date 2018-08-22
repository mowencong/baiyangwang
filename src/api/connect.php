<?php
    /*
        连接数据库
            * 配置参数
            * 创建连接（实例化）
        php操作数据库
            * 增
            * 删
            * 改
    //         * 查
    //  */
    
    // // 配置参数
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = 'baiyangwang';


    // // 创建连接（实例化）
    // $conn = new mysqli($servername, $username, $password, $dbname);


    //  // 检测连接
    // if ($conn->connect_error) {
    //     // 输出信息并结束连接
    //     die("连接失败: " . $conn->connect_error);
    // } 

        class MYDB{
        function __construct($sn,$un,$pw,$db){
        //配置参数
        $this->sn = $sn;
        $this->un = $un;
        $this->pw = $pw;
        $this->db = $db;
        }
        //连接
        function conn(){
        //创建连接
        $conn = new mysqli($this->sn,$this->un,$this->pw,$this->db);
        //乱码处理
        $conn->set_charset('utf8');
        //检查连接
        if($conn->connect_error){
        //输出信息并结束连接
        die("0:$conn->connect_error");
        return null;
        }
        return $conn;
        }
        //执行
        function query($sql){
        return $this->conn()->query($sql);
        }

        //以数组的形式返回数据
        function getdata($sql){
        // fetch_all(MYSQLI_BOTH) 抓取所有的结果行并且以关联数据，数值索引数组，或者两者皆有的方式返回结果集。
        //MYSQL_ASSOC 关联 MYSQLI_NUM 索引 MYSQLI_BOTH 关联和索引
        return $this->query($sql)->fetch_all(MYSQL_ASSOC);
        // fetch_fields(); 以对象数组返回代表结果集中的列信息。
        // [{"name":"name","orgname":"name","table":"tprovince","orgtable":"tprovince","def":"","db":"mallvv","catalog":"def","max_length":24,"length":120,"charsetnr":33,"flags":4097,"type":253,"decimals":0}]
        }
        }
        $mydb = new MYDB('localhost','root','','baiyangwang');



?>