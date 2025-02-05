import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("https://backend-smoky-sigma-90.vercel.app/api/users");
            setUsers(res.data);
        } catch (error) {
            alert("Error fetching users!");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Stored Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.fullName} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
