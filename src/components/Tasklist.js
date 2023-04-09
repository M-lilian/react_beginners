import React from 'react'
import "./Tasklist.css"
import { useState } from 'react';
import  {Taskcard} from "./Taskcard";
import { BoxCard } from './BoxCard';
export const Tasklist = ({info}) => {

    const [tasks, setTasks] = useState([
        { id: 5271, name: "Record React Lectures", completed: true },
        { id: 7825, name: "Edit React Lectures", completed: false },
        { id: 8391, name: "Watch Lectures", completed: false }
      ]);
    
    const [ show, setShow] = useState(true)
    
      function handleDelete(id){
        setTasks(tasks.filter(task => task.id !==id))
      }

      const styles = {
        color:"#be3434",
        border: "2px solid", 
        borderColor: show ? "#3D8361" : "#be3434",
        fontSize: "28px",
        padding: "20px",
        borderRadius:"5px"
      }

    return (
        <section  className ="tasklist">
      
        <h1 style= {styles}>Tasks list</h1>
      <ul>
       
     
      <button className='trigger' onClick={ () =>  setShow(!show)}>{ show ? "Hide" : "Show"}</button>
      {show && tasks.map((task) => (
      <Taskcard key={task.id} info={info} task={task} handleDelete = {handleDelete} />
      ))}

      </ul>
     <BoxCard result="success">
      <p className="title"> Lorem, ipsum dolor.</p>
      <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, unde impedit et nobis similique adipisci vero dignissimos exercitationem atque sapiente a modi obcaecati alias, incidunt perspiciatis repudiandae iure ratione molestiae.</p>
         </BoxCard>
     

         <BoxCard result="warning">
         <p className="title"> Lorem, ipsum dolor.</p>
         <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, unde impedit et nobis similique adipisci vero dignissimos exercitationem atque sapiente a modi obcaecati alias, incidunt perspiciatis repudiandae iure ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque quo, dignissimos explicabo ratione sint provident iste consectetur eos unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit magni ullam tempora. Veniam nulla sit, ab, quae officiis possimus delectus eveniet soluta explicabo exercitationem eum, accusantium accusamus quam.</p>
            </BoxCard>
        
      
        </section>
    )
}
