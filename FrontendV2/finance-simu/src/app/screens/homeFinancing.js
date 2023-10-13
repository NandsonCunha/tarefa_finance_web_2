// pages/index.js
import '../globals.css';

export default function HomePage() {
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
              <select required>
                <option selected disabled value="">
                  Selecione
                </option>
                <option> Banco do Brasil</option>
                <option> Caixa Econômica Federal </option>
                <option> Bradesco</option>
                <option> Itaú</option>
                <option> Santander</option>
                <option> Sicoob</option>
                <option> Inter</option>
                <option> Original</option>
                <option> Nubank</option>
                <option> Picpay</option>
              </select>
              <br />
              <select required>
                <option selected disabled value="">
                  Selecione
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
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
