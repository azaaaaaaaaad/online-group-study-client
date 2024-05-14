import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Assignments = () => {
    const { user } = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://group-study-server-henna.vercel.app/assignments`)
            setAssignments(data)
        }
        getData()
    }, [])

    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://group-study-server-henna.vercel.app/assignments/${id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Assignment has been deleted.',
    //                             'success'
    //                         );
    //                         const remaining = assignments.filter(assignment => assignment._id !== id)
    //                         setAssignments(remaining)
    //                     }
    //                 });
    //         }
    //     });
    // };

    const handleDifficultyChange = (e) => {
        setSelectedDifficulty(e.target.value);
    };

    // Filter assignments based on selected difficulty level
    const filteredAssignments = selectedDifficulty === "All" ? assignments : assignments.filter(assignment => assignment.difficultyLevel === selectedDifficulty);

    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Assignments</h2>
            <div className="filter-dropdown">
                <select value={selectedDifficulty} onChange={handleDifficultyChange}>
                    <option value="All">All Difficulty Levels</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="container mx-auto gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredAssignments.map(assignment =>
                        <AssignmentCard
                            key={assignment._id}
                            assignment={assignment}
                            assignments={assignments}
                            setAssignments={setAssignments}
                        // handleDelete={handleDelete}
                        ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;