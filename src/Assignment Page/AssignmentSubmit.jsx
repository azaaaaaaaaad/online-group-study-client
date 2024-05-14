import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";


const AssignmentSubmit = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const assignment = useLoaderData();
    const { _id, title } = assignment;

    const handleForm = async e => {
        e.preventDefault()
        const form = e.target;
        const assignmentId = _id;
        const assignmentTitle = title
        const link = form.link.value;
        const note = form.note.value;
        const email = user.email;
        const status = 'pending'
        const info = { assignmentId, assignmentTitle, link, note, email, status }
        console.log(info);

        try {
            const { data } = await axios.post(`https://group-study-server-henna.vercel.app/assignments-submission`, info)
            console.log(data);
            toast.success('assignment submitted')
        } catch (error) {
            toast.error(error?.message)
        }

        form.reset('');
        navigate('/pending-assignments')
    }

    return (
        <div>
            <h2 className="text-center font-bold text-2xl mb-6">Assignment Submission Form</h2>
            <form onSubmit={handleForm}>
                <div className='text-center space-y-8'>
                    <div>
                        <label>Doc Link:</label>
                        <input className='border p-2 rounded-md' type="text" name="link" required />
                    </div>
                    <div>
                        <label>Quick Note Text</label>
                        <textarea className="border p-2 rounded-md" name="note" id=""></textarea>
                    </div>
                    {/* <div>
                        <label>User Email:</label>
                        <input className='border p-2 rounded-md' defaultValue={user?.email} type="text" name="email" required />
                    </div> */}
                    <button className='btn btn-active' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AssignmentSubmit;