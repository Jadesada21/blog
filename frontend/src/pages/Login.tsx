import { useNavigate } from "react-router-dom"


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { mutate, isPending, error } = useLogin()

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        mutate(
            { username, password },
            { onSuccess: () => navigate('/') }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />

            <button type="submit" disabled={isPending}>
                {isPending ? 'Login...' : 'Login Success'}
            </button>
            {error && <p>Login Failed</p>}
        </form>
    )
}