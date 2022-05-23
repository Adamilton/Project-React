import React from 'react'

const Board = ({description, deadline,status }) => {
    console.log(description,deadline,status)
  return (
    <>
    <h2 className='title-register'>Quadro de Tarefas</h2>
    <div className='board-box'>
        <div className='task-status'><span className='red'>A Fazer</span>
        {(status === "A Fazer")? <div className='card-box-red'> <p>Descrição:</p> {description} <p>Prazo</p> {deadline} </div> : null}
        </div>
        <div className='task-status'><span className='yellow'>Fazendo</span>
        {(status === "Fazendo")? <div className='card-box-yellow'> <p>Descrição:</p> {description} <p>Prazo</p> {deadline}</div> : null}
        </div>
        <div className='task-status'><span className='green'>Finalizado</span>
        {(status==="Finalizado")? <div className='card-box-green' > <p>Descrição:</p> {description} <p>Prazo</p> {deadline} </div> : null}
        </div>
    </div>
    </>
  )
}

export default Board