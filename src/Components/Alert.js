import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height : '40px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type} : </strong>{props.alert.msg}
        {/* Scccess : msg */}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        {/* cross button  */}
      </div>}
    </div>

    // props.alert == null tha shurur mei isley shuru mei nhi cgalega 
  )
}
