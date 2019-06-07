<?php

$users= file_get_contents("login.json");
$users= json_decode($users, true);
$usersArr= $users["users"];

$usersArray = [];

 foreach ($usersArr as $user) {
     $usersArray[$user['userName']] = $user;
 }

$newUserName = $_POST['userName'];
$newEmail = $_POST['email'];
$newPassword = $_POST['password'];
$confirm = $_POST['psw_again'];


if (empty($usersArray[$newUserName])) {
    if ($newPassword == $confirm) {
        $newUser = ["userName" => $newUserName, "password" => $newPassword, 'email' => $newEmail];
        array_push($users['users'], $newUser);
        $jsonData = json_encode($users);
        file_put_contents('login.json', $jsonData);
        echo "User created";
    } else {
        ?>
        <script type="text/javascript">
            alert('NEOAVYKOS');
        </script>
        <?php
        header('Location: index.html');
    }
} else {
    ?>
        <script type="text/javascript">
            alert('USER EXISTS');
        </script>
        <?php
}