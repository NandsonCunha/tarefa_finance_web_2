import '../globals.css';
import React, { useEffect, useState } from 'react';
import { Request } from '@/helpers/Request';

export default function HomePage() {
  const [bancos, setBancos] = useState([]);
  const [selectedBanco, setSelectedBanco] = useState(null);
  const [maxInstallments, setMaxInstallments] = useState(null);

  useEffect(() => {
    Request('get', 'findAllBanks', '')
      .then(response => {
        setBancos(response.data)
      })
      .catch(error => console.log(error));
  }, []);

  const handleBancoChange = e => {
    const bancoId = e.target.value;
    setSelectedBanco(bancoId);
    setMaxInstallments(bancos.find(banco => banco.id == bancoId).max_installments);
    Request('get', `bank/${bancoId}`,'')
      .then(response => {
        console.log(response.bank);
      })
      .catch(error => console.log(error));
  };

  const renderInstallmentsOptions = () => {
    const options = [];
    for (let i = 1; i <= maxInstallments; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

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
            <form className="form-principal" action="">
              <div className="input-group">
                <input className="input" type="number" name="valor" required />
                <label className="valor" htmlFor="valor">
                  Valor
                </label>
              </div>

              <br />
              <select required onChange={handleBancoChange}>
                <option  disabled value="">
                  Selecione
                </option>
                {bancos.map(banco => (
                  <option key={banco.id} value={banco.id}>
                    {banco.name}
                  </option>
                ))}
              </select>
              <br />
              <select required>
                <option  disabled value="">
                  Selecione
                </option>
                {maxInstallments && renderInstallmentsOptions()}
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
