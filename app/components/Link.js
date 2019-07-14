import React from 'react'
import Link from 'next/link'

import { linkUrl } from '@configs/app'

export default function AppLink(props) {
  const newProps = {
    ...props,
    href: `${linkUrl}${props.href}`,
  }

  return React.cloneElement(<a />, props)
}
