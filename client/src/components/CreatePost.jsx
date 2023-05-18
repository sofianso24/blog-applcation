import React from 'react'
import ReactQuill from "react-quill" 
import "react-quill/dist/quill.snow.css"  


const CreatePost = () => {
  return (
    <form>
       <input type="title" placeholder='{title}' />
       <input type="summary" placeholder='{summary}' />
       <input type="file"  />
      <ReactQuill/>
    </form>
  )
}

export default CreatePost