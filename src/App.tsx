import React, {useEffect, useState} from 'react';
import { Card } from './components/Card';
import Persons from './models/personsModels';

function App() {
  //mapeia a URI - RECURSO DE UMA API ()
  const url = "https://api.disneyapi.dev/characters";
  //estado
  const[persons, setPersons] = useState<Persons[]>([]);

  //pego os dados e seta no estado
  const getPersons = async() => {//Função de promessa
    //variavel que recebe o que vem la da url
    //esperando a busca na https://api.disneyapi.dev/characters
    const resposta = await fetch(url);
    //aqui eu converto o meu objeto string para json
    const vetorJSON = await resposta.json();
    //o data é o objeto
    setPersons(vetorJSON.data);
  }

  //toda vida que eu incializar o componente
  //ele executa o getPersons
  useEffect(()=>{
    getPersons()
  }, [])

  return (
   <>
   {/**percorre o componente e joga dentro do card */
    persons.map((person, index)=>{
      return(
        <div key={index}>
          <Card person={person} />
        </div>
      );
    })
   }
   </>
  );
}

export default App;
