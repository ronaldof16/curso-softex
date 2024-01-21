import axios from 'axios';
import { useState } from 'react';

const Post = () => {
    const [nome , setNome] = useState('');
        const [email, setEmail] = useState('');

    async function postar(e) {
        e.preventDefault()
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        'title': nome,
        'body': email
    });
    console.log(response.data);
    }

    return (
        <div>
            <h1>POST</h1>
            <form onSubmit={postar}>
                <div>
                    <label style={{ display: 'block'}} htmlFor='nome'>Nome</label>
                    <input style={{ marginBottom: '10px'}} type='text' id='nome' name='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label style={{ display: 'block'}} htmlFor='email'>Email</label>
                    <input style={{ marginBottom: '10px'}} type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Post