# Sinalização <!-- omit in toc -->

A sinalização é baseada no [Protocolo de Iniciação de Sessão (SIP)](https://datatracker.ietf.org/doc/html/rfc3261) e utiliza mensagens via SocketIO para a comunicação. Esta documentação aborda os seguintes tópicos:

- [Formato das Mensagens](#formato-das-mensagens)
- [Registro (REGISTER)](#registro-register)
    - [Respostas](#respostas)


## Formato das Mensagens

As mensagens de sinalização são formatadas em JSON.

## Registro (REGISTER)

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

### Respostas

As respostas possíveis a um registro incluem os seguintes códigos:

- 200: OK
- 204: Nenhum Conteúdo
- 401: Não Autorizado
- 404: Não Encontrado
- 408: Tempo Limite de Solicitação
- 486: Destino Indisponível
- 500: Erro Interno do Servidor

## Entrar na sala (joinRoom)


O método `joinRoom` é utilizado pelo cliente para receber do servidor as informações necessárias para estabelecer uma conexão de midia com a sala escolhida.

### Pedido
No pedido é enviado o nome da sala que deseja fazer a conexão.

### Resposta
A resposta é uma lista de codecs suportados pelo servidor, chamado de `rtpCapabilities`.

## Criar canal de transporte *sender* ou *consumer* (createWebRtcTransport)

Este método é utilizado para criar um canal de midia do qual envia ou recebe dados do servidor. O paramâtro booleano `consumer` determina se o canal será configurado para receber ou enviar dados.

### Pedido
No pedido deve conter o comando `createWebRtcTransport` com o seguinte o paramêtro `consumer`:
- Caso `consumer` ser atribuido o valor `false`, o canal é utilizado para enviar dados o servidor.
- Caso `consumer` ser atribuido o valor `true`, o canal é utilizado para receber dados do servidor.
### Resposta
A resposta contém as informações necessárias para criar o canal.

## Informa parametros DTLS (transport-connect)

Este metódo é utilizado caso a criação de canal de transporte configurada como *sender* ocorrer com sucesso, ela serve para informar os parametros DTLS para iniciar uma conexão segura.

### Pedido
No pedido é passado o comando `transport-connect` com o paramêtro `dtlsParamaters` contendo as informações necessárias para estabelecer a conexão segura.

## Informa parametros DTLS (transport-recv-connect)

Este metódo é utilizado caso a criação de canal de transporte configurada como *consumer* ocorrer com sucesso, ela serve para informar os parametros DTLS e id do *consumer* para iniciar uma conexão segura.

### Pedido
No pedido é passado o comando `transport-recv-connect` com os seguintes paramêtros:
- `dtlsParamaters`: Informações necessárias para estabelecer uma conexão segura;
- `serverConsumerTransportId`: ID do *consumer*.

## Criar um produtor (transport-produce)

Este metódo é utilizado para solicitar ao server a criação de um `Producer`.

### Pedido
No pedido é passado o comando `transport-produce` com os paramêtros `kind`, `rtpParameters` e `appData`.
### Resposta
A resposta contém os seguintes paramêtros:
- `id`: Código de id do *producer* criado no servidor.
- `producersExist`: Paramêtro boolean informado se já existe um producer.

## Lista Producers (getProducers)

Metodo utilizado para receber os demais *producers* castrados no servidor.
### Pedido
No pedido é enviado o comando `getProducers`.
### Resposta
A resposta contém uma lista com os ids dos *producers*.




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