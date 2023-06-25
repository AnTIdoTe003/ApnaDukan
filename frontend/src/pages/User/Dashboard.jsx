import React from 'react'
import { Box, Container, Text } from "@chakra-ui/react";
import UserMenu from './UserMenu';
import {useAuth} from '../../context/auth'
const Dashboard = () => {
  const [auth]= useAuth()
  return (
    <>
      <Box my={"5rem"}>
        <Container maxWidth={'1440px'}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"5rem"}
          >
            <Text fontSize="4xl">{auth.user.name}'s Dashboard</Text>
            <UserMenu></UserMenu>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard