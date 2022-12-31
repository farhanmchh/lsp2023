import React, { Component } from "react"

import Layout from "../Main/Layout.jsx"

const Index = () => {
    return(
        <Layout>
            <center>
                <b><br />
                    LIST GURU                    
                    <br />
                    <button className="button-primary">Tambah Data</button>
                    <table className="table"cellpadding="10">
                        <tr>
                            <th>NO</th>
                            <th>NIP</th>
                            <th>NAMA GURU</th>
                            <th>JENIS KELAMIN</th>
                            <th>ALAMAT</th>
                            <th>PASSWORD</th>
                            <th>ACTION</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>99099</td>
                            <td>Fani</td>
                            <td>Wanita</td>
                            <td>Bogor</td>
                            <td>123</td>
                            <td>
                                <button className="button-warning">Edit</button>
                                <button className="button-danger">Hapus</button>
                            </td>
                        </tr>
                    </table>
                </b>
            </center> 
        </Layout>
    )
}
export default Index;
