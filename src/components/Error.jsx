import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center space-y-8'>
            <h2 className='text-2xl font-bold'>404, Page Not Found</h2>
            <h2>
            <Link><button className='btn btn-active'>Back To Home</button></Link>
            </h2>
        </div>
    );
};

export default Error;