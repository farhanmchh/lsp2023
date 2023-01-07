import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Layout from "../Main/Layout";

const Edit = (props) => {
    const [nama_jurusan, setNamaJurusan] = useState("");

    const {jurusan} = props;

    const handleUbah = () => {
        const data = {
            id: jurusan.id,
            nama_jurusan
        };
        Inertia.post("/jurusan/update", data);
        setNamaJurusan("");
    }
    return (
        <Layout>
            <center>
                <b>
                    <br />
                    <table className="table" width="30%" cellPadding="5">
                        <thead>
                            <tr>
                                <th colSpan="2">EDIT JURUSAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JURUSAN</td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={(nama_jurusan) => setNamaJurusan(nama_jurusan.target.value)}
                                        defaultValue={jurusan.nama_jurusan}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button
                                        className="button-primary"
                                        type="submit"
                                        onClick={() => handleUbah()}
                                        >
                                        UBAH
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

export default Edit;
