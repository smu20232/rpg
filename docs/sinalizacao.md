# Sinalização <!-- omit in toc -->
A sinalização foi desensenvolvida com base no [SIP](https://datatracker.ietf.org/doc/html/rfc3261), onde temos as seguintes mensagems:

- [REGISTER](#register)
- [INVITE](#invite)
- [SUBSCRIBE](#subscribe)
- [PUBLISH](#publish)
- [ACK](#ack)
- [BYE](#bye)

## REGISTER
Utilizado para registrar um cliente no servidor, oque possibilita estabelecer conexão com outros hosts.

```
REGISTER sip:registrar.biloxi.com
Max-Forwards: 2
To: Bob <sip:bob@biloxi.com>
From: Bob <sip:bob@biloxi.com>;tag=456248
Call-ID: 843817637684230@998sdasdh09
Expires: 3600
```
> Respostas: 200, 204, 401, 404, 408, 486 e  500
## INVITE
Estabelece uma sessão com outro host.

## SUBSCRIBE
Estabelece uma sessão com um canal especifico.

## PUBLISH
Envia mensagens em um canal especifico.

## ACK
Mensagem de confirmação.

## BYE
Mensagem de encerramento de sessão.