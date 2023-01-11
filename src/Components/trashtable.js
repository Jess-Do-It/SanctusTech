




// import React from "react";
// import tableData from './tableData.json'
// import {
//   useTable,
//   usePagination,
//   useExpanded,
//   useRowSelect,
//   useGroupBy
// } from "react-table";


// function Table({ columns, data }) {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page, // Instead of using 'rows', we'll use page,
//     // which has only the rows for the active page
//     // The rest of these things are super handy, too ;)
//   } = useTable(
//     {
//       columns,
//       data
//     },
//     useGroupBy,
//     useExpanded,
//     usePagination,
//     useRowSelect,
//     );

//   // Render the UI for your table
//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
      
//     </>
//   );
// }

// function Tab() {
//   const columns = React.useMemo(
//       () => [
//     {
//             Header: " ",
//         accessor:"First Name",
        
//     columns:[
//       {
//         // Build our expander column
//         id: "expander", // Make sure it has an ID
//         Header: " ",
//         Cell: ({ row }) =>
//           // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
//           // to build the toggle for expanding a row
//             <span
//               {...row.getToggleRowExpandedProps({
//                 style: {
//                   // We can even use the row.depth property
//                   // and paddingLeft to indicate the depth
//                   // of the row
//                   paddingLeft: `${row.depth * 2}rem`
//                 }
//               })}
//             >
//                 {row.isExpanded ? <button>🔽</button> : <button>▶️</button>}
//                 {/* <p>Helloss</p> */}
//             </span>
    
//           },
      
  
//           {
//             Header: "First Name",
//             accessor: "firstName"
//           },
//           {
//             Header: "Last Name",
//             accessor: "lastName"
//           }
// ,

//           {
//             Header: "Age",
//             accessor: "age"
//           },
//           {
//             Header: "Visits",
//             accessor: "visits"
//           },
//           {
//             Header: "Status",
//             accessor: "status"
//           },
//           {
//             Header: "Profile Progress",
//             accessor: "progress"
//                   }
//               ]
//           }
//     ],
//     []
//     );


//   const data = React.useMemo(() => tableData, [])
//   console.log(data)

//   return (
//       <Table columns={columns} data={data} />
//   );
// }

// export default Tab;