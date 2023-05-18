import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import { CarsTableComlumns } from "./columns";
import GlobalFilter from "../components/GlobalFilter";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import FormModal from "../../components/FormModal";
import HomeCreate from "../../Forms/HomeCreate";
import CarCreateForm from "../../Forms/CarCreateForm";

function CarsTable() {
  const [openModal, setOpenModal] = useState(false);

  const cars = useSelector((state) => state.cars.cars);

  const columns = useMemo(() => CarsTableComlumns, []);
  const data = useMemo(() => cars, [cars]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <FormModal openModal={openModal} setOpenModal={setOpenModal}>
        <CarCreateForm />
      </FormModal>
      <div className="tableHeader">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <p className="addBtn" onClick={() => setOpenModal(true)}>
          <i className="fa-solid fa-plus"></i>
          Add Car
        </p>
      </div>
      <div className="tableContainer">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "down"
                            : "up"
                          : ""}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              // console.log("table", row.allCells[0].row.original);
              return (
                <>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                    <Link
                      className="tableViewBtn"
                      to={`${row.allCells[0].row.original.id}`}
                      state={{
                        property_id: row.allCells[0].row.original.property_id,
                      }}
                    >
                      View
                    </Link>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
      />
    </>
  );
}

export default CarsTable;
