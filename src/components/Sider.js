import React, { useContext, useState } from 'react'
import { MyContext } from './ContextProvider'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import axios from 'axios'
function Sider() {
    const {subjects,setSubjects} = useContext(MyContext)
    const [newSubject, setNewSubject] = useState({
      id: "",
      subjectId: "",
      name:""
    })
    console.log(newSubject);
    
    const [check, setCheck] = useState(false)
    const handleOnchange = (e) => {
      const {name, value} = e.target
      setNewSubject({...newSubject, [name] : value})
    }

    const handleClick = async(e) => {
      e.preventDefault();
      if(!newSubject.subjectId.trim() && !newSubject.name.trim()){
       setCheck(true)
        return;
      }
      const newSub = {...newSubject, id: subjects.length + 1}
      await axios.post('http://localhost:9999/subjects',newSub);
      setSubjects([...subjects, newSub])
      alert('Add Success')
    }
    
  return (
    <div>
        <h3>Subjects</h3>
      {subjects.map((item) => (
        <div style={{paddingLeft:'20px'}}><Link  to={`/student?subject=${item.subjectId}`}>{item.name}</Link></div>
      ))}

      <Form>
      <Form.Control name="subjectId" value={newSubject?.subjectId} onChange={handleOnchange} style={{marginBottom:'10px', marginTop:'10px',border:'1px solid black'}} placeholder='Enter SubjectId'/>
      {check && <p style={{color:'red'}}>SubjectId not empty</p>}
      <Form.Control name="name" value={newSubject?.name} onChange={handleOnchange} style={{border:'1px solid black', marginBottom:'10px'}} placeholder='Enter SubjectName'/>
      {check && <p style={{color:'red'}}>SubjectName not empty</p>}
      <button onClick={handleClick}>Add</button>
      </Form>
    </div>
  )
}

export default Sider
