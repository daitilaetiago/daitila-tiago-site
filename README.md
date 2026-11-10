# Daitila & Tiago — Lista de Presentes

Site estático premium de casamento, sem fotos genéricas e sem dependência de banco de dados. A versão atual inclui hero editorial, paleta champagne/off-white/dourado/oliva/rosé, monograma D&T, lista de presentes divertidos, QR Code Pix, compartilhamento, modal de identificação, confirmação de contribuição e área administrativa.

## Pix

A chave já está configurada no `index.html`:

```js
const CONFIG = {
  pixKey: '22992001140',
  pixQrKey: '+5522992001140',
  pixName: 'Daitila',
  pixCity: 'SAO PAULO'
};
```

O QR Code oficial enviado pela Caixa está salvo em `pix-qr-caixa.png` e é exibido no destaque do site e no modal de cada presente. A chave visível permanece `22992001140`.

## Administração

Abra `admin.html`. A senha solicitada no briefing é `daitila2026`.

A área permite pesquisar, filtrar e exportar CSV. Como esta é uma versão estática, os registros são salvos no `localStorage` do navegador em que o convidado acessou o site. Para acompanhamento em tempo real em diferentes dispositivos, configure o Google Sheets conforme abaixo.

**Importante:** uma senha em um site puramente estático não é uma proteção forte, pois o código pode ser inspecionado. Para produção com dados sensíveis, conecte uma autenticação real ou use um backend.

## Google Sheets

1. Crie uma planilha com a aba `Presentes`.
2. Na primeira linha, use: `Nome | WhatsApp | Presente | Valor | Data | Hora | Observação | Comprovante | CriadoEm`.
3. Abra **Extensões > Apps Script** e cole o conteúdo de `google-apps-script.gs`.
4. Implante como aplicativo da Web, executando como você e com acesso para qualquer pessoa.
5. Copie a URL publicada para `CONFIG.googleAppsScriptUrl` no `index.html`.

Sem a URL do Apps Script, o site continua funcionando localmente e registra os dados no navegador.

## Publicação

O projeto é estático e pode ser publicado em hospedagem gratuita como GitHub Pages. Não precisa de domínio pago, servidor próprio ou banco de dados.
