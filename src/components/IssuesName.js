import React from 'react'

export default function IssuesName(data) {
   
    return (
        <div className="m-1 border border-1 overflow-auto p-2">
            <h4>{data.repoName}</h4>
            <h6>{data.issueName}</h6>
           <a href="#">{data.issueDesc}</a>
           <br />
           <hr />
           <div >
                <button type="button" onClick={() => data.onDelete(data.br)} className="btn btn-sm btn-danger m-1 ">
                    Delete issue
                </button>
            </div>
        </div>
    )
}
