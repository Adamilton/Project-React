import React from 'react'

const Status = ({status, setStatus}) => {
    return (
        <div className="register-box">
            <fieldset className='input-register'>
                <legend>Selecione o status</legend>
                <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value=""></option>
                    <option value="A Fazer">A Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Finalizado">Finalizado</option>
                </select>
            </fieldset>
        </div>
    )
}

export default Status