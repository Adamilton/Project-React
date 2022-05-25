import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'

const Red = ({ description, deadline, color, deleteTask, i, editTask }) => {
  return (
    <>
      <div className={`card-box-${color}`}> <p>Descrição:</p> {description} <p>Prazo</p> {deadline}
        <div className='box-icone'>
          <BsFillTrashFill onClick={() => deleteTask(i)} />
          <FiEdit2 onClick={() => editTask(i)}   /> </div>
      </div>

    </>
  )
}

export default Red