import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  
  return (
    <div>
      <p>Could not find requested resource</p>
      <p>
        Go <Link href="/">to home</Link>
      </p>
    </div>
  )
}