import React, { useEffect, useState } from 'react';
import "./body.css";
import Gitrepos from "./Gitrepos.js";
import Branches from "./Branches.js";
import GitAddedrepos from "./Gitaddedrepos";
import Issues from './Issues'
import Axios from "axios";
export default function Body({githubUserName}) {

    const [repositoryName, setrepositoryName] = useState([]);
    function click(x) {
        setrepositoryName([...repositoryName,[x]]);
        
    }

    function deleteRepo(uu) {

        setdetails(details.filter((e) => {
            return e !== uu;
        })
        );
    }
    function deleteAddedRepo(uu) {

        setnewRepoDetails(newRepoDetails.filter((e) => {

            return e !== uu;
        })
        );

    }

    const [details, setdetails] = useState([]);
    const [newRepoDetails, setnewRepoDetails] = useState([]);

    useEffect(() => {
        fetchRepo();
    }, []);

    async function fetchRepo() {
        await fetch(`https://api.github.com/users/${githubUserName}/repos`).then(res => res.json()).then(data => {
            setdetails(data);
        });
    }
    useEffect(() => {
        setNewRepo()
    }, []);

    async function setNewRepo() {
        await Axios.get("https://my-brow.herokuapp.com", {}).then(data => {
            setnewRepoDetails(data.data);
        });
    }

    const Details = () => {
        const URL = "https://my-brow.herokuapp.com";

        Axios.post(`${URL}/add`, {
            ownerName: document.getElementById('ownerName').value,
            name: document.getElementById('repoName').value,
            description: document.getElementById('repoDesc').value,
        }).then(() => alert("success"));
        document.getElementById('ownerName').value = "";
        document.getElementById('repoName').value = "";
        document.getElementById('repoDesc').value = "";
        window.location.reload();
    }
    

    return (
        <div className="container bg-light p-2 border border-1 border-dark">
            <div className="row p-1 pb-0">
                <div className="col-12 col-sm-5 border border-1 border-start-0 border-dark p-2">
                    <h5>Repositories</h5>
                    <div className="left-panel">
                        {newRepoDetails.map((x, i) =>
                            (< GitAddedrepos key={i} repo={x} repoName={x.name} githubUserName={githubUserName} repoDesc={x.description} click={click} onDelete={deleteAddedRepo} />)
                        )}
                        {details.map((x, i) =>
                            (< Gitrepos key={i} repo={x} repoName={x.name} githubUserName={githubUserName} repoDesc={x.description} click={click} onDelete={deleteRepo} />)
                        )}

                        <button type="button" className="round-button" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">ADD NEW REPOSITORY</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="modal-form">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label htmlFor="owner" className="form-label">Owner / Organization</label>
                                                    <input type="text" className="form-control" id="ownerName" />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="repoName" className="form-label">Repository Name</label>
                                                    <input type="text" className="form-control" id="repoName" />
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="repoDesc" className="form-label">Repository Description</label>
                                                    <input type="text" className="form-control" id="repoDesc" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" onClick={Details} className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-sm-7">

                    <div className=" border border-2 border-dark right-panel">

                        <div id="carouselExampleDark" className="carousel slide ">
                            <div>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="btn btn-sm btn-outline-primary m-2"
                                    aria-current="true" aria-label="Slide 1">BRANCHES</button>
                                <button type="button" className="btn btn-sm btn-outline-primary m-2" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2">ISSUES</button>
                            </div>

                            <div className="carousel-inner">

                                <div className="carousel-item active container">
                                    {repositoryName.map((x, i) => <Branches githubUserName={githubUserName} key={i}   w={x} />)}
                                </div>

                                <div className="carousel-item container">
                                    <div>
                                    {repositoryName.map((x, i) => <Issues githubUserName={githubUserName} key={i}  w={x} />)}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}
