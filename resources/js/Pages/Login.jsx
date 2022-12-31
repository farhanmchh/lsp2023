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
    );
}
