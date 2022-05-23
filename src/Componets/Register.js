import React from 'react'
import { useState } from 'react';
import Board from './Board';

const Register = () => {
const [description, setDescription] = useState("");
const [deadline, setDeadline] = useState("")
const [status, setStatus] = useState("");
const [obj , setObj] = useState("");

const handleDescription = (e)=>{
    setDescription(e.target.value);
   
}



const handleSubmit = (e) =>{
    e.preventDefault();
    setObj({description,deadline,status})
}

console.log(status)
    return (
        <>
            <h2 className='title-register'>Cadastrar uma Tarefa</h2>
            <form onSubmit = {handleSubmit}>
                <div className="form-box">
                    <div className="register-box">
                        <fieldset className='input-register'>
                            <legend>Sua tarefa</legend>
                            <input type="text" onChange={handleDescription} />
                        </fieldset>
                    </div>
                    <div className="register-box">
                        <fieldset className='input-register'>
                            <legend>Prazo</legend>
                            <input type="datetime-local" onChange={(e) => setDeadline(e.target.value)} />
                        </fieldset>
                    </div>
                    <div className="register-box">
                        <fieldset className='input-register'>
                            <legend>Selecione o status</legend>
                            <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
                                <option value=""></option>
                                <option value="A Fazer">A Fazer</option>
                                <option value="Fazendo">Fazendo</option>
                                <option value="Finalizado">Finalizado</option>
                            </select>
                        </fieldset>
                    </div>

                </div>


                <div className='register-box'>
                    <input type="submit" className='register-btn' value="Inserir Tarefas" />
                </div>

            </form>
            <Board description = {obj.description} deadline ={obj.deadline} status={obj.status}/>
        </>

    )
}

export default Register