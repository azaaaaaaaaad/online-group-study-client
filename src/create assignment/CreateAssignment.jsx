import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateAssignment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const handleForm = async e => {
        e.preventDefault()
        const form = e.target;
        const name = user.displayName;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const difficultyLevel = form.difficultyLevel.value;
        const date = startDate
        const creatorEmail = form.creator_email.value;
        const info = { name, title, description, marks, photo, difficultyLevel, date, creatorEmail }
        console.log(info);

        try {
            const { data } = await axios.post(`https://group-study-server-henna.vercel.app/assignments`, info)
            console.log(data);
            toast.success('assignment created successfully')
        } catch (error) {
            toast.error(error?.message)
        }
        navigate(`/assignments`)
        form.reset('');
    }

    return (
        <div>
            <h2 className="text-center font-bold text-2xl mb-6">Create Assignments</h2>
            <form onSubmit={handleForm}>
                <div className='text-center space-y-8'>
                    {/* <div>
                        <label>Name:</label>
                        <input defaultValue={user.displayName} className='border p-2 rounded-md' type="text" name="title" required />
                    </div> */}
                    <div>
                        <label>Title:</label>
                        <input className='border p-2 rounded-md' type="text" name="title" required />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input className='border p-2 rounded-md' type="text" name="description" required />
                    </div>
                    <div>
                        <label>Marks:</label>
                        <input className='border p-2 rounded-md' type="number" name="marks" required />
                    </div>
                    <div>
                        <label>Image URL:</label>
                        <input className='border p-2 rounded-md' type="text" name="photo" required />
                    </div>
                    <div>
                        <label>Assignment Difficulty Level:</label>
                        <select className='border p-2 rounded-md' name="difficultyLevel" required>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label>Due Date:</label>
                        <DatePicker className='border p-2 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div>
                        <label>Creator Email:</label>
                        <input className='border p-2 rounded-md' defaultValue={user?.email} type="text" name="creator_email" required />
                    </div>
                    <button className='btn btn-active' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;