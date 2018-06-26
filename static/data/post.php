<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$json_str = file_get_contents('php://input');

$post = json_decode($json_str);

$arr = [
  'result' => 0,
  'name' => $post['name']
];
echo json_encode($post);