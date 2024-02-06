'use client'
import styles from "./user_css.module.css"
import React, { useEffect, useState } from 'react';

const API = 'https://randomuser.me/api/';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const UserAPI = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API, options);
                const data = await response.json();
                setUsers(data.results); // Slice para obtener solo los primeros 5 elementos
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.login.uuid} className={styles.card_background}>
                    <div className={styles.txt_margin_container}>
                        <h2 className={styles.txt_tittle}>{user.name.title}</h2>
                        <h2 className={styles.txt_name}>{user.name.first}</h2>
                        <h2 className={styles.txt_name}>{user.name.last}</h2>
                    </div>
                    <div>
                        <img src={user.picture.large} alt={user.gender} />
                    </div>
                    <span className={styles.txt_name}>lives in {user.location.country}</span>
                </div>
            )).slice(0, 1)}
        </div>
    );
};