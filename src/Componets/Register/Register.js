import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card';
import Status from '../Status.js/Status';
import Title from '../Title/Title';

const Register = () => {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState("");
    const [cards, setCards] = useState([{ description: "test 1", deadline: "12/06/2022-17:48", status: "Finalizado" }, { description: "test 2", deadline: "12/05/2022-17:48", status: "A Fazer" }, { description: "test ", deadline: "29/05/2022-17:08", status: "Fazendo" }]);


    const AddTask = (task) =>{
        let alltasks = cards;
        alltasks.push(task);
        setCards(alltasks);

    }

    const strDate = (date)=>{
        const years = date.substr(0,4);
        const month = date.substr(5,2);
        const day = date.substr(8,2);
        const hours = date.substr(11,5);
        return `${day}/${month}/${years}-${hours}`
    }

    const reverserDate = (date) =>{
        const day = date.substr(0,2);
        const month = date.substr(3,2);
        const years = date.substr(6,4);
        const hours = date.substr(11,5);
        console.log(`${years}-${month}-${day}T${hours}`)
        return `${years}-${month}-${day}T${hours}`
    }

    const clearInput = () =>{
        setDescription("");
        setDeadline("");
        setStatus("");
    }

    const deleteTask = (index) =>{
        let deleteArr = cards.filter((obj,i)=> i!== index);
        console.log(deleteArr);
        setCards(deleteArr);
    }

    const editTask = (index) => {
        setStatus(cards[index].status);
        setDeadline( reverserDate(cards[index].deadline));
       
        console.log(cards[index])
        setDescription(cards[index].description)
        deleteTask(index);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return console.log("Prencher o campo descrição")
        if (!deadline) return console.log("Prencher o campo de prazo")
        if (!status) return console.log("Prencher o campo de status")

        const data = { description, deadline: strDate(deadline), status }
        AddTask(data);
        clearInput();
    }
    return (
        <>
            <Title text={"Cadastrar uma Tarefa"}/>
            <form onSubmit={handleSubmit}>
                <div className="form-box">
                    <div className="register-box">
                        <fieldset className='input-register'>
                            <legend>Sua tarefa</legend>
                            <input type="text" value={description} onChange={handleDescription} />
                        </fieldset>
                    </div>
                    <div className="register-box">
                        <fieldset className='input-register'>
                            <legend>Prazo</legend>
                            <input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                        </fieldset>
                    </div>
                    <Status setStatus={setStatus} status ={status}/>
                    {/* <div className="register-box">
                        <fieldset className='input-register'>
                            <legend>Selecione o status</legend>
                            <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value=""></option>
                                <option value="A Fazer">A Fazer</option>
                                <option value="Fazendo">Fazendo</option>
                                <option value="Finalizado">Finalizado</option>
                            </select>
                        </fieldset>
                    </div> */}

                </div>


                <div className='register-box'>
                    <input type="submit" className='register-btn' value="Inserir Tarefas" />
                </div>

            </form>


            <Title text={"Quadro de Tarefas"}/>
            <div className='box-color'>

                <div className='task-status'>
                <span className='red'>A Fazer</span>
                {
                    cards.map((c,i)=>(
                        (c.status==="A Fazer")? <Card key={i} description={c.description} deadline={c.deadline} color={"red"} i = {i} deleteTask = {deleteTask} editTask={editTask} />:null
                    ))
                }
                </div>
                <div className='task-status'>
                <span className='yellow'>Fazendo</span>
                {
                     cards.map((c,i)=>(
                        (c.status==="Fazendo")? <Card  key={i}  description={c.description} deadline={c.deadline} color={"yellow"} i = {i} deleteTask = {deleteTask} editTask={editTask} />: null
                    ))
                }
                </div>
                <div className='task-status'>
                <span className='green'>Finalizado</span>
                {
                     cards.map((c,i)=>(
                        (c.status==="Finalizado")? <Card  key={i}  description={c.description} deadline={c.deadline} color={"green"} i = {i} deleteTask = {deleteTask} editTask={editTask} />: null
                    ))
                }
                </div>
            </div>
        </>

    )
}

export default Register