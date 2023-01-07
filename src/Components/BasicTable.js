import React, { useState ,useMemo} from 'react'
import { useTable, usePagination } from 'react-table'
import { COLUMNS } from './Columns'
import Data from './Data.json'
import './table.css'

const BasicTable = () => {

    const Pagination = function () {
        return (
            <div>
                <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button> 
                <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>    
            </div>
        )
  }
  
const [tableData, setTableData] = useState(Data);
const [editingRow, setEditingRow] = useState();

const columns = useMemo(() => COLUMNS, [])
const data = useMemo(() => Data, [])
  
  

    const tableInstance = useTable({
        columns,
        data
    },usePagination
    )

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage
    }=tableInstance
  return (
      <div>
          <table {...getTableProps()}>
              <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
              <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          ) 
        })}
            </tbody>
          </table>
        <Pagination/>  
    </div>
  )
}

export default BasicTable
