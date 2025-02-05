import { useState } from "react";
import axios from "axios";

const UserForm = ({ onUserAdded }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://your-backend.vercel.app/api/users/add", { fullName, email });
            alert("User added successfully!");
            setFullName("");
            setEmail("");
            onUserAdded();
        } catch (error) {
            alert("Error adding user!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
