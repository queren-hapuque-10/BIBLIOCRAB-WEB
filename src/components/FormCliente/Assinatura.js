import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Assinatura.css';

function Assinatura (){
	

const [idAssinatura, setIdAssinatura] = useState();
const [pagamento, setPagamento] = useState();
const [numero, setNumero] = useState();
const [validade, setValidade] = useState();
const [cvv,setCvv] = useState();
const [nome, setNome] = useState();
const [sobrenome, setSobrenome] = useState();




const { state } = useLocation();
   useEffect(() => {
	
	if (state != null && state.id != null) {
	axios.get( "api/assinatura/" + state.id)
    .then((response) => {
	setIdAssinatura(response.data.id)
	setPagamento(response.data.pagamento)
    setNumero(response.data.numero)
	setValidade(formatarData(response.data.validade))
    setCvv(response.data.cvv)
    setNome(response.data.nome)
	setSobrenome(response.data.sobrenome)


		})
	}
   }, [state])


	function salvar () {

		let assinaturaRequest = {
			pagamento:pagamento,
            numero:numero,
			nome:nome,
			validade:validade,
            cvv:cvv,
			sobrenome:sobrenome,
		}

		if (idAssinatura != null) { //Alteração:
			axios.put( "api/assinatura/" + idAssinatura, assinaturaRequest)
			.then((response) => { console.log('assinatura alterada com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar a assinatura.') })
		} else { //Cadastro:
			axios.post( "api/assinatura", assinaturaRequest)
			.then((response) => { console.log('assinatura Cadastrada com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir a assinatura.') })
		}
 
	}

	function formatarData(dataParam) {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    }
	
        return(

           /* <label>Ativo: </label>

            <Form.Radio
                label='Sim'
                checked={ativo}
                onChange={e => setAtivo(true)}
            />
            
            <Form.Radio
                label='Não'
                checked={!ativo}
                onChange={e => setAtivo(false)}
            />*/

            <div className="cad-cliente">
         {/*<div className='crab-img'>
    <img src = {crab} alt = "" />
     </div>*/} 
            <div class="form-assinatura" id="formassinatura">
         
                <form action="#">
                <p id="cad">Assinatura</p>

                <div class="input-assinatura" id="select">
                        <label for="pagamento">Selecione seu plano</label>
                        <select name="pagamento" id="pagamento">
                            <option value="1" id="selecionar"> Selecionar</option> 
                            <option value="2">Mensal</option>
                            <option value="3"> Trimestral</option>
                            <option value="4"> Semestral</option>  
                        </select>
                        </div>
                
                        <div class="input-assinatura" id="numcad">
                        <label for="data"> Número </label>
                        <input type="date" name="data" id="data"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                        />
                    </div>   
    
                    <div class="input-assinatura" id="valcad">
                        <label for="validade"> Data de Validade </label>
                        <input type="date" name="data" id="data"
                        value={validade}
                        onChange={e => setValidade(e.target.value)}
                        />
                    </div>

                    <div class="input-assinatura" id="cvvcad">
                            <label for="cvv"id="cvvlab">CVV</label>
                            <input type="Cvv" id="cvv" placeholder="Ex: 123" 
                            value={cvv}
                            onChange={e => setCvv(e.target.value)}
                            required/>
                        </div>

                        <div class="input-assinatura" id="nomecad">
                        <label for="nome" id="nomelab">Nome </label>
                        <input type="text" id="nome" placeholder="Digite o seu nome completo" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required/>
                    </div>
                   
                        <div class="input-assinatura" id="sobcad">
                            <label for="sobrenome" id="soblab">Sobrenome</label>
                            <input type="sobrenome" id="sobrenome" placeholder="999.999.999-99" 
                            value={sobrenome}
                            onChange={e => setSobrenome(e.target.value)}
                            required/>
                        </div>

                        <div class="input-cadastro" id="primbutcad">
                        <Link to={"/cadcliente"}>
                    <button id='primbotao'>Voltar</button>
                    </Link>
                    </div>
                    
                    <div class="input-cadastro" id="segbutcad">
                    <Link to={"/"}>
                    <button id='segbotao' >Confirmar</button>
                    </Link>
                </div>
    
                </form>
            </div>
            </div>
        
            
      );
}
	export default Assinatura;