#!/usr/bin/env bash

source ./src/ui/colors.sh
source ./src/ui/menu.sh
source ./src/ui/interrupt.sh
source ./src/dependencies.sh
source ./src/stop.sh

trap 'printf "\n";stop;exit 1' 2
trap user_interrupt SIGINT
trap user_interrupt SIGTSTP

menu

##


banner
dependencies
menu
