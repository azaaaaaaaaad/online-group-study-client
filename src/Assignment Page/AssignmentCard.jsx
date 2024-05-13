import { useState } from "react";
import { Link } from "react-router-dom";



const AssignmentCard = ({ assignment, handleDelete }) => {

    const { _id, title, description, marks, photo, difficultyLevel, date } = assignment;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Marks: {marks}</p>
                <p>Difficulty: {difficultyLevel}</p>
                <div className="card-actions">
                    <div className="join">
                        <Link to={`/assignments/${_id}`}><button className="btn join-item">View</button></Link>
                        <Link to={`/assignments-update/${_id}`}>
                            <button className="btn join-item">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;