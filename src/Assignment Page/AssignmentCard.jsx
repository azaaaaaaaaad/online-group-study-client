
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";



const AssignmentCard = ({ assignment, assignments, setAssignments }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, creatorEmail, marks, photo, difficultyLevel, date } = assignment;
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (user.email === creatorEmail) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://group-study-server-henna.vercel.app/assignments/${id}`,
                    {credentials: 'include'}, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Assignment Deleted",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                const remaining = assignments.filter(assignment => assignment._id !== id)
                                setAssignments(remaining)
                            }
                        });
                }
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "You cannot delete this assignment",
                showConfirmButton: false,
                timer: 1500
            });
        }
        // navigate('/')
    };
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Marks: {marks}</p>
                    <p>Difficulty: {difficultyLevel}</p>
                    <p>Date: {new Date(date).toLocaleDateString()}</p>
                    <div className="card-actions">
                        <div className="join">
                            <Link to={`/assignments/${_id}`}><button className="btn join-item">View</button></Link>
                            <Link to={`/assignments-update/${_id}`}>
                                <button className="btn join-item">Update</button>
                            </Link>
                            {
                                user && <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;