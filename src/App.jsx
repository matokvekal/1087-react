import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Memo from "./memo/Memo";
import Fetch from "./fetch/Fetch";
import styled from "styled-components";
import FormikForm from "./formik/FormikForm";
import RegexDemo from "./RegexDemo";
import DataTableReact from "./datatable/DataTableReact";
import Ref from "./ref/Ref";

import { CustomHook } from "./customHook/CustomHook";

const Div = styled.div`
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: darkblue;
  }
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Div>i am styled-components</Div>
      <hr />

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/memo">Memo</Link>
            </li>
            <li>
              <Link to="/fetch">Fetch</Link>
            </li>
            <li>
              <Link to="/CustomHook">custom Hook</Link>
            </li>
            <li>
              <Link to="/formik">Formik</Link>
            </li>
            <li>
              <Link to="/regex">Regex</Link>
            </li>
            <li>
              <Link to="/datatable">DataTable</Link>
            </li>
            <li>
              <Link to="/Ref">Ref</Link>
            </li>
            <li>
              <Link to="/Bootstrap1">Bootstrap1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Hello Class!</div>} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/CustomHook" element={<CustomHook />} />
          <Route path="/formik" element={<FormikForm />} />
          <Route path="/regex" element={<RegexDemo />} />
          <Route path="/datatable" element={<DataTableReact />} />
          <Route path="/Ref" element={<Ref />} />
       
        </Routes>
      </Router>
    </>
  );
}

export default App;
