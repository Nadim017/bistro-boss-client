import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });
  const handleMakeAdmin = (id) => {
    console.log(id);
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All users</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h3 className="text-3xl font-semibold my-5">
        Total Users : {users.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    'admin'
                  ) : (
                    <>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-ghost  bg-orange-600 text-white"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {' '}
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-ghost  bg-red-700 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
