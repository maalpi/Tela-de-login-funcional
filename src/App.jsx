import { useState } from 'react'
import './App.css'
import Alerta from './components/alert/alerta';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  };

  
  const isValidPassword = (password) => {
    const regex = /^.{6,20}$/; 
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      setAlert({ show: true, type: 'error', message: 'Email inválido!' });
      return;
    }
    if (!isValidPassword(password)) {
      setAlert({
        show: true,
        type: 'error',
        message: 'A senha deve ter entre 6 e 20 caracteres.',
      });
      return;
    }
    setAlert({ show: true, type: 'success', message: 'Login realizado com sucesso!' });
    setPassword('');
    setEmail('');
  };

  const closeAlert = () => {
    setAlert({ show: false, type: '', message: '' });
  };

  return (
    <div className="container">
      <form className="box" onSubmit={handleSubmit}>
        <h1 id="title">Login</h1>
        <div className='grid'>
          <label htmlFor="email" id="label">Email</label>
          <input
            type="email"
            className='input'
            placeholder="Digite seu email..."
            id="email"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className='grid'>
          <label htmlFor="senha" id="label">Senha</label>
          <input
            type="password"
            className='input'
            placeholder="Digite sua senha..."
            id="senha"
            value={password}
            onChange={passwordChange}
          />
        </div>

        <button id="btn" type="submit">
          Entrar
        </button>
      </form>

      {alert.show && (
        <Alerta
          type={alert.type}
          message={alert.message}
          onClose={closeAlert}
        />
      )}
    </div>
  )
}

export default App
