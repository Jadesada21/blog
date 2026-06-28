import { Link } from "react-router-dom"
import Login from "../pages/Login"
import { useAuthStore } from "../store/auth.store"
import { useLogout } from "../hook/useLogout"


export const Navbar = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const { mutate: logout } = useLogout()



    return (
        <nav className="flex justify-between h-18 items-center px-6">

            <div className="font-bold text-2xl">
                <Link to="/">Blog</Link>
            </div>


            {isAuthenticated ? (
                <button
                    onClick={() => logout()}>Logout
                </button>
            ) : (
                <button>
                    <Login />
                </button>
            )}
        </nav >
    )
}