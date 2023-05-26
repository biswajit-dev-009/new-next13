import React from 'react'
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>THIS IS HOME PAGE OF CRASH NEXT 13</h1>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/about/biswa'}>About Biswa</Link></li>
      </ul>
    </div>
  )
}

export default HomePage;