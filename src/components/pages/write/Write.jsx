import "./write.css"
export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""></img>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i></label>
                    <input type="file" if="fileinput" style={{ display: "none" }} />

                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story ... " type="text " className="writeInput writeText"></textarea>

                </div>
                <button className="writeSubmit">Publish
                </button>
            </form>
        </div>
    )
}