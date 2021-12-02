import React, { useEffect, useState } from 'react';

import IssuesName from './IssuesName';

export default function Branches(data) {

    const [b, setb] = useState([]);

    function deleteBranches(uu) {

        setb(b.filter((e) => {
            return e !== uu;
        })
        );
    }

    useEffect(() => {
        fetchBranch()
    }, []);

    async function fetchBranch() {
    
           await fetch(`https://api.github.com/repos/${data.githubUserName}/${data.w}/issues`).then(res => res.json()).then(data => {
                if (data=[]) {
                    data=[{title: "No issue is there"}];
                }
                setb(data);
            }).catch ((error)=> {
               console.log(error.message);
            })
        }  
    

    return (
           <>
            {b.map((x, i) => <IssuesName key={i} br={x} issueDesc={x.body} repoName={data.w}  issueName={x.title} onDelete={deleteBranches}/>)}
           </>
    )
}
