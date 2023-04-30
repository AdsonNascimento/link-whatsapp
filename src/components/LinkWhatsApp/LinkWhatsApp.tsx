import { useState } from "react";
import UrlWhatsApp from "../../tools/UrlWhatsApp";
import copyText from "../../tools/CopyText";
import './style.css'

interface WhatsAppLink {
  country: string, 
  number: string,
  mensage?: string
}

function LinkWhatsApp({country, number, mensage}: WhatsAppLink) {

  const [btn, setBtn] = useState('copy mensage')

  function ok() {
    setBtn('copyed!');

    setTimeout(() => {
      setBtn('copy mensage')
    }, 1250)
  }

  const handleLink = () => {
    if (country.length >= 2 && number.length >= 8) {
      const whatsAppUrl = UrlWhatsApp({country: country, number: number, mensage: mensage})
      copyText(whatsAppUrl)
      ok()
    } else {
      alert('Preencha os campos de número adequadamente')
    }
  }

  return (
    <button
      className="link-whatsapp"
      id="submit"
      type="submit"
      onClick={handleLink}
    >
      {btn}
    </button>
  )
}

export default LinkWhatsApp