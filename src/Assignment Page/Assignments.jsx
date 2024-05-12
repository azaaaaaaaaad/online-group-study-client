import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/assignments`)
            setAssignments(data)
        }
        getData()
    }, [])



    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Assignments</h2>
            <div className="container mx-auto gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    assignments.map(assignment =>
                        <AssignmentCard
                            key={assignment._id}
                            assignment={assignment}
                        ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;