import React, {useState, useEffect} from "react";
import {Section, Footer,Textcripto, Div} from './styled'
import AluraLogo from './assets/Alura.png'




export default function App(){
  const [inputSave, setinputSave] = useState([])
  const [valueInpt, setValueInput] = useState('')
  const [display, setDisplay] = useState('flex')
  const [criptDisplay, setcriptDisplay] = useState('none')




useEffect(()=>{
  if(inputSave[0] ){
    setDisplay('none')
    setcriptDisplay('flex')
   
  }else{
    setDisplay('flex')
    setcriptDisplay('none')
  }

   

})

const handCriptografar = ()=>{

  const encryptionMap = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };

  let textoCriptografado = "";

  for (let i = 0; i < valueInpt.length; i++) {
    const letra = valueInpt[i];
    if (encryptionMap[letra]) {
      textoCriptografado += encryptionMap[letra];
    } else {
      textoCriptografado += letra;
    }
  }


  valueInpt === '' ? '' : setinputSave([textoCriptografado]);   
  setValueInput('')
  document.querySelector('textarea').select();
}




const handDescriptografar = ()=>{



// Definir o mapa de descriptografia


if(valueInpt){
const decryptionMap = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
};

const inputText = document.querySelector('textarea').value;

// Loop através do mapa e substituir todas as chaves pelas suas respectivas valores
let decryptedText = inputText;
for (const key in decryptionMap) {
  const regex = new RegExp(key, 'g');
  decryptedText = decryptedText.replace(regex, decryptionMap[key]);
}

    setinputSave(decryptedText);   
    setValueInput('')
    document.querySelector('textarea').select();
  }

}

  const handleCopy = () => {
    // Verificar se o valor do textarea está vazio
    if (!inputSave) {
      setMessage('Nenhum texto para copiar!');
      return;
    }

    // Copiar o valor do textarea para a área de transferência do sistema operacional
    navigator.clipboard.writeText(inputSave);

  };



  
 

    return (
      <>
        <Section>
            <section_left>
                <areaTitle>
                  <h1><img src={AluraLogo} alt="logo da alura" /></h1>
                  <h2> Decodificador</h2>
                </areaTitle>
                <div>
                  <h3>Somente Letras Minúsculas</h3>
                  <textarea value={valueInpt} cols="72" rows="20" placeholder="Digite seu texto " onChange={(e)=>setValueInput(e.target.value)}>

                  </textarea>
                </div> 
                <areaButton>
                  <button onClick={handCriptografar}>Criptografar</button>
                  <button onClick={handDescriptografar}>Descriptografar</button>
                </areaButton>
            </section_left>
            <section_Right>
                <section >
                  <Textcripto cription={criptDisplay}>
                    <div>
                      <p>{inputSave}</p>
                    </div>
                    <button onClick={handleCopy}>Copiar</button>
                  </Textcripto> 
                  <Div section={display}>
                    <h3>Nenhuma mensagem encontrada</h3>
                    <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
                  </Div> 
                </section>
            </section_Right>
        </Section>
        <Footer>
            <ul>
              <li>link</li>
              <li>git</li>
            </ul>
            <p> © Manoel Fernando de Souza Silva</p>
        </Footer>
      </>
    )
}