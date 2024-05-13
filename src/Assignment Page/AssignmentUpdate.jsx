import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";


const AssignmentUpdate = () => {
    const loadedAssignment = useLoaderData();
    const { title, description, marks, photo, difficultyLevel, date } = loadedAssignment
    const [startDate, setStartDate] = useState(new Date());

    const handleForm = async e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const difficultyLevel = form.difficultyLevel.value;
        const date = startDate
        const info = { title, description, marks, photo, difficultyLevel, date }
        console.log(info);

        fetch(`${import.meta.env.VITE_API_URL}/assignments/${loadedAssignment._id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('assignment successfully updated')
                }
            })
    }



    return (
        <div>
            <h2 className="text-center font-bold text-2xl mb-6">Update Assignments</h2>
            <form onSubmit={handleForm}>
                <div className='text-center space-y-8'>
                    <div>
                        <label>Title:</label>
                        <input defaultValue={title} className='border p-2 rounded-md' type="text" name="title" required />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input defaultValue={description} className='border p-2 rounded-md' type="text" name="description" required />
                    </div>
                    <div>
                        <label>Marks:</label>
                        <input defaultValue={marks} className='border p-2 rounded-md' type="number" name="marks" required />
                    </div>
                    <div>
                        <label>Image URL:</label>
                        <input defaultValue={photo} className='border p-2 rounded-md' type="text" name="photo" required />
                    </div>
                    <div>
                        <label>Assignment Difficulty Level:</label>
                        <select defaultValue={difficultyLevel} className='border p-2 rounded-md' name="difficultyLevel" required>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label>Due Date:</label>
                        <DatePicker className='border p-2 rounded-md' selected={date} onChange={(date) => setStartDate(date)} />
                    </div>
                    <button className='btn btn-active' type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default AssignmentUpdate;