import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave,valor) {
      setValues({
        ...values,
        [chave]: valor
      });
    }

    function handleChange(event) {
      const { getAttribute, value } = event.target;
      setValue(getAttribute('name'), value);
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>
          <div>
            <label>
              Nome da Categoria:
              <input 
                type="text" 
                name="nome"
                value={values.nome} 
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Descrição:
              <textarea 
                type="text"
                name="descricao" 
                value={values.descricao} 
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Cor:
              <input 
                type="color" 
                name="cor"
                value={values.cor} 
                onChange={handleChange}
              />
            </label>
          </div>

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria.nome}
              </li>
            );
          })}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;
