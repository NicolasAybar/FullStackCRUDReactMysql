import axios from 'axios'
import {useState, useEffect} from 'react'//**hooks */
import {Link} from 'react-router-dom'
//import { getBlog } from '../../../node/controllers/BlogControllers.js'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () =>{
    //**configuro los hooks */
    const [blogs, setBlog] = useState([])
    useEffect(()=>{
        getBlogs()
    },[])
    //**procedimiento para mostrar todos los blogs */
    const getBlogs = async () =>{
        const res = await axios.get(URI)
        setBlog(res.data)
    }
    //**procedimiento para eliminar */
    const deleteBlog = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }
    return(
        //**busco en boostrap una tabla */
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>

                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.firstname}</td>
                                    <td>{blog.lastname}</td>
                                    <td>{blog.email}</td>
                                    <td>{blog.phone}</td>
                                    <td>{blog.address}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={()=> deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}
export default CompShowBlogs