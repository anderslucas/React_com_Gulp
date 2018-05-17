import React from 'react';

import Cartao from './cartao';

class ListaCartao extends React.Component {
  render() {

    let noticias = [
      {id: 1, titulo: 'Título 1', descricao: 'Descrição 1', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
      {id: 2, titulo: 'Título 2', descricao: 'Descrição 2', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
      {id: 3, titulo: 'Título 3', descricao: 'Descrição 3', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
      {id: 4, titulo: 'Título 4', descricao: 'Descrição 4', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
      {id: 5, titulo: 'Título 5', descricao: 'Descrição 5', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
      {id: 6, titulo: 'Título 6', descricao: 'Descrição 6', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
      {id: 7, titulo: 'Título 7', descricao: 'Descrição 7', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'}
    ];

    let aux = [];
    let novaLista = []; 

    for (let k = 0; k < noticias.length; k++) {
      aux.push(noticias[k]);
      if(aux.length == this.props.qtdLinha) {
        novaLista.push(aux);
        aux = [];
      } else if(k == noticias.length - 1){
        novaLista.push(aux);
      }
    }

    let tamanhoCol = "col m" + this.props.tamanhoCol; 

    let listaCartoes = function(grupo) {
      return grupo.map(function(item){
        return (
          <div key={item.id} className={tamanhoCol}>
            <Cartao />
          </div>
        );
      });
    };

    let linha = novaLista.map(function(grupo, index) {
      return (
        <div key={index} className="row">
          {listaCartoes(grupo)}
        </div>
      );
    });

    return (
      <div>
        {linha}
      </div>
    );
  }
}

export default ListaCartao;