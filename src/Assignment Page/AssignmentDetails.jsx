import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const AssignmentDetails = () => {
    const { user } = useContext(AuthContext)
    const assignment = useLoaderData();
    const { _id, title, description, marks, photo, difficultyLevel, date } = assignment;
    return (
        <div className="container mx-auto">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Marks: {marks}</p>
                    <p>Difficulty: {difficultyLevel}</p>
                    <p>Description: {description}</p>
                    <p>Deadline: {new Date (date).toLocaleDateString()}</p>
                    {
                        user &&
                        <Link to={`/assignment-submit/${_id}`} className="card-actions justify-end">
                            <button className="btn btn-active btn-block">Take Assignment</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;