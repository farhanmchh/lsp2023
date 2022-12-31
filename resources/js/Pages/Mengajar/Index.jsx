import React from "react"
import Layout from "../Main/Layout.jsx"

const Index = () => {
    return(
        <Layout>
            <center>
                <b><br />
                    LIST MENGAJAR
                    <br />
                    <button className="button-primary">Tambah Data</button>
                    <table className="table"cellpadding="10">
                        <tr>
                            <th>NO</th>
                            <th>NAMA GURU</th>
                            <th>MATA PELAJARAN</th>
                            <th>KELAS</th>
                            <th>ACTION</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Fani</td>
                            <td>Basis Data</td>
                            <td>12 RPL 1</td>
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
