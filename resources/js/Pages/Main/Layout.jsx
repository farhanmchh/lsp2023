import React from "react";
import "../../../css/style.css";
import headerImage from "../../../src/images/header.jpg";
import { Link } from "@inertiajs/inertia-react";


export default function Layout({children}) {
    return(
        <>
           {/* ----------HEADER---------- */}
            <div className="header">
                <img src={headerImage} alt="" />
            </div>
            
            {/* ----------MENU---------- */}
            <div className="menu">
                <b>
                    <Link href="/home" className="">Home</Link>
                    <Link href="/guru/index" className="">Guru</Link>
                    <Link href="/jurusan/index" className="">Jurusan</Link>
                    <Link href="/kelas/index" className="">Kelas</Link>
                    <Link href="/siswa/index" className="">Siswa</Link>
                    <Link href="/mapel/index" className="">Mata Pelajaran</Link>
                    <Link href="/mengajar/index" className="">Mengajar</Link>
                    <Link href="/nilai/index" className="">Nilai</Link>
                    <Link href="" className="">Logout</Link>
                </b>
            </div>

             {/* ----------CONTENT---------- */}
            <div className="content">
                {children}
            </div>

            {/* ----------FOOTER---------- */}
            <div className='footer'>
            <b>
                <p className='mar'>2023 - UJIKOM & LSP</p> 
            </b>

        </div>
        </>
    );
}

