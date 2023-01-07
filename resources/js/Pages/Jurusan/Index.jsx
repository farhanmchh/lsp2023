import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react"
import Layout from "../Main/Layout.jsx"

const Index = (props) => {
    // console.log(props);
    const {jurusan} = props; //jurusan = var yg di controller method index
    return(
        <Layout>
            <center>
                <b><br />
                    LIST JURUSAN
                    <br />
                    <Link href="/jurusan/create">
                        <button className="button-primary">Tambah Data</button>
                    </Link>
                    <table cellPadding="10">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>JURUSAN</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        {jurusan.map((myJurusan,i) => (
                        <tbody key={i}>
                            <tr>
                                <td>{++i}</td>
                                <td>{myJurusan.nama_jurusan}</td>
                                <td>
                                    <Link href="/jurusan/edit" data={{id:myJurusan.id}}><button className="button-warning">Edit</button></Link>
                                    <Link data={{id:myJurusan.id}}><button className="button-danger" onClick={() => {confirm("Yakin di hapus ?") && Inertia.post("/jurusan/delete")}}>Hapus</button></Link>
                                </td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                </b>
            </center> 
        </Layout>
    )
}
export default Index;
