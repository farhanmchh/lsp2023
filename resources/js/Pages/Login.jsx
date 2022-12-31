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
    );
}
