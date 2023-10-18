import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom'

export default function Simulation  ()  {
    const location = useLocation();
    const result = location.state?.values || '';
    console.log('valores:',result.monthlyPayment,result.totalAmount,result.bankName,result.qtdInstallments)
    return (
            <body>
                <main>
                    <div className="div-principal">
                        <div className="div-info-simu">
                            <img className="logo" src="../img/logo_verde.svg" alt="" />
                            <div className="div-valores">
                                <p className="p-valores">Valor das suas parcelas:</p>
                                <h1>{result.monthlyPayment}</h1>
                                <p className="p-valores">Valor final a Pagar:</p>
                                <h1>{result.totalAmount}</h1>
                                <p className="p-valores"><span className="cor-fin">*</span> <i>Financiamento em {result.qtdInstallments} meses.</i></p>
                            </div>

                            <div>
                            <Link to='/'><button>Voltar ao simulador</button></Link>
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


