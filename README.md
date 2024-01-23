# RPG

Arquivo `/etc/systemd/system/roll6.service`:

```ini
[Unit]
Description=SMU 2023.2
Documentation=https://github.com/smu20232
After=network.target

[Service]
Environment=PORT=3001
Type=simple
WorkingDirectory=/home/aluno/rpg/servidor
ExecStart=/usr/bin/npm start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Comandos:

```sh
sudo systemctl restart roll6.service
sudo journalctl -f -u roll6.service
```

Webpack na pasta cliente:

```sh
npx webpack --config webpack.config.js
```
