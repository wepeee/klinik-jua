<?php 

$host="localhost";
$user="root";
$pass="";
$db="signup";
$conn=new mysql($host,$user,$pass,$db)
if ($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}

?>