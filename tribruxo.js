import React, { Component } from 'react';
import Tribruxo2 from './tribruxoim/tribruxo.png';
import '../tribruxo/tribruxo.css';

class Tribruxo extends Component{

    
    constructor(props){
        super(props);
        this.state={
            textos: ''
        };

        this.acao = this.acao.bind(this);

        this.frases = ['O torneio comecou jovem bruxo, infelizmente voce foi eliminado na primeira prova, o dragao quebrou sua perna enquanto voce tentava capturar seu ovo, e voce nao ira se recuperar a tempo para a o restante da competicao.' , 'O torneio comecou jovem bruxo, voce ficou em 2 lugar contra o dragao, agora seguindo para o proximo desafio voce conseguiu achar seu tesouro no lago, ficando em 1 lugar nesta etapa, e assim assumindo a primeira colocacao, agora no ultimo desafio voce infelizmente foi capturado pelas arvores e teve que abandonar a prova, assim perdendo.', 'O torneio comecou jovem bruxo, o primeiro desafio voce infelizmente ficou em ultimo lugar, mas avancou para a fase seguinte finalizando a prova do lago em 2 lugar, e assim empatando na 2 colocao da competicao, no ultimo desafio voce conseguiu passar por todos os obstaculos e venceu o torneio Tribruxo, parabens!.'];
    }

    acao(){
        let state = this.state;
        var aleatorio = Math.floor(Math.random() * this.frases.length);
        state.textos = this.frases[aleatorio];
        this.setState(state);
    }

    
    render(){
        return(
            <div className='container'>
            <img  id='tribruxo' src={Tribruxo2} />

            <Botao acaoBtn={this.acao}/>
            <h3 className='frases'>  {this.state.textos} </h3>
            </div>
        );
            
        
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>Começar Jogo</button>
            </div>
        );
    }
}

export default Tribruxo;