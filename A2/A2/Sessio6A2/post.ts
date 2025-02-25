export type Post = {
    id: string
    createdAt: string
    updatedAt: string
    title: string
    content: string | null
    published: boolean
    authorId: string
}