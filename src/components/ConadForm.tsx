import React from "react";
import "./style.css"

const ConadForm = () => {
  return (
    <div className='container'>
      <h2> i tuoi dati </h2>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type='text' name='nome' id="nome" />

        <label htmlFor="nome">Cognome</label>
        <input type='text' name='cognome' id="cognome" />

        <label htmlFor="nome">Indirizzo E-mail</label>
        <input type='text' name='email' id="email" />

        <label htmlFor="nome">Conferma E-mail</label>
        <input type='text' name='conferma-email' id="conferma-email" />

        <label htmlFor="nome">Password</label>
        <input type='text' name='password' id="password" />

        <label htmlFor="nome">Conferma Password</label>
        <input type='text' name='conferma-password' id="conferma-password" />

        <input type="submit" onSubmit={() => alert("invia dati")} />
      </form>

    </div>
  )
};

export default ConadForm;