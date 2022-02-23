import React, {Component} from 'react';
import Botao from './Componentes/Botao';
import './estilo.css'


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            textoFrase:'',
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases=['Siga os Bons e aprenda com eles.', 'O riso é a menor distância entre duas pessoas.', 'Deixe de lado a preocupação e seja feliz.', 'Realize o óbvio, pense o improvável e conquiste o impossível.', 'Acredite em milagres, mas não dependa deles.', 'A maior barreira para o sucesso é o medo de fracassar.', 'A vida trará coisas boas se tiver paciência.', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'A maior de todas as torres começa no solo.', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 'Sem o fogo do entusiasmo, não há o calor da vitória.', 'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.', 'Todas as coisas são difíceis antes de se tornarem fáceis.', 'Você é do tamanho do seu sonho.', 'Nós somos o que pensamos.', 'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.', 'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.', 'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.', 'A inspiração vem dos outros. A motivação vem de dentro de nós.', 'A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!'];
    };

    quebraBiscoito(){
       let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);

    }

    render(){
        return(
            <div className='container'>
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome='Abrir biscoito' acaoBtn={this.quebraBiscoito}/>
                <h3 className='textoFrase' >{this.state.textoFrase}</h3>
            </div>
        )
    }

}

export default App;