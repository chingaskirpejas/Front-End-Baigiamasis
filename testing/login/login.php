<?php

$users= file_get_contents("login.json");
$users= json_decode($users, true);
$users= $users["users"];

$usersArray = [];

 foreach ($users as $user) {
     $usersArray[$user['userName']] = $user;
 }

$userNameFromForm = $_POST['username'];
$passwordFromForm = $_POST['password'];

if (!empty($usersArray[$userNameFromForm])) {
    if ($userNameFromForm == $usersArray[$userNameFromForm]['userName'] && $passwordFromForm == $usersArray[$userNameFromForm]['password']) {
        header('Location: ...');
    } else {
        echo "ne";
    }
} else {
    echo "nera userio";
}
