import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Layout from "../Main/Layout";

const Create = () => {
    const [nip, setNip] = useState();
    const [name, setName] = useState();
    const [jk, setJk] = useState();
    const [alamat, setAlamat] = useState();
    const [password, setPassword] = useState();

    const handleSave = () => {
        const data = { nip, name, jk, alamat, password };

        Inertia.post("/guru/store", data);
    };

    return (
        <Layout>
            <center>
                <br />
                <b>Tambah guru</b>
                <br />
                <table width="50%">
                    <tr>
                        <td width="25%">NIP</td>
                        <td width="25%">
                            <input onChange={(e) => setNip(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td width="25%">Name</td>
                        <td width="25%">
                            <input onChange={(e) => setName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td width="25%">Jenis Kelamin</td>
                        <td width="25%">
                            <input
                                type="radio"
                                name="jk"
                                onChange={(e) => setJk("L")}
                            />{" "}
                            Laki-laki
                            <input
                                type="radio"
                                name="jk"
                                onChange={(e) => setJk("P")}
                            />{" "}
                            Perempuan
                        </td>
                    </tr>
                    <tr>
                        <td width="25%">Alamat</td>
                        <td width="25%">
                            <textarea
                                cols="30"
                                rows="3"
                                onChange={(e) => setAlamat(e.target.value)}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td width="25%">Password</td>
                        <td width="25%">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className="button-primary"
                                onClick={handleSave}
                            >
                                Tambah
                            </button>
                        </td>
                    </tr>
                </table>
            </center>
        </Layout>
    );
};

export default Create;
