import { Link } from "@inertiajs/inertia-react";
import React from "react"
import Layout from "../Main/Layout.jsx"

const Index = (props) => {
    const {mapel} = props;
    return(
        <Layout>
            <center>
                <b><br />
                    LIST MATA PELAJARAN
                    <br />
                    <Link href="/mapel/create">
                        <button className="button-primary">Tambah Data</button>
                    </Link>
                    <table className="table"cellPadding="10">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>MATA PELAJARAN</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        {mapel.map((myMapel,i) => (
                        <tbody key={i}>
                            <tr>
                                <td>{++i}</td>
                                <td>{myMapel.nama_mapel}</td>
                                <td>
                                    <Link href="/mapel/edit" data={{id:myMapel.id}}><button className="button-warning">Edit</button></Link>
                                    <button className="button-danger">Hapus</button>
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
