interface ContentLink {
  country: string,
  number: string,
  mensage?: string
}

function UrlWhatsApp({ country, number, mensage }: ContentLink) {
  const telNumber = `${country}${number}`;
  const urlCallWhatsApp = 'https://api.whatsapp.com/send/?phone='
  
  let url = `${urlCallWhatsApp}${telNumber}`;
  
  if (mensage) {
    const mensageUrl = encodeURIComponent(mensage)
    url += `&text=${mensageUrl}&app_absent=0`
  }

  return url
}

export default UrlWhatsApp