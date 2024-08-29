import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function TableGrades() {
    const {evaluations,students} = useContext(MyContext)
    const {studentid} = useParams()
    
    
    const navigate = useNavigate()


        const find = evaluations.filter(evl => evl.studentId == studentid)
        console.log(find);
        const findName = students.find(evl => evl.studentId == studentid)?.name
        const handleClick = (e) => {
            e.preventDefault()
            navigate('/')
        }
        
    return (
    <div>
        <button className='btn btn-success' onClick={handleClick}>Back to Home</button>
        <h3 style={{textAlign:'center'}}>{findName}'s Grades Detail</h3>
      <table className='table table-bordered  table-striped table-hover'>
        <thead>
            <tr>
                <th>Grades</th>
                <th>Explanation</th>
            </tr>
        </thead>
        <tbody>
            {find?.map((evl) => (
                <tr>
                    <td>{evl.grade}</td>
                    <td>{evl.additionalExplanation}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableGrades
