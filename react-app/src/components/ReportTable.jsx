import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table"
import data from './data.json'
import { columns } from "./Column"
import '../index.css'

const ReportTable = () => {

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
        });

    return(
        <table>
            <thead>
                {
                    table.getHeaderGroups().map(headerGroups => (
                        <tr key={headerGroups.id}>
                        {
                            headerGroups.headers.map(headers => (
                                <th key={headers.id}>
                                    {flexRender(
                                        headers.column.columnDef.header,
                                        headers.getContext()
                                    )}
                                </th>
                            ))
                        }
                        </tr>
                    ))
                }
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
    )
}

export default ReportTable
