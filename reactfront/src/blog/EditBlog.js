import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const navigate = useNavigate()

    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            address: address
        })
        navigate('/')
    }

    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setFirstname(res.data.firstname)
        setLastname(res.data.lastname)
        setEmail(res.data.email)
        setPhone(res.data.phone)
        setAddress(res.data.address)
    }
    return (
        <div>
            <h3>Edit POST</h3> {/*creamos un post dentro de un block */}
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre:</label>
                    <input
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido:</label>
                    <input
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Telefono:</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Direccion:</label>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompEditBlog