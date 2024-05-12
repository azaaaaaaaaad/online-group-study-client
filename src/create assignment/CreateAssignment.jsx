import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
    return (
        <form>
            <div className='text-center space-y-8'>
                <div>
                    <label>Title:</label>
                    <input className='border' type="text" name="title" required />
                </div>
                <div>
                    <label>Description:</label>
                    <input className='border'  type="text" name="description" required />
                </div>
                <div>
                    <label>Marks:</label>
                    <input className='border' type="number" name="marks" required />
                </div>
                <div>
                    <label>Thumbnail Image URL:</label>
                    <input className='border' type="text" name="thumbnailUrl" required />
                </div>
                <div>
                    <label>Assignment Difficulty Level:</label>
                    <select className='border' name="difficultyLevel" required>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label>Due Date:</label>
                    {/* <DatePicker selected={formData.dueDate} onChange={handleDateChange} /> */}
                </div>
                <button className='btn btn-active' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default CreateAssignment;