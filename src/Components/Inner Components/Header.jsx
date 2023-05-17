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
            props.label==="Flight" && <button className="add-flight" onClick={props.openAddFlightDialog}>
                Add Flight
            </button>
        }
    </div>
  )
}

export default Header