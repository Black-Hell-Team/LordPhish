#!/usr/bin/env bash
green='\e[1;32m'
red='\e[1;31m'
yellow='\e[1;33m'
resetcollor='\e[0m'
clear
printf "\e[1;31mFollow me one github\e[0m"
echo

echo -e "\E[1;33m::::::::::::::::::: \e[97m   LordPhish  \E[1;33m::::::::::::::::::::"
echo -e "\e[97m                      ______
                   .-        -.
                  /            \
       \e[94m* \e[97m                                   \e[90m* \e[97m
                 |,  .-.  .-.  ,|        \e[32m* \e[97m
                 | )(_ /  \_ )( |
  \e[33m* \e[97m             |/     /\     \|
       (@_       <__    ^^    __>         \e[95m* \e[97m
  _     ) \_______\__|IIIIII|__/____________\e[31m___________ \e[97m
 (_)\e[31m@8@8\e[97m{}<________\e[31m_____\e[97m_____________\e[31m___________________> \e[97m
        )_/         \ IIIIII /                    \e[31m::::: \e[97m
       (@            --------                        \e[31m:: \e[97m
        "
cd $HOME
rm -rf LordPhish
git clone https://github.com/Black-Hell-Team/LordPhish
clear
echo ""
echo -e "$red [ $yellow + $red ] $green LordPhish was successfully updated. $resetcollor"
sleep 3.7
echo ""
cd $HOME
cd LordPhish
clear
echo -e "$red [ $yellow + $red ] $green Going out!"
