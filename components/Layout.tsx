import React from 'react'
import Header from '~components/Header'
import { Container } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
