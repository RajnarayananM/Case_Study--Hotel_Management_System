import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import StaffService from '../../services/StaffService'
import { Link, useHistory } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const useStyles=makeStyles({
    id:{
        width:1000,
    },
    type:{
        width:1000
    },
    name:{
        width:1000
    },
    stock:{
        width:1000
    }
})
export default function AddStaff() {
    const [staffId, setStaffId] = useState('')
    const [staffType, setStaffType] = useState('')
    const [staffName, setstaffName] = useState('')
    const history=useHistory()

    const saveStaff =(e)=>{
    e.preventDefault();

    const staff={staffId,staffType,staffName}
    StaffService.addStaff(staff).then((response)=>{
        console.log(response.data)
        history.push('/middle/sroom')
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <>
        <Header></Header>
            <div style={{ marginTop: 100, maxWidth: "100%", width: "80%" }} className='container'>
            <br></br><br></br>
            <h1>Enter Staff Details</h1>
            <TextField variant="outlined" label="Staff ID" placeholder='Enter a staff Id' 
                className={classes.id} value={staffId} onChange={(e)=>setStaffId(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Staff Type" placeholder='Enter the type of staff'
                className={classes.type} value={staffType} onChange={(e)=>setStaffType(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="outlined" label="Staff Name" placeholder='Enter the name of staff'
                className={classes.name} value={staffName} onChange={(e)=>setstaffName(e.target.value)}>
            </TextField>
            <br></br><br></br>
                
            <Button variant='contained' onClick={(e)=>saveStaff(e)}>Add Staff</Button>&nbsp;&nbsp;&nbsp;
            <Button variant='outlined'><Link to='/middle/sroom'>Back</Link></Button>
        </div>
        <Footer></Footer>
        </>
    )
}