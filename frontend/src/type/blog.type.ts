
export interface Blog {
    id: number
    title: string
    slug: string
    summary: string
    content: string
    coverImage: string
    coverImagePublicId: string
    viewCount: number
    isPublished: boolean
    createdAt: string
    updatedAt: string
    deletedAt: string | null
}

export interface BlogListResponse {
    data: Blog[]
    meta: {
        total: number
        page: number
        lastPage: number
    }
}