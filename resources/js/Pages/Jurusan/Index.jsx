import React from "react"
import Layout from "../Main/Layout.jsx"

const Index = () => {
    return(
        <Layout>
            <center>
                <b><br />
                    LIST JURUSAN
                    <br />
                    <button className="button-primary">Tambah Data</button>
                    <table className="table"cellpadding="10">
                        <tr>
                            <th>NO</th>
                            <th>JURUSAN</th>
                            <th>ACTION</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rekayasa Perangkat Lunak</td>
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
