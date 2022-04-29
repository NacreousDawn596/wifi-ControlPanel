if [ $(nmcli radio wifi) != "enabled" ]; then
    echo "please enable your wifi"
    exit
fi

ip=$(ip addr | grep "inet 192")

if [ -z "$ip" ]; then
    echo "please connect to a wifi"
    exit
else
    electron panel.js "${ip}"
fi