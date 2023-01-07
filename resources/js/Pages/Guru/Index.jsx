import { Link } from "@inertiajs/inertia-react";
import React, { Component } from "react";

import Layout from "../Main/Layout.jsx";

const Index = (props) => {
    const { data } = props;
    return (
        <Layout>
            <center>
                <b>
                    <br />
                    LIST GURU
                    <br />
                    <Link href="/guru/create" className="button-primary">
                        Tambah Guru
                    </Link>
                    {/* <button className="button-primary">Tambah Data</button> */}
                    <table className="table" cellpadding="10">
                        <tr>
                            <th>NO</th>
                            <th>NIP</th>
                            <th>NAMA GURU</th>
                            <th>JENIS KELAMIN</th>
                            <th>ALAMAT</th>
                            <th>ACTION</th>
                        </tr>
                        {data?.map((each, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{each.nip}</td>
                                <td>{each.name}</td>
                                <td>
                                    {each.jk == "L" ? "Laki-laki" : "Perempuan"}
                                </td>
                                <td>{each.alamat}</td>
                                <td>
                                    <button className="button-warning">
                                        Edit
                                    </button>
                                    <button className="button-danger">
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </b>
            </center>
        </Layout>
    );
};
export default Index;
