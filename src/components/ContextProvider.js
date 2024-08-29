import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const MyContext = createContext()
function ContextProvider({children}) {
    const [students, setStudents] = useState([])
    const [student_details, setStudent_details] = useState([])
    const [evaluations, setEvaluations] = useState([])
    const [subjects, setSubjects] = useState([])
    const [students_subjetcs, setStudents_subjetcs] = useState([])
    const [searchBox , setSearchBox] = useState('')
    
    useEffect(() => {
        const fetchData = async () => {
            const stuData = await axios.get(`http://localhost:9999/students`);
            setStudents(stuData.data)

            const stuDeData = await axios.get(`http://localhost:9999/student_details`);
            setStudent_details(stuDeData.data)

            const evaData = await axios.get(`http://localhost:9999/evaluations`);
            setEvaluations(evaData.data)

            const subData = await axios.get(`http://localhost:9999/subjects`);
            setSubjects(subData.data)

            const subDeData = await axios.get(`http://localhost:9999/students_subjetcs`);
            setStudents_subjetcs(subDeData.data)
        }
        fetchData()
    }, [])

    
    const getStreetStu = (stuId) => {
        const getStuDe = student_details.find(stuDe => stuDe.id == stuId)

        return getStuDe ? getStuDe : "Unknow"
    }


    const data = {
        students, setStudents,
        student_details, setStudent_details,
        evaluations, setEvaluations,
        subjects, setSubjects,
        students_subjetcs, setStudents_subjetcs,
        getStreetStu,
        searchBox , setSearchBox
       
    }
  return (
    <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider
