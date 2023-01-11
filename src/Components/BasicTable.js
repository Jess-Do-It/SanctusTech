import React, {useMemo} from 'react'
import { useTable, usePagination, useExpanded } from 'react-table'
import Data from './Data.json'
import './table.css'




function Table({ columns: userColumns, data, renderRowSubComponent }) {

  const tableInstance = useTable({
        columns: userColumns,
        data
    },useExpanded,usePagination
  )
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
      pageOptions, 
      gotoPage,
      pageCount,
    state: { pageIndex, pageSize,expanded }
  } = tableInstance



  const Pagination = function () {
        return (
          <div>
            <span>Page{" "}<strong>{pageIndex + 1} of {pageOptions.length}</strong></span>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<' }</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button> 
            <button onClick={() => nextPage()} disabled={!canNextPage}>{ '>'}</button> 
            <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>' }</button>
          </div>
        )
  }
  

    return (
    <>
      <pre>
          <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
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
          {page.map((row, i) => {
            prepareRow(row)
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {/* {renderRowSubComponent({ row })} */}
                      {/* console.log(renderRowSubComponent({ row})) */}
                      {console.log(row.index)}
                      {/* {console.log(Object.keys(expanded))} */}
                      <div>
                        Description  : {`${Data[row.index].configCDDesc}`}
                        <hr />
                        User Id      : {`${Data[row.index].userID}`}
                        <hr />
                        Last Updated :{`${Data[row.index].effectiveTS}`}
                      </div>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
        </table>
        <Pagination/>
      <br />
    </>
  )
}

     

const BasicTable = () => {



  // const lastColumn = `Description  : ${Data.configCDDesc}`
  // console.log(lastColumn)

  const COLUMNS = [
          {
        // Make an expander cell
        Header: () => null, // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
    {
        Header: "Code",
        accessor:"configCD",
    },
    {
        Header: "Config Type",
        accessor: "configType",
    },
    {
        Header: "Tenant",
        accessor:"tenantCD",
    },
    {
        Header: ' ',
        id: 'action',
        accessor: () => {
            return (
                <div>
                    <button>
                        Edit
                    </button>
                    <button>
                        Delete
                    </button>
                </div>
            )
        }
    }

]

const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Data, [])
    // Create a function that will render our row sub components
    const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  )
  
   
  return (
      <Table
        columns={columns}
        data={data}
        // We added this as a prop for our table component
        // Remember, this is not part of the React Table API,
        // it's merely a rendering option we created for
        // ourselves
        renderRowSubComponent={renderRowSubComponent}
      />

  )
}

export default BasicTable