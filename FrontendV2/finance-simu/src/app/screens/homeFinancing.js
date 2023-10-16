import '../globals.css';
import React, { use, useEffect, useState } from 'react';
import { Request } from '@/helpers/Request';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
  const [bancos, setBancos] = useState([]);
  const [selectedBanco, setSelectedBanco] = useState('');
  const [submitBanco,setSubmitBanco] = useState('')
  const [installMents,setInstallMents] = useState('')
  const [maxInstallments, setMaxInstallments] = useState(null);
  const navigate = useNavigate()
  const [value,setValue] = useState('')

  useEffect(() => {
    Request('get', 'findAllBanks', '')
      .then(response => {
        setBancos(response.data)
      })
      .catch(error => console.log(error));
  }, []);

  const handleBancoChange = e => {
    const bancoId = e.target.value;
    if(bancoId !== ''){
      setSelectedBanco(bancoId);
      setSubmitBanco(bancos.find(banco => banco.id == bancoId).name)
      setMaxInstallments(bancos.find(banco => banco.id == bancoId).max_installments);
      Request('get', `bank/${bancoId}`,'')
        .then(response => {
          console.log(response.bank);
        })
        .catch(error => console.log(error));
    }
     
  };
  const handleOption = (e) => {
      setInstallMents(e.target.value)    
  }
  const renderInstallmentsOptions = () => {
    const options = [];
    for (let i = 1; i <= maxInstallments; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };
 
  const data = {
    valueFinancing:value,
    name:submitBanco,
    qtdInstallments:installMents
  }
  const handleSubmit = () =>{
    Request('post','financing-simulation',data).then(response => {
      navigate('/simulation',{state:{values:response.calc}})
    }).catch(error => console.log(error))
  }
  return (
    <div>
      <main>
        <div className="div-principal">
          <div className="div-info">
            <img className="logo" src="/img/logo_verde.svg" alt="" />
            <h1>
              Simule seu o <br />
              <span className="cor-fin">financiamento</span>
            </h1>
            <br />
            <p>
              Escolha as melhores condições para <br /> o financiamento do seu
              veículo.
            </p>
            <img className="carro" src="../img/carro.png" alt="" />
          </div>
          <div className="div-form">
            <img className="emoji" src="../img/emoji.svg" alt="" />
            <p>
              Preencha os campos e simule <br /> o seu financiamento.
            </p>
            <br />
            <form className="form-principal" action="" method='post' onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                className='input' 
                type="number" 
                name="valor"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required />
                <label className='valor' htmlFor="valor">
                  Valor
                </label>
              </div>

              <br />
              <select required onChange={handleBancoChange} value={selectedBanco}>
                <option value="">Selecione um banco</option>
                {bancos.map(banco => (
                  <option key={banco.id} value={banco.id}>
                    {banco.name}
                  </option>
                ))}
              </select>
              <br />
              <select required onChange={handleOption} value={installMents}>
                <option value=''>
                  Em quantos meses? 
                </option>
                {(maxInstallments && renderInstallmentsOptions())}
              </select>
              <br />
              <input id="button" type="submit" value="Simular Financiamento" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
