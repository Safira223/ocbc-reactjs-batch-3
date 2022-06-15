import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

const Profile = () => {
    // penggunaan useParams ke dalam variabel

    const params = useParams();

    useEffect(() => {
        console.log(params)
    }, [])

    return(
        <>
            <h2>Ini adalah halaman profile</h2>
            {params.name && <h3>Halo! Nama saya {params.name}</h3>}
            {/* <Outlet/> adalah keluaran dari element yang masuk sebagai child route */}
            <Outlet />
        </>
    );
};

export default Profile;