import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const changePage = () => navigate('/users');
    return (
        <>
            <h1>Ini adalah header</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis qui iure non, nihil nisi eveniet perspiciatis provident esse corporis repellat ex accusamus pariatur asperiores suscipit sapiente maxime laudantium quo?</p>
            <button onClick={changePage}>List Users</button>
        </>
    );
}

export default Home;