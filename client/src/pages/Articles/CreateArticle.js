import React from 'react'

const CreateArticle = () => {
  return (
    <div className="container-fluid mt-5">
      <form className="mx-auto w-25">
      <h4 className="text-center text-white">Create New Blog</h4>
        <div className="mb-3">
          <label className="form-label text-white">
            Title
          </label>
          <input
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">
            Category
          </label>
          <input
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">
            Description
          </label>
          <textarea class="form-control" style={{height: "100px"}}></textarea>
        </div>
        <button type="submit" className="btn btn-primary d-flex justify-content-center text-white">
          Add Blog
        </button>
      </form>
    </div>
  )
}

export default CreateArticle