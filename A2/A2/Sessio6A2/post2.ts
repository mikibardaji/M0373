import Ajv from 'ajv'
import postSchema from './post.json' with { type: "json" }

export type Post =  {
    id: string
    createdAt: string
    updatedAt: string
    title: string
    content: string | null
    published: boolean
    authorId: string
}

const ajv = new Ajv()
const validatePost = ajv.compile(postSchema)

const post: Post = JSON.parse('{ "id": "12345", "title": "JSON validation" }')

console.log(`post validated? ${validatePost(post)}`)