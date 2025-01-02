import { useState } from 'react'
import { useFetch } from '@/app/hooks/useFetch'
import UserCard from './UserCard'
import SearchForm from './SearchForm'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

export default function HomePage() {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
  const [searchQuery, setSearchQuery] = useState('')

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>

  const filteredUsers = users?.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Directory</h1>
        <SearchForm onSearch={setSearchQuery} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers?.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

