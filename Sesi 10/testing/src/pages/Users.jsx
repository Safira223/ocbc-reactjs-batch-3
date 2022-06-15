import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                })
        },
        // dependency
        []
    );

    const changePage = () => navigate('/');

    return (
        <>
            <button onClick={changePage}>Back to Home</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
};

export default Users;