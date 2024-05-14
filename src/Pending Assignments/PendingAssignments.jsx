import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";


const PendingAssignments = () => {
    const { user } = useContext(AuthContext)
    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://group-study-server-henna.vercel.app/assignments-submission`)
            setSubmissions(data)
        }
        getData()
    }, [user])

    console.log(submissions);

    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className="flex items-center justify-center gap-8">
                <h2 className='text-2xl text-center font-bold'>Pending Assignments</h2>
                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {submissions.length} Assignment
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-black  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-blue-200'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Assignment Title</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Assignment Marks</span>
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Examinee Name</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Give Mark</span>
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {submissions.map(submission => (
                                        <tr key={submission._id}>
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {submission.assignmentTitle}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {submission.assignmentMarks}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {submission.name}
                                            </td>
                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <div className='flex items-center gap-x-2'>
                                                    <Link to={`/marks-distribution/${submission._id}`}>
                                                        <button className="btn-active btn-sm bg-blue-200 rounded-md">
                                                            Click
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PendingAssignments;