import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [produto, setProduto] = useState([]);

    const url = 'http://localhost:3000/produtos';

        useEffect(() => {
            async function get() {
                const res = await fetch(url).then(r => r.json());
                console.log(res)
                setProduto(res)
            }
            get()
        }, [])

  return (
    <div>
        <h1>Home</h1>
        <ul>
            {produto.length > 0 && produto.map((item) => (
                <li key={item.id}>
                    <h3>{item.nome}</h3>
                    <p>R$ {item.preco}</p>
                    <Link to={`/produtos/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home