import React from "react";
import "./header.css"

export default function Header(){
    return(
        <div className="header">
        <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.unsplash.com/photo-1611318293929-6973206e3e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>

    )
}