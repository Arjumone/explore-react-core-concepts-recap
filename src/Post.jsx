import './Post.css'
export default function Post({post}){
    const {id,title,body}=post
    return (
        <div className="post">
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{body}</h2>
        </div>
    )
}