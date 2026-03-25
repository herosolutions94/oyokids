import React, { useState } from 'react';
import Head from 'next/head';

export default function Login() {
    const [activeTab, setActiveTab] = useState('login');
    const [role, setRole] = useState('teacher');

    return (
      <main className='logd_sc'>
        <div className="auth-page">
            <Head>
                <title>Login - Oyo Kids</title>
                {/* Import the specific CSS here or in _app.js */}
            </Head>

            {/* LEFT PANEL */}
            <div className="left-panel">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="left-content">
                    <img src="/images/logo.png" alt="Oyo Kids" className="left-logo" />
                    <div className="left-tagline">Where Every Lesson<br />Feels Like <span>Play</span></div>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">
                <div className="right-inner">
                    <h1 className="welcome-text">
                        {activeTab === 'login' ? 'Welcome back' : 'Join us'} <span>!</span>
                    </h1>
                    <p style={{color: '#888', marginBottom: '20px', fontSize: '0.9rem'}}>
                        {activeTab === 'login' ? 'Sign in to access your classes' : 'Create your teacher account'}
                    </p>

                    <div className="tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Log In
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signup')}
                        >
                            Sign Up
                        </button>
                    </div>

                    {activeTab === 'login' ? (
                        <div className="login-form">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <span className="icon-box">✉</span>
                                <input type="email" className="auth-input" placeholder="name@school.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <span className="icon-box">🔒</span>
                                <input type="password" className="auth-input" placeholder="••••••••" />
                            </div>
                            <button className="btn-submit">Log In to Dashboard</button>
                        </div>
                    ) : (
                        <div className="signup-form">
                            <label className="form-label">I am a...</label>
                            <div className="role-selector">
                                <button className={`role-btn ${role === 'teacher' ? 'active' : ''}`} onClick={() => setRole('teacher')}>Teacher</button>
                                <button className={`role-btn ${role === 'school' ? 'active' : ''}`} onClick={() => setRole('school')}>School</button>
                                <button className={`role-btn ${role === 'parent' ? 'active' : ''}`} onClick={() => setRole('parent')}>Parent</button>
                            </div>
                            <div className="form-group">
                                <input type="text" className="auth-input" style={{paddingLeft: '20px'}} placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="auth-input" style={{paddingLeft: '20px'}} placeholder="Email" />
                            </div>
                            <button className="btn-submit">Create Free Account</button>
                        </div>
                    )}

                    <div className="divider">
                        <div className="line"></div>
                        <span>or continue with</span>
                        <div className="line"></div>
                    </div>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <button style={{flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid #eee', background: 'white', cursor: 'pointer', fontWeight: 700}}>Google</button>
                        <button style={{flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid #eee', background: 'white', cursor: 'pointer', fontWeight: 700}}>Facebook</button>
                    </div>
                </div>

                <div className="color-strip-bottom"></div>
            </div>
        </div>
      </main>
    );
}