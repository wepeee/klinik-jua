<?php 
$servername = "localhost";
$database = "db_users";
$username = "root";
$password = "";

$cann = mysqli_connect($servername,$database,$username,$password);

if (!$cann) {
    die("koneksi gagal : " . mysqli_connect_error());
} else{
    echo "koneksi berhasil";
}

?>