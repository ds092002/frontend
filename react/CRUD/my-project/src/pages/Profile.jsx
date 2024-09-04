import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom';

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className=''>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10 container mx-auto">
      {data.map((student, index) => (
        <div key={index} className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-200 h-40 flex justify-center items-center">
            {student.image ? (
              <img
                className="rounded-full h-24 w-24 object-cover"
                src={student.image}
                alt="Profile"
              />
            ) : (
              <div className="rounded-full h-24 w-24 bg-gray-300 flex justify-center items-center text-gray-500">
                No Image
              </div>
            )}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800">{`${student.firstname} ${student.lastname}`}</h2>
            <p className="text-gray-600 mt-2">Email: {student.email}</p>
            <p className="text-gray-600 mt-2">Phone: {student.phone}</p>
            <p className="text-gray-600 mt-2">Gender: {student.gender}</p>
            <p className="text-gray-600 mt-2">Location: {student.location}</p>
          </div>
        </div>
      ))}
    </div>
      <div className="mt-6 flex items-center justify-center mb-10">
              <Link to='/'>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-10 py-2 text-sm font-semibold text-black hover:text-white hover:bg-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go back
              </button>
              </Link>
            </div>
    </div>
  );
};

export default Profile;
