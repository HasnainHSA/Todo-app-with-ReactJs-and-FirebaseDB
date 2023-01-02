import React, { useState, useEffect } from 'react'
// import './App.css';
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
// firebase stuff:
import { db } from '../Firebase'
import { collection, addDoc, getDocs} from "firebase/firestore"; 
import { async } from '@firebase/util';


function Todo() {
const [inputvalue, setInputvalue] = useState("")
const [todoitems, setTodoitems] = useState(['assad'])
const [updateinput, setUpdateinput] = useState("")
const [indexnumber, setIndexnumber] = useState("")
const [refresh, setRefresh] = useState(false)

const dbcollection = collection(db, 'newtodos')

useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(dbcollection);
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({
          id: doc.id,
          value: doc.data().todoValue,
        });
      });
      setTodoitems([...arr]);
    }
    getData();
  }, [refresh]);




console.log("todo", inputvalue)

const addTodo = async()=>{  

    const obj = {
        todoValue: inputvalue 
      };
      const addtodo = await addDoc(dbcollection, obj)
  
  setRefresh(refresh)
//   todoitems.push(inputvalue);
//   setTodoitems([...todoitems])
  setInputvalue("")
}

const deleteAll= () =>{
   setTodoitems([])
}

const updatetodo = (ind) =>{
  todoitems.splice(ind, 1, updateinput)
  setTodoitems([...todoitems])
  setIndexnumber("")
  setUpdateinput("")

}

const deletetodo = (ind) =>{
  console.log("delete", ind)
  todoitems.splice(ind, 1)
  setTodoitems([...todoitems])
}

const edittodo =(ind)=>{
  setUpdateinput(todoitems[ind])
}
 return(
 
 <div className='wrapper'>
 <div>
  <h1>Todo app</h1>
 <input type="text"
 placeholder='enter your todos'
  onChange={(e)=> setInputvalue(e.target.value)}
  value={inputvalue}
 />
 </div>  
 <button onClick={addTodo} className='addbtn'>Add todo</button>
 <button onClick={deleteAll} className='delbtn' >Delete All</button>
 

<section>
 {todoitems.map((todo, ind)=>{
  return(
    <React.Fragment key={ind}>{ indexnumber === ind ? (
      <div>
        <input type="text" 
        placeholder='please update you todo'
        onChange={(e)=>setUpdateinput(e.target.value)}
        value={updateinput}
        autoFocus
        />
        <button onClick={()=>updatetodo(ind)} className='updatebtn'>update</button>
      </div>
    ):(
    <div className='todo' >
    {todo}
      <AiFillDelete className='icon up' onClick={()=>deletetodo(ind)}/>
      <BsFillPencilFill className='icon del'  onClick={()=>{{setIndexnumber(ind)
    edittodo(ind)  
    }}
  }/>
    </div>
    )
    }
    </ React.Fragment>
  )
 })
 }
 </section>
  </div>
 );
 
}

export default Todo;