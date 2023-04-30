function copyText(text:string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  // Adiciona o textarea na página
  document.body.appendChild(textarea);

  // Seleciona o conteúdo do textarea
  textarea.select();

  // Copia o conteúdo selecionado para a área de transferência
  document.execCommand('copy');

  // Remove o textarea da página
  document.body.removeChild(textarea);
}

export default copyText