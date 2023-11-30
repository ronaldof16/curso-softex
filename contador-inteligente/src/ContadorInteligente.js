import  { useState } from 'react';

const ContadorInteligente = () => {
    const [energia, setEnergia] = useState(0);

    function incrementar() {
        setEnergia(energia + 1);
    }

    function decrementar() {
        setEnergia(Math.max(energia - 1,0));
    }

    return (
        <div>
            <h1>Consumo de Energia atual: {energia}</h1>
            <button className='incrementar' onClick={incrementar}>Incrementar</button>
            <button className='decrementar'  onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default ContadorInteligente