import React, { useState, useEffect } from 'react';
import Header from "../Header";
import "./index.css";

// Example data generation
const generateUserData = (num) => {
    const names = [
        'John Smith', 'Emily Jones', 'Michael Brown', 'Sarah Wilson', 'David Lee',
        'Jessica Adams', 'Daniel Thomas', 'Laura Johnson', 'Kevin Martin', 'Rachel Garcia',
        'James Williams', 'Olivia Anderson', 'Christopher Harris', 'Megan Miller', 'Brandon Martinez',
        'Julia Jackson', 'Patrick Moore', 'Hannah Thompson', 'Nathan Rodriguez', 'Sophia Martinez'
    ];

    const getRandomName = () => names[Math.floor(Math.random() * names.length)];
    const getEmailFromName = (name) => {
        const emailPrefix = name.split(' ').join('.').toLowerCase();
        return `${emailPrefix}@example.com`;
    };

    return Array.from({ length: num }, (_, i) => {
        const name = getRandomName();
        return {
            userId: i + 1,
            username: `user${i + 1}`,
            name: name,
            email: getEmailFromName(name)
        };
    });
};

const kpiData = {
    totalUsers: 1000,
    activeUsersLast24Hours: 50,
};

const dummyUsers = generateUserData(1000); // Generated 10000 dummy users
const dummyActiveUsers = dummyUsers.slice(0, 50); // Example active users data

const Users = () => {
    const [posts, setPosts] = useState([]);
    const [activeUsers, setActiveUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeUsersPage, setActiveUsersPage] = useState(1);
    const [showUsersTable, setShowUsersTable] = useState(false);
    const [showActiveUsersTable, setShowActiveUsersTable] = useState(false);
    const postsPerPage = 10;
    const activeUsersPerPage = 10;

    useEffect(() => {
        const startIndex = (currentPage - 1) * postsPerPage;
        const currentPosts = dummyUsers.slice(startIndex, startIndex + postsPerPage);
        setPosts(currentPosts);
    }, [currentPage]);

    useEffect(() => {
        const startIndex = (activeUsersPage - 1) * activeUsersPerPage;
        const currentActiveUsers = dummyActiveUsers.slice(startIndex, startIndex + activeUsersPerPage);
        setActiveUsers(currentActiveUsers);
    }, [activeUsersPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleActiveUsersPageChange = (newPage) => {
        setActiveUsersPage(newPage);
    };

    const totalPages = Math.ceil(dummyUsers.length / postsPerPage);
    const totalActiveUsersPages = Math.ceil(dummyActiveUsers.length / activeUsersPerPage);

    const toggleUsersTable = () => {
        setShowUsersTable(true);
        setShowActiveUsersTable(false);
    };

    const toggleActiveUsersTable = () => {
        setShowActiveUsersTable(true);
        setShowUsersTable(false);
    };

    return (
        <>
            <Header />
            <div className="back-img">
            <div className="users-listing-container">
                <div className="kpi-container">
                    <div className="kpi-box" onClick={toggleUsersTable}>
                        <h2>Total Users</h2>
                        <p>{kpiData.totalUsers}</p>
                    </div>
                    <div className="kpi-box" onClick={toggleActiveUsersTable}>
                        <h2>Users Active in the Last 24 Hours</h2>
                        <p>{kpiData.activeUsersLast24Hours}</p>
                    </div>
                </div>
                {showUsersTable && (
                    <div className="posts-container">
                        <table className="posts-table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(post => (
                                    <tr key={post.userId}>
                                        <td>{post.userId}</td>
                                        <td>{post.username}</td>
                                        <td>{post.name}</td>
                                        <td>{post.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {showActiveUsersTable && (
                    <div className="active-users-container">
                        <table className="active-users-table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeUsers.map(user => (
                                    <tr key={user.userId}>
                                        <td>{user.userId}</td>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button
                                onClick={() => handleActiveUsersPageChange(activeUsersPage - 1)}
                                disabled={activeUsersPage === 1}
                            >
                                Previous
                            </button>
                            <span>Page {activeUsersPage} of {totalActiveUsersPages}</span>
                            <button
                                onClick={() => handleActiveUsersPageChange(activeUsersPage + 1)}
                                disabled={activeUsersPage === totalActiveUsersPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </>
    );
}

export default Users;
