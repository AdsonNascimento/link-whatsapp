import { useState } from 'react'
import onlyNumber from './tools/OnlyNumber';
import LinkWhatsApp from './components/LinkWhatsApp/LinkWhatsApp';
import './App.css'

function App() {
  const [country, setCountry] = useState<string>(
    localStorage.getItem('country') || ''
  );
  
  const [number, setNumber] = useState<string>(
    localStorage.getItem('number') || ''
  );

  const [mensage, setMensage] = useState<string | undefined>(
    localStorage.getItem('mensage') || ''
  );
  
  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = onlyNumber(event);
    if (value.length <= 3) {
      setCountry(value);
      localStorage.setItem("country", value);
    }
  }

  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = onlyNumber(event);
    if (value.length <= 15) {
      setNumber(value);
      localStorage.setItem("number", value);
    }
  }

  const handleMensage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMensage(event.target.value)
    localStorage.setItem("mensage", event.target.value);
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className='main'>
    <form onSubmit={handleSubmit}>

      <label htmlFor="number">Phone number:</label><br />
      <fieldset className="tel-input">
        <input
          value={country}
          onChange={handleCountry}
          id="Country"
          name="Country"
          type="tel"
          autoComplete='off'
          placeholder="Country"
          required
        />

        <input
          value={number}
          onChange={handleNumber}
          id="number"
          name="number"
          type="tel"
          autoComplete='off'
          placeholder="Only numbers"
          required
        />
      </fieldset>

      <label htmlFor="mensage">Write the text:</label><br />
      <textarea
        className='textarea'
        value={mensage}
        onChange={handleMensage}
        name="mensage"
        id="mensage"
      >
      </textarea>

      <LinkWhatsApp country={country} number={number} mensage={mensage}/>
    </form>
  </main>
  )
}

export default App
