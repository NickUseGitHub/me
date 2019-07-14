import React from 'react'
import Link from 'next/link'

import { linkUrl } from '@configs/app'

export default function AppLink(props) {
  return (
    <Link
      {...{
        ...props,
        href: `${linkUrl}${props.href}`,
      }}
    >
      <a>{props.children}</a>
    </Link>
  )
}
