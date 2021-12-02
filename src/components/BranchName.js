import React, { useEffect, useState } from 'react'
import Commits from './Commits'
export default function BranchName(data) {
    const [state, setstate] = useState([])
    function onCommit(z){
       setstate([z]);
    }
    return (
      
        <div className="m-1 border border-1 overflow-auto p-2">
            <h5>{data.repoName}</h5>
           <div className="">
                <p>BranchName-</p>
                <button type="button" className="btn btn-outline-primary"  onClick={()=>onCommit(data.repoName)}>{data.name}</button>
                 <div className="heihtfix mt-1 p-1">
                 {state.map((x,i)=> <Commits githubUserName={data.githubUserName} key={i} repoName={x}/>)}

                 </div>
                        {/* <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Commits in Branch</h5>
                                        
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-form">
                                            <div className="row g-3">
                                             <Commits repoName={data.repoName}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
           </div>
           <br />
           <hr />
           <div >
                <button type="button" onClick={() => data.onDelete(data.br)} className="btn btn-sm btn-danger m-1 ">
                    Delete Branch
                </button>
            </div>
        </div>
    )
}
