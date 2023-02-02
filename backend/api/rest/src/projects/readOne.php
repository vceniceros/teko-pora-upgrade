<?php
include_once("../users/database.php");

$projects = [];
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli , (int)$_GET['id']) : false;



$sql = "SELECT * FROM  `projects` WHERE `id` = '{$id}' LIMIT 1";

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


?>