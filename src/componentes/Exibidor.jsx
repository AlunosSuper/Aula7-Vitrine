import styled from "styled-components"

// Container principal que une imagens e dados lado a lado
const Modelo = styled.div`
  background: #fff;
  display: flex;
  margin: 32px 0;
  overflow: hidden;
`
// Galeria horizontal rolavel — ate 480px de largura
const ModeloImagens = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 480px;
`

// Coluna com informacoes do produto — gap de 16px entre cada item
const ModeloDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`
export default function Exibidor() {
  return (
    <Modelo>

        <ModeloImagens>
            <img
              src={ props.produto.imagens[0] }
              alt="Foto do Produto"
              height={ 450 }/>
            <img
              src={ props.produto.imagens[1] }
              alt="Foto do Produto"
              height={ 450 }/>
            <img
              src={ props.produto.imagens[2] }
              alt="Foto do Produto"
              height={ 450 }/>

        </ModeloImagens>

        <ModeloDados>
            <div> Marca </div>
            <div> Modelo </div>
            <div> R$ 1.000,00 </div>
            <div>
                Dolorum amet earum deleniti tenetur repellendus
            </div>
            <button> Adicionar ao Carrinho </button>
        </ModeloDados>


    </Modelo>
  )
}
