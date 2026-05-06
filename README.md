# multi-environment-deploy

Before acually using the GitHubAction functionality it is mandatory to setup an EC2 with terraform and install it, configure nginx  using ansible. The setup handles three environments { dev | staging | production }.

Structure is:

```
.
├── .gitignore
├── README.md
├── ansible
│   ├── ansible.cfg                 <= basic ansible settings
│   ├── inventory.json              <= created from terraform output
│   ├── playbook_prepare_host.yaml  <= playbook to update os, install nginx and install multi environment
│   └── templates
│       └── nginx_vhost.j2          <= jinja template for the webserver config
├── scripts
│   └── ec2-userdata.sh              <= currently not used
└── terraform
    ├── main.tf
    └── outputs.tf                  <= outputs as well an ansible_inventory object
```



Start with 

```
cd ./terraform
terraform init
terraform apply --auto-approve
```

To not write the ansible config manually, we use an ansible.json, which you can create from 

`terraform output -json ansible_inventory > ../ansible/inventory.json`

after that you can run the ansible-playbook command to install and configure

```
cd ../ansible
ansible-playbook playbook_prepare_host.yaml
```

