# some script note used in setup ec2 ubuntu

sudo apt-get update
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo snap install -y docker
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo gpasswd -a $USER docker
newgrp docker
sudo su $USER

ssh-keygen -t rsa

cat .ssh/id_rsa.pub

sudo apt install -y python3-pip
pip3 install gdown
echo "export PATH=\"`python3 -m site --user-base`/bin:\$PATH\"" >> ~/.bashrc
source ~/.bashrc

gdown 1VbzN6zMBeuAHPuwzfh0A1WqY8s41qtIg

nohup python3 app.py &
