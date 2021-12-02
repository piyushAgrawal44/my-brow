import React, { useEffect, useState } from 'react'
import Commit from './Commit'
export default function Commits(data) {
   
    const [commitName, setcommitName] = useState([])
    useEffect(() => {
       
        fetch(`https://api.github.com/repos/${data.githubUserName}/${data.repoName}/commits`).then(res => res.json()).then(content => {
        
          setcommitName(content);
          
        }).catch ((error)=> {
           console.log(error.message);
        })
        
    }, []);
   
    return (
        <div >
            <p>Commits is branch</p>
            {commitName.map((x,i)=> <Commit key={i}  y={x}/>)}
        </div>
    )
}
