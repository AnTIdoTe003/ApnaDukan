import React from 'react'
import AdminMenu from './AdminMenu'
import { Box, Container, Text } from '@chakra-ui/react'

const AdminDashboard = () => {
  return (
    <>
      <Box my={"5rem"}>
        <Container maxWidth={"1440px"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"5rem"}
          >
            <Text fontSize="6xl">Admin Dashboard</Text>
            <AdminMenu></AdminMenu>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AdminDashboard