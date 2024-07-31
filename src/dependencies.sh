
dependencies() {

command -v php > /dev/null 2>&1 || { echo >&2 "I require php but it's not installed. Run setup.sh, Aborting."; exit 1; }
command -v wget > /dev/null 2>&1 || { echo >&2 "I require wget but it's not installed. Run setup.sh, Aborting."; exit 1; }
command -v unzip > /dev/null 2>&1 || { echo >&2 "I require unzip but it's not installed. Run setup.sh, Aborting."; exit 1; }
command -v curl > /dev/null 2>&1 || { echo >&2 "I require curl but it's not installed. Run setup.sh, Aborting."; exit 1; }

}