import React, { useState } from 'react'
import styles from './login.module.css';
import { useDispatch } from 'react-redux';
import {signIn} from '../../data/adminSlice'
function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      password: password
    }

    dispatch(signIn(data))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Wellcome</h2>
      <form className={styles.form}  onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
        <input className={styles.input} type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        <button className={styles.btn} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login