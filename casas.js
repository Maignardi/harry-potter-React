import React, { Component } from 'react';
import '../casas/casas.css';

class Casas extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        
      }
      handleClick() 
      {
        var checked = document.querySelectorAll('input[type=radio]:checked');
      
        console.log(checked);
        var corvinal = 0;
        var sonserina = 0;
        var grifinoria = 0;
        var lufa = 0;
        var soma = 0;
        checked.forEach(function(teste){
            
            if(checked[soma].value=='corvinal'){
                corvinal = corvinal + 1;
                soma = soma+1;
                return(console.log(corvinal));
            }
            if(checked[soma].value=='sonserina'){
                sonserina = sonserina + 1;
                soma = soma+1;
                return(sonserina);
            }
            if(checked[soma].value=='grifinoria'){
                grifinoria = grifinoria + 1;
                soma = soma+1;
                return(grifinoria);
            }
            if(checked[soma].value=='lufa'){
                lufa = lufa + 1;
                soma = soma+1;
                return(lufa);
            }
           

        });
        
        if(corvinal>sonserina && corvinal>grifinoria && corvinal>lufa){
            return(alert('Parabens, voce pertence a casa da corvinal'))
            
        }
        if(sonserina>grifinoria && sonserina>lufa && sonserina>corvinal){
            return(alert('Parabens, voce pertence a casa da sonserina'))
        }
        if(grifinoria>lufa && grifinoria>sonserina && grifinoria>corvinal){
            return(alert('Parabens, voce pertence a casa da Grifinoria'))
        }
        if(lufa>grifinoria && lufa>sonserina && lufa>corvinal){
            return(alert('Parabens, voce pertence a casa da lufa-lufa'))
        }
       

        }
    
        render(){
        return(
            <div>
                <form className='form' >
                    
                    <div>
                        
                    <label className='form'>1.Qual seu Elemento favorito:<br/>
                    a) Agua<input type='radio'  name='elemento' value='corvinal' id='corvinal'></input><br/>
                    b) Terra<input type='radio'  name='elemento' value='lufa' id='lufa'></input><br/>
                    c) Fogo<input type='radio'  name='elemento' value='sonserina' id='sonserina'></input><br/>
                    d) Ar<input type='radio' name='elemento' value='grifinoria' id='grifinoria'></input><br/>
                    </label>
                    </div>
                    <div>
                    <label  className='form'>2.Qual sua arma favorita para um combate:<br/>
                    a) Varinha<input type='radio'  name='arma' value='grifinoria' id='grifinoria'></input><br/>
                    b) Maos<input type='radio'  name='arma' value='lufa' id='lufa'></input><br/>
                    c) Pocoes<input type='radio'  name='arma' value='corvinal' id='corvinal'></input><br/>
                    d) Cajado<input type='radio'  name='arma' value='sonserina' id='sonserina'></input><br/>
                    </label>
                    </div>
                    <div>
                    <label  className='form'>3.Qual seu poder favorito:<br/>
                    a) Controlar todos os feiticos<input type='radio'  name='poder' value='corvinal' id='corvinal'></input><br/>
                    b) Controlar os Elementos<input type='radio'  name='poder' value='lufa' id='lufa'></input><br/>
                    c) Controlar os Mortos<input type='radio'  name='poder' value='sonserina' id='sonserina'></input><br/>
                    d) Controlar as porcoes<input type='radio'  name='poder' value='grifinoria' id='grifinoria'></input><br/>
                    </label>
                    </div>
                    <div>
                    <label  className='form'>4.Você se considera:<br/>
                    a) Criativo<input type='radio'  name='jeito' value='corvinal' id='corvinal'></input><br/>
                    b) Controlador<input type='radio'  name='jeito' value='sonserina' id='sonserina'></input><br/>
                    c) Calmo<input type='radio'  name='jeito' value='lufa' id='lufa'></input><br/>
                    d) Observador<input type='radio'  name='jeito' value='grifinoria' id='grifinoria'></input><br/>
                    </label>
                    <label className='form'>5.Onde voce prefere passar as ferias?<br/>
                    a)Praia<input type='radio'  name='ferias' value='grifinoria' id='grifinoria'></input><br/>
                    b)Floresta<input type='radio'  name='ferias' value='corvinal' id='corvinal'></input><br/>
                    c)Cidade<input type='radio'  name='ferias' value='sonserina' id='sonserina'></input><br/>
                    d)Cruzeiro<input type='radio'  name='ferias' value='lufa' id='lufa'></input><br/>
                    </label>
                    <button  id='button' type='button' onClick={this.handleClick}  >Finalizar </button>
                    
                    </div>
                </form>
            </div>
        );
            
        
    }
}

export default Casas;