import { Navbar } from "../components/Navbar"
import { useBlogs } from "../hook/useBlog"

export default function Home() {
    const { data: blogResponse, isLoading, error } = useBlogs()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Something mistake</div>

    return (
        <div className="min-h-screen bg-gray-700 pt-10">

            <div className="border-b pb-10 px-10">
                <Navbar />
            </div>

            <div className="py-2 px-10">
                {blogResponse?.data.map((blog) => (
                    <div key={blog.id}>
                        <img src={blog.coverImage} alt={blog.title} />
                        <h1>{blog.title}</h1>
                        <p>{blog.summary}</p>
                    </div>
                ))}</div>

        </div>
    )
}