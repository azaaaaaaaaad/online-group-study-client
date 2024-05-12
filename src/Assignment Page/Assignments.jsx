import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import Swal from "sweetalert2";


const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignments`)
            setAssignments(data)
        }
        getData()
    }, [])

    const handleDelete = (id) => {
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
                fetch(`${import.meta.env.VITE_API_URL}/assignments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            );
                            const remaining = assignments.filter(assignment=> assignment._id !== id)
                            setAssignments(remaining)
                        }
                    });
            }
        });
    };



    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Assignments</h2>
            <div className="container mx-auto gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    assignments.map(assignment =>
                        <AssignmentCard
                            key={assignment._id}
                            assignment={assignment}
                            handleDelete={handleDelete}
                        ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;