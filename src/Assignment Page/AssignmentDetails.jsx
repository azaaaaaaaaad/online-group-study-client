import { Link, useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
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
                    <p>Deadline: {date}</p>
                    <Link to={'/assignments'} className="card-actions justify-end">
                        <button className="btn btn-active btn-block">Back In Assignments</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;