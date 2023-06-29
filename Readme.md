# Correio Elegante
Sistema de Correio Elegante feito para a Festa Junina da família.

## Funcionamento
O serviço é acessado por uma página web no telefone. 
![Alt text](./readme_imgs/im01_frontvazio.jpeg?raw=true "Página web campos vazios" | width = 200)

Essa página possui um formulário com dois campos e faz a validação dos mesmo antes de enviar
![Alt text](./readme_imgs/im01_validacao.jpeg?raw=true "Página web validação"  | width = 200)

Os dados são enviados para um servidor em NodeJs que os armazena em uma fila.

O Painel na televisão/monitor faz o consumo das mensagens uma por uma.
Ao carregar as informações na tela é emitido um sinal sonoro para avisar o público e depois a mensagem é lida pelo navegador;
![Alt text](./readme_imgs/im02_frontpainel.png?raw=true "Painel" )

## Tecnologia
A aplicação toda roda em 3 containers do Docker(um container nodeJS para o backend e dois containers rodando nginx para o frontend).
- Wetch API (para as requisições HTTP)
- Web Speech API (para reprodução em áudio do texto)
