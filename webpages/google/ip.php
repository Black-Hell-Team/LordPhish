<?php

$ip = getRealIP ();


    function getRealIP(){

        if (isset($_SERVER["HTTP_CLIENT_IP"])){

            return $_SERVER["HTTP_CLIENT_IP"];

        }elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){

            return $_SERVER["HTTP_X_FORWARDED_FOR"];

        }elseif (isset($_SERVER["HTTP_X_FORWARDED"])){

            return $_SERVER["HTTP_X_FORWARDED"];

        }elseif (isset($_SERVER["HTTP_FORWARDED_FOR"])){

            return $_SERVER["HTTP_FORWARDED_FOR"];

        }elseif (isset($_SERVER["HTTP_FORWARDED"])){

            return $_SERVER["HTTP_FORWARDED"];

        }else{

            return $_SERVER["REMOTE_ADDR"];
                                                                                                             }
    }




fclose($fp);



//$useragent = " User-Agent: ";
$browser = $_SERVER['HTTP_USER_AGENT'];

$archivo = fopen("ips.txt","a");
$datos= "\n"."\n"."####################"."\n"."\n"."IP: ".$ip."\r\n"."User-Agent: ".$browser;
fwrite($archivo,$datos);
fclose($archivo);

?>
