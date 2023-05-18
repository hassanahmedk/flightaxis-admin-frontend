import { Button } from '@mui/material'
import React from 'react'

function Header(props) {
  return (
    <div id="header">
        <h1 className='main-heading'>
            Hello Admin
        </h1>
        <div className='total'>
            Total {props.label}s: <span> {props.count} </span>
        </div>
        <h2 className="details-heading">
            {props.label} Details:
        </h2>
        {
            props.label==="Flight" && <Button variant="contained" 
            sx={{
                alignSelf:"end",
                justifySelf:"end",
        
        }}
            className="add-flight" onClick={props.openAddFlightDialog}>
                Add Flight
            </Button>
        }
    </div>
  )
}

export default Header