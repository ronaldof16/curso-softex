import { useState } from "react"


const Post = () => {
    const [produto, setProduto] = useState([])

    async function teste() {
        await fetch('http://localhost:3000/produtos')
        .then((r) => r.json())
        .then((r) => setProduto(r))
        console.log(produto)
    }
    
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

   async function postar(e) {
    e.preventDefault();
   
    const prod = {
        nome,
        preco
    }

    await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(prod)
    })
    console.log(produto)
   }
    

  return (
    <div> 
        <ul>
            {produto.map((item) => (
                <li key={item.id}>{item.nome} - R$ {item.preco}</li>
            ))} 
        </ul>
        <button style={{ marginBottom: '1rem'}} onClick={teste}>Get</button>
        <form onSubmit={postar}>
            <div>
                <label style={{ display: 'block'}} htmlFor='nome'>Nome</label>
                <input style={{ marginBottom: '10px'}} type='text' id='nome' name='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
                <label style={{ display: 'block'}} htmlFor='preco'>Preço</label>
                <input style={{ marginBottom: '10px'}} type='text' id='preco' name='preco' value={preco} onChange={(e) => setPreco(e.target.value)} />
            </div>
            <button>Post</button>
        </form>
        
    </div>
  )
}

export default Post