import React from 'react';

export default function Simulation  ()  {
    return (
            <body>
                <main>
                    <div className="div-principal">
                        <div className="div-info">
                            <img className="logo" src="../img/logo_verde.svg" alt="" />
                            <div className="div-valores">
                                <p className="p-valores">Valor das suas parcelas:</p>
                                <h1>Aqui</h1>
                                <p className="p-valores">Valor final a Pagar:</p>
                                <h1>Aqui</h1>
                                <p className="p-valores"><span className="cor-fin">*</span> <i>Financiamento em 48 meses.</i></p>
                            </div>

                            <div>
                                <a href="./index.html"><button>Voltar ao simulador</button></a>
                            </div>
                            <p className="p-valores tdr">Todos os direitos reservados</p>
                        </div>
                        <div className="div-foto">
                            <img className="foto" src="../img/foto-mulher.png" alt="" />
                        </div>
                    </div>
                </main>
            </body>
    );
};


