import React, { Component } from 'react';
import '../quadribol/quadribol.css'
import Image2 from '../quadribol/imgQuadri/index.js'

class Quadribol extends Component{

    constructor(props){
        super(props);
        this.state={
            textos: ''
        };

        this.acao = this.acao.bind(this);

        this.frases = ['O jogo comecou, voce e o apanhador, apos 20 minutos voce consegue avistar o pomo de ouro, voce tentar chegar ate ele, mas infelizmente o apanhador inimigo chega antes de voce, e vcs perdem o jogo.', 'O jogo comecou, um dia chuvoso, voce e o goleiro, o jogo esta empatado, e nos ultimos minutos voce faz uma defesa impressionante salvando seu time de uma derrota, enquanto no rebote seu time faz o ponto da vitoria, parabens voce ganhou o jogo!', 'Infelizmente voce foi atingido no inicio do jogo e seu time perdeu!.'];
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
            <Image2/>

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

export default Quadribol;