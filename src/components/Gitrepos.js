import React from 'react'

export default function Gitrepos({ repo, repoName, repoDesc, click, onDelete }) {

    return (
        <div className="m-1">
            <div className="d-grid border border-2 border-dark my-1 p-1 overflow-auto">

                <button className="text-start p-2 btn overflow-auto" onClick={() => { click(repoName) }}>
                    <b>{repoName}</b>
                    <br />
                    {repoDesc}
                </button>
            </div>
            <hr />
            <div >
                <button type="button" onClick={() => onDelete(repo)} className="btn btn-sm btn-outline-danger m-1 ">
                    Delete repo
                </button>
            </div>
        </div>
    )
}
