import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Home{' '}
      <Link href="/bio/education">
        <a>my education</a>
      </Link>
    </div>
  )
}
