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
