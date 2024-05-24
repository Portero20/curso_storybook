import React, { useState } from 'react'
import styles from './ToDo.module.css'

interface TodoProps {

    id: string;
    todo: string;
    isCompleted?: boolean

}

const ToDo = ({id, todo, isCompleted}: TodoProps) => {

  const [completed, setCompleted] = useState(isCompleted)

  return (
    
    <div className={styles.toDo}>
        <input type="checkbox" 
        id={id} 
        onChange={(e) => setCompleted(e.target.checked)} 
        checked={completed}
        />

        <span className={completed ? styles.completed : ''}>{todo}</span>
        
    </div>

  )
}

export default ToDo