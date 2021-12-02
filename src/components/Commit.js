import React from 'react'

export default function Commit(data) {
    
    return (
        <div className="m-1 p-1">
           {data.y.commit.message}
           <hr/>
        </div>
    )
}
