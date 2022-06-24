import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
        <Image src="/images/logo.png"  width="100" height="40"/>
        </a>
        </Link>
    </div>
  )
}
