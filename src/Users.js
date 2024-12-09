import React from 'react'

const Users = () => {
    const data = [
        { id: 1, name: 'Ali', age: 25, city: 'Istanbul' },
        { id: 2, name: 'Ayşe', age: 30, city: 'Ankara' },
        { id: 3, name: 'Mehmet', age: 28, city: 'Izmir' },
        { id: 4, name: 'Fatma', age: 32, city: 'Bursa' }
      ];
    
      const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Age', accessor: 'age' },
        { header: 'City', accessor: 'city' }
      ];
  return (
    <div class="flex flex-col min-h-screen">
        <header class="p-5 bg-gray-200 w-full flex justify-between">
            <h1 class="text-3xl text">Welcome Admin</h1>
            <h1 class="text-3xl">User List</h1>
            <h1 class="text-3xl">Logout</h1>
        </header>
        <table className="w-full  m-3 border-collapse">
            <thead class="text-center text-xl ">
                <tr>
                    {columns.map((column, index) => (
                    <th key={index} class="p-3 bg-white border-4 border-gray-500">
                        {column.header}
                    </th>
                    ))}
                </tr>
            </thead>
            <tbody class="text-right ">
            {data.map((row) => (
                <tr key={row.id}>
                {columns.map((column, index) => (
                    <td key={index} class="p-3 border-4 border-gray-500">
                    {row[column.accessor]}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users
