import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import Layout from '../Main/Layout';

const Create = () => {
    const [nama_mapel, setNamaMapel] = useState();


    const handleSimpan = () => {
        Inertia.post("/mapel/store", {
            nama_mapel: nama_mapel
        })
    }
    return(
        <Layout>
            <center>
                <b>
                    <br />
                    <table className="table" width="30%" cellPadding="5">
                        <thead>
                            <tr>
                                <th colSpan="2">TAMBAH MATA PELAJARAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MATA PELAJARAN</td>
                                <td><input type="text" onChange={(e)=>setNamaMapel(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="button-primary" type="submit" onClick={() => handleSimpan()}>SIMPAN</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b>
            </center>
        </Layout>
    )
}
export default Create;
