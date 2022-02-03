import { setCookie } from 'nookies';
import React, { useState } from 'react';
import { API_URL } from '../config';
import styles from '../styles/Sign.module.css'
import Router from 'next/router';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const login = await fetch(`${API_URL}/user/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const loginResponse = await login.json();
      
      if(loginResponse.error) throw new Error(loginResponse.error);
  
      setCookie(null, 'token', loginResponse.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setCookie(null, 'user', loginResponse.user.email, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      Router.push('/notes');
      
    } catch (error) {
      console.log(error);
    }


    // console.log(loginResponse);
  }

  return (
    <div className={styles.sign}>
        <div className={styles.signInner}>
            <div className={styles.signInnerHeader}>
                <h1>Sign In</h1>
            </div>
            <div className="sign-inner-body">
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="inputEmail1">Email address</label> 
                        <input 
                          type='email' 
                          className={styles.formControl} 
                          id="inputEmail1" 
                          required 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="inputPassword">Password</label> 
                        <input 
                          type='password' 
                          className={styles.formControl} 
                          id="inputPassword" 
                          required 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.submit}>Sign in</button>
                </form>
            </div>
        </div>
    </div>
  );
}
