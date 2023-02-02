<?php
include_once("../users/database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$title = mysqli_real_escape_string($mysqli, trim($request->title));
$subtitle = mysqli_real_escape_string($mysqli, trim($request->subtitle));
$descripcion = mysqli_real_escape_string($mysqli, trim($request->descrip));
$descrip = str_replace("\r\n", "</br>", $descripcion);
$img = mysqli_real_escape_string($mysqli, trim($request->img));
$img1 = mysqli_real_escape_string($mysqli, trim($request->img1));
$img2 = mysqli_real_escape_string($mysqli, trim($request->img2));
$img3 = mysqli_real_escape_string($mysqli, trim($request->img3));
$img4 = mysqli_real_escape_string($mysqli, trim($request->img4));
$img5 = mysqli_real_escape_string($mysqli, trim($request->img5));
$img6 = mysqli_real_escape_string($mysqli, trim($request->img6));

$sql = "INSERT INTO projects(title, subtitle, descrip, img, img1, img2, img3, img4, img5, img6) VALUES ('$title','$subtitle','$descrip','$img','$img1','$img2','$img3','$img4','$img5','$img6')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'title' => $title,
'subtitle' => $subtitle,
'descrip' => $descrip,
'img' => $img,
'img1' => $img1,
'img2' => $img2,
'img3' => $img3,
'img4' => $img4,
'img5' => $img5,
'img6' => $img6,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>