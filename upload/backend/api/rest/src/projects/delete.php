<?php
require '../users/database.php';

// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli , (int)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `projects` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($mysqli, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}

?>