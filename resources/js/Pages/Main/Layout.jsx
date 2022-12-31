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
                    <Link href="/guru" className="">Guru</Link>
                    <Link href="/jurusan" className="">Jurusan</Link>
                    <Link href="/kelas" className="">Kelas</Link>
                    <Link href="/siswa" className="">Siswa</Link>
                    <Link href="/mapel" className="">Mata Pelajaran</Link>
                    <Link href="/mengajar" className="">Mengajar</Link>
                    <Link href="/nilai" className="">Nilai</Link>
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

