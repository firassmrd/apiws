import React from 'react'
import { useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'
function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    }, []);


  return (
    <div className='flex flex-wrap:1rem space-x-3 flex-grow m-2 border-l-pink-700 align-middle bg-orange-400  py-6'>
      {data.map((user) => (
        <div key={user.id}>
          {user.username}
          {user.name}
          {user.phone}
        </div>
      ))}
    </div>
  );
}

export default UserList