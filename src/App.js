import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Table from "./components/Table";
import TableGrades from "./components/TableGrades";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />}>
        <Route path="/" index element={<Table />} />
        <Route path="/student/:studentid" element={<TableGrades />} />
        <Route path="/student" element={<Table />}/>
      </Route>
      
    </Routes>
  );
}

export default App;
