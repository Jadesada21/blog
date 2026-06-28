import { useQuery } from "@tanstack/react-query"
import { getAllBlog } from "../api/blog.api"
import type { BlogListResponse } from "../type/blog.type"


export const useBlogs = (page = 1, limit = 10) => {
    return useQuery<BlogListResponse>({
        queryKey: ['blogs', page, limit],
        queryFn: () => getAllBlog(page, limit)
    })
}