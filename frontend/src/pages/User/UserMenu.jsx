import { Box} from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Profile from './Profile';
import Orders from './Orders';
const UserMenu = () => {
  return (
    <>
      <Box>
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Orders</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile></Profile>
            </TabPanel>
            <TabPanel>
             <Orders></Orders>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default UserMenu