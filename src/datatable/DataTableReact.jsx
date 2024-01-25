import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import data from "./data.json"; // Import your JSON data

export default function DataTableReact() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log(data);
    setTableData(data);
  }, []);

  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Age", selector: "age", sortable: true },
    { name: "City", selector: "city", sortable: true },
  ];

  const handleDelete = (row) => {
    const updatedData = tableData.filter((item) => item.id !== row.id);
    setTableData(updatedData);
  };

  return (
    <>
      <h1>Data table</h1>
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        selectableRows
        selectableRowsHighlight

      />

      {/* <DataTable
        title="Data Table Example"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        selectableRows
        selectableRowsHighlight
        actions={[
          {
            icon: "delete",
            name: "Delete",
            onClick: (row) => handleDelete(row),
          },
        ]}
      /> */}
    </>
  );
}
