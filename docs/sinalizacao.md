# Sinalização <!-- omit in toc -->

A sinalização é baseada no [Protocolo de Iniciação de Sessão (SIP)](https://datatracker.ietf.org/doc/html/rfc3261) e utiliza mensagens via SocketIO para a comunicação. Esta documentação aborda os seguintes tópicos:

- [Formato das Mensagens](#formato-das-mensagens)
  - [Registro (REGISTER)](#registro-register)
    - [Respostas](#respostas)


## Formato das Mensagens

As mensagens de sinalização são formatadas em JSON.

### Registro (REGISTER)

O método REGISTER é usado para registrar um cliente no servidor, permitindo estabelecer conexões com outros hosts.

A mensagem deve conter um parâmetro com a chave `mstype`, associada ao valor `REGISTER`, e um parâmetro com a chave `msgcontent` e um valor associado, conforme tabela abaixo:



<!-- ```
REGISTER sip:registrar.biloxi.com
Max-Forwards: 2
To: Bob <sip:bob@biloxi.com>
From: Bob <sip:bob@biloxi.com>;tag=456248
Call-ID: 843817637684230@998sdasdh09
Expires: 3600
``` -->
<!-- > Respostas: 200, 204, 401, 404, 408, 486 e  500 -->
| Chave        | Tipo   | Descrição                  |
|--------------|--------|----------------------------|
| Max-Forwards | int    | Quantidade máxima de encaminhamentos |
| To           | string | Destinatário da mensagem   |
| From         | string | Remetente da mensagem      |
| Call-ID      | string | Identificação da chamada   |
| Expires      | int    | Tempo de validade          |

#### Respostas

As respostas possíveis a um registro incluem os seguintes códigos:

- 200: OK
- 204: Nenhum Conteúdo
- 401: Não Autorizado
- 404: Não Encontrado
- 408: Tempo Limite de Solicitação
- 486: Destino Indisponível
- 500: Erro Interno do Servidor


<!-- ## INVITE
Estabelece uma sessão com outro host.

## SUBSCRIBE
Estabelece uma sessão com um canal especifico.

## PUBLISH
Envia mensagens em um canal especifico.

## ACK
Mensagem de confirmação.

## BYE
Mensagem de encerramento de sessão. -->