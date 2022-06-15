import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedPage = () => {
    // 2 cara untuk navigasi secara programatis
    // <Navigate to="" />
    // useNavigate() => navigate => dicontohkan di component ini

    const navigate = useNavigate();

    useEffect(
        () => {
            // cek dulu otentikasinya
            // localStorage
            // API bawaan browser
            // menyimpan data bertipe teks dengan total maksimal 5MB

            // localStorage -> permanen
            // sessionStorage -> sementara (hanya selama browser aktif)

            // 3 cara penggunaan
            // localStorage.getItem(key) -> akan mengembalikan value berdasarkan
            // key yang kita input sebagai param
            // alternatifnya: localStorage[key]

            const authData = localStorage.getItem('auth');

            if(!authData) {
                console.error("Anda belum login")
                navigate('/', {replace: true});
            }
        },
        []
    );

    return (
        <>
            <h2>Ini adalah halaman terproteksi</h2>
            <p>Lorem ipsum</p>
        </>
    );
};


export default ProtectedPage;