<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$db = [
    'host' => 'localhost',
    'username' => 'root',
    'password' => 'toor',
    'db' => 'tekoporadb'
];

?>
