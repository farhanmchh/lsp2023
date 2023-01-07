import { Inertia } from "@inertiajs/inertia";
import React, { Component, useState } from "react";
import Layout from "../Main/Layout";

const Create = () => {
    const [nama_jurusan, setNamaJurusan] = useState();

    const handleSimpan = () => {
        Inertia.post("/jurusan/store", {
            nama_jurusan: nama_jurusan
        })
    }
    return (
        <Layout>
            <center>
                <b>
                    <br />
                    <table className="table" width="30%" cellPadding="5">
                        <thead>
                            <tr>
                                <th colSpan="2">TAMBAH JURUSAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JURUSAN</td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setNamaJurusan(e.target.value)
                                        }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button
                                        className="button-primary"
                                        type="submit"
                                        onClick={() => handleSimpan()}
                                        >
                                        SIMPAN
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b>
            </center>
        </Layout>
    );
};

export default Create;
