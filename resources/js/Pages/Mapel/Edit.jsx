import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import Layout from '../Main/Layout';

const Edit = (props) => {
    const [nama_mapel, setNamaMapel] = useState();

    const {mapel} = props;

    const handleUbah = () => {
        const data = {
            id: mapel.id,
            nama_mapel
        }
        Inertia.post("/mapel/update", data);
        setNamaMapel("");
    }
    
    return(
        <Layout>
            <center>
                <b>
                    <br />
                    <table className="table" width="30%" cellPadding="5">
                        <thead>
                            <tr>
                                <th colSpan="2">EDIT MATA PELAJARAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MATA PELAJARAN</td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={(nama_mapel) => setNamaMapel(nama_mapel.target.value)}
                                        defaultValue={mapel.nama_mapel}
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
    )
}
export default Edit;
