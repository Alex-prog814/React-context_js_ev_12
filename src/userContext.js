import React, { useState } from 'react';
import axios from 'axios';

export const usersContext = React.createContext();

const UsersContextProvider = ({ children }) => {
    const API = 'http://localhost:8000/users';
    const [users, setUsers] = useState([]);
    const [oneUser, setOneUser] = useState(null);

    async function addUser(newUser){
        await axios.post(API, newUser);
        getUsers();
    };

    async function getUsers(){
        let res = await axios(API);
        setUsers(res.data);
    };

    async function deleteUser(id){
        await axios.delete(`${API}/${id}`);
        getUsers();
    };

    async function getOneUser(id){
        let res = await axios(`${API}/${id}`);
        setOneUser(res.data);
    };

    async function updateUser(id, editedUser){
        await axios.patch(`${API}/${id}`, editedUser);
    };

    return (
        <usersContext.Provider value={{
            users,
            oneUser,

            addUser,
            getUsers,
            deleteUser,
            getOneUser,
            updateUser
        }}>
            { children }
        </usersContext.Provider>
    )
};

export default UsersContextProvider;