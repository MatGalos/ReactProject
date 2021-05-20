import React,{FC, useMemo} from "react";
import {useTable} from 'react-table';
import InternalReviews from '../../../../Data/InternalReviews.json'
import {Columns} from "./irDataTypes"
import '../../../styleHelpers/table.css'

const IRTable:FC=()=>{
    const columns=useMemo(()=>Columns,[])
    const data=useMemo(()=>InternalReviews,[])
    
    const tableInstance = useTable({
        columns:columns,
        data:data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    }=tableInstance

    return(
        <table{...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column)=>(
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                </tr>
                ))}
            </thead>
            <tbody{...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                        </tr>
                        )})}
            </tbody>
        </table>
    );
};
export default IRTable;