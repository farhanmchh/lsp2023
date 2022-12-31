import { usePage } from '@inertiajs/inertia-react';
import React from 'react';
import "../../css/style.css"
import Layout from "../Pages/Main/Layout.jsx"

const Home = () => {
    // const {user} = usePage().props.auth
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

