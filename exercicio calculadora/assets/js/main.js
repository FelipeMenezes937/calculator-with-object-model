function Calculadora() {

        return{
        //atributos
        display: document.querySelector('.display'),


        //métodos
        inicia() {//sempre que eu quero referenciar uma chave do meu objeto
            //tem que usar "this."
            this.cliqueBotoes();
         
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        realizaConta(){
            let conta = this.display.value;
            
            // eval --> interprete como código js
            try{
                conta = eval(conta);
                console.log(conta)
                if(!conta){alert("caracteres inválidos")
                return
            }
            this.display.value = conta;
            ;
            } catch{
                alert("conta inválida")
            }
        },
        
        apagaUm(){
                this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay(){
            this.display.value = ' '
        },

            cliqueBotoes(){
                // this --> calculadora
                document.addEventListener('click', e => {
                    const el = e.target;
 
                    if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
             } 

             if(el.classList.contains('btn-clear')){
                this.clearDisplay();
           
             }
             if(el.classList.contains('btn-del')){
                this.apagaUm();
             }

             if(el.classList.contains('btn-eq'))
             this.realizaConta()
            }
            
            );

            },
           btnParaDisplay(valor){
          this.display.value += valor
;        },
    
        }
    }
       

const calculadora = new Calculadora();

calculadora.inicia();


