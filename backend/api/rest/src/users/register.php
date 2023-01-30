
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$user = mysqli_real_escape_string($mysqli, trim($request->user));
$sql = "INSERT INTO users(user,password) VALUES ('$user','$password')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'user' => $user,
'password' => $password,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>