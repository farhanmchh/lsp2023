<<<<<<< HEAD
import React from 'react';
import "../../css/style.css"
import Layout from "../Pages/Main/Layout.jsx"

const Home = () => {
    return (
        <>
        <Layout>
            <center>
                <b><br />
                    SELAMAT DATANG USER
                </b>
            </center>
        </Layout>
        </>
    )
}
export default Home;

=======
import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import moment from "moment/moment";

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <div className="header">
                <img src="/gambar/header.jpg" height="40%" width="100%" />
            </div>

            <div className="footer">
                <center>
                    <p>&copy; {moment().format("Y")} - LSP</p>
                </center>
            </div>
        </>
    );
}
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
