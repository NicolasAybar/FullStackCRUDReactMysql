import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const navigate = useNavigate()
    //**metodo guardar */
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            firstname: firstname, lastname: lastname,
            email: email, phone: phone, address: address
        })//enviar los datos al backend
        navigate('/')//despues de guardar voy a la raiz
    }
    //para evitar el submit
    return (
        <div>
            <h3>Create POST</h3> {/*creamos un post dentro de un block */}
            <form onSubmit={store}>
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
export default CompCreateBlog