<?php
require '../users/database.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$projects = [];

$sql = "SELECT id, title, subtitle, descrip, img ,img1, img2, img3, img4, img5, img6 FROM `projects`";

if($result = mysqli_query($mysqli,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $projects[$i]['id']    = $row['id'];
    $projects[$i]['title'] = $row['title'];
    $projects[$i]['subtitle'] = $row['subtitle'];
    $projects[$i]['descrip'] = $row['descrip'];
    $projects[$i]['img'] = $row['img'];
    $projects[$i]['img1'] = $row['img1'];
    $projects[$i]['img2'] = $row['img2'];
    $projects[$i]['img3'] = $row['img3'];
    $projects[$i]['img4'] = $row['img4'];
    $projects[$i]['img5'] = $row['img5'];
    $projects[$i]['img6'] = $row['img6'];
    $i++;
  }

  echo json_encode($projects);
}
else
{
  http_response_code(404);
}