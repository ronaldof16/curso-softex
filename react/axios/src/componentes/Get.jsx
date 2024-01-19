import axios from "axios";
import { useState } from "react";

const Get = () => {
    const [dados, setDados] = useState([])
  
    async function teste() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);
      setDados(response.data);
    }
  
    console.log(dados)


  return (
    <div>
        <h1>GET</h1>
        <button onClick={teste}>Clique</button>
        {dados.length > 0 && 
            dados.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Get