

const MarksDistribution = () => {


    
    return (
        <div>
            <h2 className="text-center font-bold text-2xl mb-6">Marks Distribution</h2>
            <form>
                <div className='text-center space-y-8'>
                    <div>
                        <label>Doc Link:</label>
                        <input className='border p-2 rounded-md' type="text" name="link" required />
                    </div>
                    <div>
                        <label>Quick Note Text</label>
                        <textarea className="border p-2 rounded-md" name="note" id=""></textarea>
                    </div>
                    <div>
                        <label>Marks:</label>
                        <input className='border p-2 rounded-md' type="number" name="marks" required />
                    </div>
                    <div>
                        <label>Feedback:</label>
                        <textarea className="border p-2 rounded-md" name="feedback" id=""></textarea>
                    </div>
                    <button className='btn btn-active' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MarksDistribution;