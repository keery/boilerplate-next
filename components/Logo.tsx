import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import Logo from 'public/assets/img/logo.svg'

const Logo = () => {
  return (
    <Flex transform="translateY(2px)" minW="80px" maxW="100px" mr={2}>
      <Link href="/" display="inline-block">
        <Logo width="100%" />
      </Link>
    </Flex>
  )
}

export default Logo
