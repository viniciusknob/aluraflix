import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Initial');

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

        <form>
          <label>
            Nome da Categoria:
            <input 
              type="text" 
              value={nomeDaCategoria} 
              onChange={(event) => {
                console.log('[nomeDaCategoria]', nomeDaCategoria);
                console.log('[event]', event.target.value);
                setNomeDaCategoria(event.target.value);
              }}
            />
          </label>
          <button>
            Cadastrar
          </button>
        </form>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;
