// A função Only Number(onlyNumber) recebe uma string e retorna apenas os números ou comandos tab e backspace

function onlyNumber(event: React.ChangeEvent<HTMLInputElement>) {
  const filterNumber = event.target.value.replace(/[^0-9]/g, '');
  
  if (event instanceof KeyboardEvent) {
    const key = event.key;

    if (key === "Backspace" || key === "Tab") {
      return filterNumber
    }
  }

  return filterNumber;
}

export default onlyNumber