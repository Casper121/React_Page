import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    getFilteredRowModel,
} from "@tanstack/react-table"
import data from './data.json'
import { columns } from "./Column"
import '../index.css'
import { useState } from "react";

const ReportTable = () => {

    const [filtering, setFiltering] = useState("")

    const table = useReactTable({
        columns,
        data,

        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        
        state: {
            globalFilter: filtering,
        },

        onGlobalFilterChange: setFiltering,
    });

    return(
        <>
        <input type="text" value={filtering} onChange={e => setFiltering(e.target.value)}/>
        <table>
            <thead>
                {
                    table.getHeaderGroups().map(headerGroups => (
                        <tr key={headerGroups.id}>
                        {
                            headerGroups.headers.map(headers => (
                                <th 
                                    key={headers.id} 
                                    onClick={() => headers.column.getToggleSortingHandler()}>
                                        {headers.isPlaceholder ? null: (
                                        <div>
                                            {flexRender(
                                                headers.column.columnDef.header,
                                                headers.getContext()
                                            )}
                                        </div>
                                        )}
                                </th>
                            ))
                        }
                        </tr>
                    )
                )}
            </thead>
            <tbody>
                {
                    table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td>
                                    {flexRender(
                                        cell.column.columnDef.cell, 
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button 
            onClick={() => table.setPageIndex(0)} 
            disabled={!table.getCanPreviousPage()}
        >
            {'<<'}
        </button>
        <button 
            onClick={() => table.previousPage()} 
            disabled={!table.getCanPreviousPage()}
        >
            {'<'}
        </button>
        <button 
            onClick={() => table.nextPage()} 
            disabled={!table.getCanNextPage()}>
            {'>'}
        </button>
        <button 
        onClick={() => table.setPageIndex(table.getPageCount()-1)} 
        disabled={!table.getCanNextPage()}>
            
            {'>>'}
        </button>
        </>
    )
}

export default ReportTable
