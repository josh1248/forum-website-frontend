import User from "../types/User";
import { BACKEND_API_LINK, API_GET_ALL_USERS } from "../configs/config";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SeeUsers: React.FC = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(BACKEND_API_LINK + API_GET_ALL_USERS);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong>, {user.reputation}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeeUsers;
