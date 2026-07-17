# Integracoes de afiliados

O catalogo usa `AffiliateOffer` para representar a mesma peca em mais de uma
plataforma. Cada oferta possui seu link de afiliado, identificador externo,
preco sincronizado e o horario da ultima atualizacao. O produto do site segue
como a ficha tecnica central, mesmo quando ha varias ofertas para ele.

## Plataformas previstas

| Plataforma | Entrada de dados | Sincronizacao |
| --- | --- | --- |
| Mercado Livre | Item ID e link de afiliado | OAuth 2.0 e API de precos |
| Shopee | Link de oferta ou item ID | API de Afiliados da Shopee |
| Amazon | ASIN e link com tag | Product Advertising API |

## Credenciais

As credenciais reais ficam somente em `.env.local`. Nunca devem ser inseridas
no navegador, em cards de produto ou no repositorio. Tokens de usuario devem
ser criptografados antes de serem persistidos em `AffiliateIntegration`.

## Proxima implementacao

1. Registrar cada programa de afiliados e criar os aplicativos oficiais.
2. Configurar as variaveis de ambiente da plataforma escolhida.
3. Conectar o fluxo de autorizacao e sincronizar uma oferta de teste.
4. Criar o painel administrativo para cadastrar links e acompanhar falhas.
