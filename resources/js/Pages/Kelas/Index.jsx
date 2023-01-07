import { Link } from "@inertiajs/inertia-react";
import React from "react"
import Layout from "../Main/Layout.jsx"

const Index = () => {
    return(
        <Layout>
            <center>
                <b><br />
                    LIST KELAS
                    <br />
                    <Link><button className="button-primary">Tambah Data</button></Link>                    
                    <table className="table"cellPadding="10">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>KELAS</th>
                                <th>JURUSAN</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>12 RPL 1</td>
                                <td>Rekayasa Perangkat Lunak</td>
                                <td>
                                    <button className="button-warning">Edit</button>
                                    <button className="button-danger">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b>
            </center> 
        </Layout>
    )
}
export default Index;
