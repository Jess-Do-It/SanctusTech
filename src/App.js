import React from "react"
import Header from "./Components/Header"
import BasicTable from "./Components/BasicTable"
import Create from "./Components/Create"
//import Fap from "./Components/onemoreTable"
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




export default function App() {
    return (
        <div>
        <Header />
        <Create/>
        <BasicTable />
        </div>
    )
}
