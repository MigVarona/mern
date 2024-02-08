import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const URI = "http://localhost:8000/blogs";

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Corrected function name
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get(URI);
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      // Corrected delete endpoint
      await axios.delete(URI + "/" + id);
      getBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Link to='/create' className="btn btn-primary mt-2 mb-2" ><i className="fa-solid fa-plus"></i></Link>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={ index }>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={"/edit/" + blog._id} className="btn btn-primary">
                    <i className="fa-regular fa-pen-to-square"></i>
              </Link> 
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
