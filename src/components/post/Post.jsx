import "./post.css";
export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1630246966103-22e603f58867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>

            <div className="postInfo">
                <div className="postCats">
                    <span className="postcat">Music </span>
                    <span className="postcat">Life</span>
                </div>
                <span className="postTitle">Lorem Ipsum is simply dummy</span>

                <hr />
                <span className="postDate"> 1 hour ago</span>  
                </div>
                <p className="postDes">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur</p>
        </div>
    )
}