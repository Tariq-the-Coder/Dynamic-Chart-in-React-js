import { Button, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Chartapp from './Chartapp';

export default function Form() {
    const [subData, setSubData] = useState([]);
    const [finalData, setfinalData] = useState([]);

    function submitdata(subData) {
        setfinalData(All => [...All, subData])
        setSubData(subData = {})
        document.myForm.reset();
    }

    const style = { fontSize: "1.3rem", color: "#fff" }
    return (
        <div className='user-form'>
            <form action="" name="myForm" >
                <table>
                    <thead>
                        <TableRow>
                            <TableCell><TextField type="month" name={subData['sub']} onChange={(e) => setSubData({ ...subData, 'sub': e.target.value })} label=' ' variant="outlined" required /></TableCell>
                            <TableCell><TextField type="number" name={subData['sem']} onChange={(e) => setSubData({ ...subData, 'sem': e.target.value })} label='Value' variant="outlined" required /></TableCell>
                            <TableCell><Button variant='contained' onClick={() => submitdata(subData)} color="primary" >Add DATA</Button></TableCell>
                        </TableRow>
                        <TableRow style={{ height: "5px", backgroundColor: "#3f51b5" }} >
                            <TableCell style={style} >Month-Year</TableCell>
                            <TableCell style={style}  > Value</TableCell>
                            <TableCell style={style} >Value/10</TableCell>
                        </TableRow>
                    </thead>
                    <TableBody style={{ marginTop: "3rem" }}>
                        {finalData.map(data => (
                            <TableRow key={Math.random() * Math.random()}>
                                <TableCell style={{ fontSize: "1.3rem", color: "#000" }} color="secondary">{data.sub}</TableCell>
                                <TableCell style={{ fontSize: "1.3rem", color: "#000" }} color="secondary">{data.sem}</TableCell>
                                <TableCell style={{ fontSize: "1.3rem", color: "#000" }} color="secondary">{data.sem / 10}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </table>
            </form>
            <Chartapp data={finalData} />
        </div>
    )
}