import { useParams, Link } from 'react-router-dom'
import { useFetch } from '@/app/hooks/useFetch'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}

export default function UserDetails() {
  const { id } = useParams<{ id: string }>()
  const { data: user, loading, error } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>
  if (!user) return <div className="text-center">User not found</div>

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
        <div>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        </div>
      </div>
      <Link
        to="/"
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-block mt-4 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

