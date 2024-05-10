import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        {/* <li> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Home</NavLink></li> */}
        {/* <li><NavLink to={'/artAndCraft'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>All Art & craft Items</NavLink></li> */}
        <li><NavLink to={'/assignments'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Assignments</NavLink></li>
        <li><NavLink to={'/login'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Login</NavLink></li>
        <li><NavLink to={'/register'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Register</NavLink></li>


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="flex-none gap-2">
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div> */}
                    <div className="navbar-center lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>Attempted Assignments</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;