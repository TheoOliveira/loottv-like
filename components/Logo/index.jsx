import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
        <Image src="/images/logo.png"  width="200" height="25"/>
        </a>
        </Link>
    </div>
  )
}
