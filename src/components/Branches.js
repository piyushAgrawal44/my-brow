import React, { useEffect, useState } from 'react';

import BranchName from './BranchName.js';

export default function Branches(data) {

    const [b, setb] = useState([]);

    function deleteBranches(uu) {

        setb(b.filter((e) => {
            return e !== uu;
        })
        );
    }

    useEffect(() => {
        fetchBranch();
    }, []);

    async function fetchBranch() {

           await fetch(`https://api.github.com/repos/${data.githubUserName}/${data.w}/branches`).then(res => res.json()).then(data => {
                setb(data);
            }).catch ((error)=> {
               console.log(error.message);
            })
        }  

    return (
           <>
            {b.map((x, i) => <BranchName key={i} br={x} githubUserName={data.githubUserName} name={x.name ? x.name : "no branch availeble"}  repoName={data.w}  onDelete={deleteBranches}/>)}
           </>
    )
}
