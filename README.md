# 🎂 Bolos Caseiros da Fran

Site (PWA) de pedidos online para a confeitaria caseira **Bolos da Fran**. O cliente monta o pedido (sabor, tipo, forma de pagamento e data de retirada) e o pedido é enviado formatado diretamente para o WhatsApp da confeitaria — sem backend, sem banco de dados, tudo em um único arquivo HTML.

## ✨ Funcionalidades

- **Banner de status** (aberto/fechado) atualizado automaticamente conforme o horário de atendimento (9h–18h)
- **Seleção de sabor e tipo de bolo**, com preços dinâmicos
- **Carrinho de compras** com adição/remoção de itens e cálculo automático do total
- **Agendamento de retirada** com data mínima de 24h de antecedência
- **Formas de pagamento**: Dinheiro, PIX ou Crédito
- **Pagamento via PIX**: geração automática de QR Code (padrão BR Code / BACEN) e chave copia-e-cola
- **Resumo do pedido** revisável antes do envio
- **Envio via WhatsApp**: monta uma mensagem formatada e abre o WhatsApp com o pedido pronto para enviar
- **PWA (Progressive Web App)**: pode ser instalado na tela inicial do celular (requer `manifest.json`, `icon-192.png` e `sw.js`)

## 🛠️ Tecnologias

- HTML5, CSS3 e JavaScript puro (vanilla) — nenhum framework
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) (via CDN) para gerar o QR Code do PIX
- Google Fonts (`Playfair Display` + `Nunito`)

## 📁 Estrutura esperada do projeto

```
.
├── index.html        # este arquivo
├── manifest.json      # configuração do PWA (ícone, nome, cores)
├── icon-192.png        # ícone do app
└── sw.js               # service worker (para funcionamento como PWA)
```

> Os arquivos `manifest.json`, `icon-192.png` e `sw.js` são referenciados no HTML mas precisam ser criados/adicionados separadamente para o recurso de instalação (PWA) funcionar por completo.

## 🚀 Como usar

1. Baixe/clone os arquivos do projeto.
2. Abra `index.html` em qualquer navegador — não é necessário servidor ou instalação de dependências.
3. Para publicar, basta hospedar os arquivos em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel etc.).

## ⚙️ Configuração

Antes de usar em produção, ajuste no código-fonte (`index.html`):

- **Número de WhatsApp**: variável usada em `sendOrder()` (`https://wa.me/55...`)
- **Chave PIX e nome do recebedor**: usados na função `genPix()`
- **Sabores, tipos e preços**: dentro do HTML (seção "Monte seu Bolo") e do objeto de emojis no JavaScript
- **Horário de funcionamento**: função `checkStatus()`

## 📄 Licença

Este projeto está licenciado sob a licença MIT — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👩‍💻 Desenvolvido por

[@crlstephany](https://www.instagram.com/crlstephany)
