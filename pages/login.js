import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
                    <Link href="/">
                        <img src="/images/logo.png" alt="Oyo Kids" className="left-logo" />
                    </Link>
                    <div className="left-tagline">Where Every Lesson<br />Feels Like <span>Play</span></div>
                    <p>The complete gamified English platform for primary school teachers worldwide</p>
                    <div class="hero-chips">
                        <span class="chip">Ages 4–11</span>
                        <span class="chip">Native Audio</span>
                        <span class="chip">Zero Prep</span>
                        <span class="chip">Any Device</span>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">
                <div className="right-inner">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Oyo Kids" className="logo_right" />
                    </Link>
                    <h1 className="welcome-text">
                        {activeTab === 'login' ? 'Welcome back' : 'Join us'} <span>!</span>
                    </h1>
                    <p className='l_pera'>
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
                                <span className="icon-box">
                                    <img src="/images/envelope.svg" alt="Oyo Kids" className="icon_field" />
                                </span>
                                <input type="email" className="auth-input" placeholder="name@school.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <span className="icon-box">
                                    <img src="/images/lock.svg" alt="Oyo Kids" className="icon_field" />
                                </span>
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
                                <label className="form-label">Full Name</label>
                                <span className="icon-box">
                                    <img src="/images/user.svg" alt="Oyo Kids" className="icon_field" />
                                </span>
                                <input type="text" className="auth-input" placeholder="john doe" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <span className="icon-box">
                                    <img src="/images/envelope.svg" alt="Oyo Kids" className="icon_field" />
                                </span>
                                <input type="email" className="auth-input" placeholder="name@school.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <span className="icon-box">
                                    <img src="/images/lock.svg" alt="Oyo Kids" className="icon_field" />
                                </span>
                                <input type="password" className="auth-input" placeholder="••••••••" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <span className="icon-box">
                                    <img src="/images/lock.svg" alt="Oyo Kids" className="icon_field" />
                                </span>
                                <input type="password" className="auth-input" placeholder="••••••••" />
                            </div>
                            <button className="btn-submit">Create Free Account</button>
                        </div>
                    )}

                    <div className="divider">
                        <div className="line"></div>
                        <span>or continue with</span>
                        <div className="line"></div>
                    </div>

                    <div className='g_fb_btn'>
                        <button><img src="/images/google.png" alt="google" className="icon_field" /> <span>Google</span></button>
                        <button><img src="/images/facebook.png" alt="facebook" className="icon_field" /> <span>Facebook</span></button>
                    </div>

                    
                    {/* {activeTab === 'login' ? 
                    <p className='lst_p'>Don't have an account? <Link href="">Sign up free</Link></p>
                    :
                    <p className='lst_p'>Already have an account? <Link href="">Login</Link></p>
                    } */}
                </div>

                <div className="color-strip-bottom"></div>
            </div>
        </div>
      </main>
    );
}