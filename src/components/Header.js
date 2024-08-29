import React, { useContext } from 'react'
import {Form} from 'react-bootstrap'
import { MyContext } from './ContextProvider'
function Header() {
  const {searchBox , setSearchBox} = useContext(MyContext)
    const handleOnchange = (e) => {
      setSearchBox(e.target.value)
    }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Students Managerment</h1>
      <Form.Control value={searchBox} onChange={handleOnchange} style={{width: '70%', margin:'0 auto',border:'1px solid black'}} placeholder='Enter student name to search ...' />
    </div>
  )
}

export default Header
