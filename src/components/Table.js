import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from './ContextProvider'
import { Link, useLocation } from 'react-router-dom'

function Table() {
  const { students, student_details, getStreetStu, searchBox, setSearchBox, students_subjetcs } = useContext(MyContext)
  const query = new URLSearchParams(useLocation().search)
  const subject = query.get('subject')

  const [subjectQuery, setSubjectQuery] = useState('')

  useEffect(() => {
    if (subject) {
      setSubjectQuery(subject)
    }
  }, [subject])

  const getStudentSubject = (stuId) => {
    const studentSubject = students_subjetcs.find(stusubject => stusubject.studentId == stuId)
    return studentSubject ? studentSubject : "Unknown"
  }

  const filtered = students.filter((stu) => {
    const matchSearch = stu.name.toLowerCase().includes(searchBox) || searchBox === ''
    const studentSubject = getStudentSubject(stu.studentId)
    const matchStudentSubject = studentSubject.subjectId == subjectQuery || subjectQuery === ''
    return matchSearch && matchStudentSubject
  })

  return (
    <div>
      <h3>List of Students</h3>
      <table className='table table-bordered table-striped table-hover'>
        <thead>
          <tr>
            <th>StudentId</th>
            <th>Name</th>
            <th>Age</th>
            <th>Street</th>
            <th>City</th>
            <th>isRegularStudent</th>
            <th>View grades</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((stu) => (
            <tr key={stu.studentId}>
              <td>{stu.studentId}</td>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{getStreetStu(stu.id)?.address?.street}</td>
              <td>{getStreetStu(stu.id)?.address?.city}</td>
              <td>{stu.isRegularStudent ? "Fulltime" : "Applicant"}</td>
              <td><Link to={`/student/${stu.studentId}`}>Grades</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
