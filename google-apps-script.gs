/*
  Google Apps Script — integração opcional da lista de presentes

  1. Crie uma planilha Google com a aba "Presentes".
  2. Na primeira linha, use:
     Nome | WhatsApp | Presente | Valor | Data | Hora | Observação | Comprovante | CriadoEm
  3. Extensões > Apps Script, cole este arquivo.
  4. Implante como aplicativo da Web, executar como você e acesso "qualquer pessoa".
  5. Copie a URL para CONFIG.googleAppsScriptUrl no index.html.
*/

const SHEET_NAME = 'Presentes';

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.appendRow([
    data.nome || '', data.whatsapp || '', data.presente || '', data.valor || '',
    data.data || '', data.hora || '', data.observacao || '', data.comprovante || '',
    data.criadoEm || new Date().toISOString()
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Integração da lista Daitila & Tiago ativa.')
    .setMimeType(ContentService.MimeType.TEXT);
}
