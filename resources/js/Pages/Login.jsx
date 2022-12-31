<<<<<<< HEAD
import React from 'react'
import "../../css/style.css"
import { Head, Link } from '@inertiajs/inertia-react';
import headerImage from "../../src/images/header.jpg"
import galleryImage from "../../src/images/g2.jpg"


export default function Login (props) {
    console.log("props :", props)
    const onClickSiswa = () => {
        document.querySelector(".login-siswa").classList.toggle("d-none")
        document.querySelector(".login-guru").classList.add("d-none")
        document.querySelector(".login-admin").classList.add("d-none")
    }
    const onClickGuru = () => {
        document.querySelector(".login-siswa").classList.add("d-none")
        document.querySelector(".login-guru").classList.toggle("d-none")
        document.querySelector(".login-admin").classList.add("d-none")
    }
    const onClickAdmin = () => {
        document.querySelector(".login-siswa").classList.add("d-none")
        document.querySelector(".login-guru").classList.add("d-none")
        document.querySelector(".login-admin").classList.toggle("d-none")
    }
    return(
       <>
       <body>
            <div className='header'>
                <img src={headerImage} alt="" />
            </div>
            <div className='menu'>
                    <Link className='active bold' href=''>Home</Link>
            </div>
            <div className='kiri-atas'>
                <fieldset>
                    <legend></legend>
                    <center>
                        <b>Login sesuai dengan anda</b>
                    </center>
                    <center>
                        <button className="button" onClick={() => onClickSiswa()}>Siswa</button>
                        <button className="button" onClick={() => onClickGuru()}>Guru</button>
                        <button className="button" onClick={() => onClickAdmin()}>Admin</button>
                    </center>
                    <div className='table login-siswa d-none'>
                        <tr>
                            <td width='25%'>NIS</td>
                            <td width='25%'><input type="text" /></td>
                        </tr>
                        <tr>
                            <td width='25%'>Password</td>
                            <td width='25%'><input type="text" /></td>
                        </tr>
                        <tr>
                            <td colspan='2'>
                                <center>
                                    <button className='button-login'>LOGIN</button>
                                </center>
                            </td>                                
                        </tr>
                    </div>
                    <div className='table login-guru d-none'>
                        <tr>
                            <td width='25%'>NIP</td>
                            <td width='25%'><input type="text" /></td>
                        </tr>
                        <tr>
                            <td width='25%'>Password</td>
                            <td width='25%'><input type="text" /></td>
                        </tr>
                        <tr>
                            <td colspan='2'>
                                <center>
                                    <button className='button-login'>LOGIN</button>
                                </center>
                            </td>                                
                        </tr>
                    </div>
                    <div className='table login-admin d-none'>
                        <tr>
                            <td width='25%'>Kode Admin</td>
                            <td width='25%'><input type="text" /></td>
                        </tr>
                        <tr>
                            <td width='25%'>Password</td>
                            <td width='25%'><input type="text" /></td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <center>
                                    <button className='button-login'>LOGIN</button>
                                </center>
                            </td>                                
                        </tr>
                    </div>
                </fieldset>
            </div>
            <div className='kanan'>
                <center>
                    <b>
                    SELAMAT DATANG
                    <br />
                    DI WEB PENILAIAN SMKN 1 CIBINONG
                    </b>
                </center>
            </div>
            <div className='kiri-bawah'>
                <center>
                    <b>
                        <p className='mar'>GALLERY</p>
                    </b>
                    <div className='gallery'>
                        <img src={galleryImage} alt=''></img>
                        <div className='deskripsi'>SMK BISA</div>
                    </div>
                </center>
               
            </div>
            <div className='footer'>
                <b>
                    <p className='mar'>2023</p>
                </b>
            </div>
        </body>
       </>
=======
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";

export default function Login() {
    // const props = usePage().props;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        Inertia.post("/login", {
            username: username,
            password: password,
        });
    };

    return (
        <>
            <Head title="Login" />

            <div className="header">
                <img src="/gambar/header.jpg" height="40%" width="100%" />
            </div>

            <div className="menu">
                <b>
                    <a href="#" className="active">
                        Home
                    </a>
                </b>
            </div>

            <div className="kiri">
                <fieldset>
                    <legend></legend>

                    {/* <center>
                        <button
                            className="button"
                            onClick={() => {
                                setFormSiswaVisible(!formSiswaVisible);
                                setFormGuruVisible(false);
                                setFormAdminVisible(false);
                            }}
                        >
                            Siswa
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                                setFormGuruVisible(!formGuruVisible);
                                setFormSiswaVisible(false);
                                setFormAdminVisible(false);
                            }}
                        >
                            Guru
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                                setFormAdminVisible(!formAdminVisible);
                                setFormSiswaVisible(false);
                                setFormGuruVisible(false);
                            }}
                        >
                            Admin
                        </button>

                        <hr />
                        <b>Login sesuai dengan anda</b>
                        <hr />
                    </center> */}

                    <div
                    // style={{ display: formAdminVisible ? "block" : "none" }}
                    >
                        <center>
                            <b>Login</b>
                        </center>
                        <table>
                            <tr>
                                <td width="25%">Username</td>
                                <td width="25%">
                                    <input
                                        type="text"
                                        // name="username"
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td width="25%">Password</td>
                                <td width="25%">
                                    <input
                                        type="password"
                                        // name="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <center>
                                        <button
                                            className="button"
                                            type="button"
                                            onClick={() => handleLogin()}
                                        >
                                            Login
                                        </button>
                                    </center>
                                </td>
                            </tr>
                        </table>
                    </div>
                </fieldset>
            </div>

            <div className="kanan">
                <center>
                    <h1>
                        SELAMAT DATANG
                        <br />
                        DI WEB PENILAIAN SMKN 1 CIBINONG
                    </h1>
                </center>
            </div>

            <div className="kiri-bawah">
                <center>
                    <p className="mar">Gallery</p>
                    <div className="gallery">
                        <img src="/gambar/g2.jpg" />
                        <div className="deskripsi">SMK BISA</div>
                    </div>
                </center>
            </div>
        </>
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
    );
}
