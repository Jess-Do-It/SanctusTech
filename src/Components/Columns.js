export const COLUMNS = [
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
        Header: 'Action',
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
    //  {
    //    Header: '',
    //    Cell: row => (
    //        <div>
    //            <button>Edit</button>
    //            <button>Delete</button>
    //        </div>
    //    )
    // }


]

