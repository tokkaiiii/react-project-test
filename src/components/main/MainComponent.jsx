import * as React from 'react';
import PageComponent from "../common/PageComponent.jsx";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ListBasicComponent from "../board/ListBasicComponent.jsx";

export default function MainComponent() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="트렌딩" value="1" />
                <Tab label="최신" value="2" />
                <Tab label="피드" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1"><ListBasicComponent/></TabPanel>
            <TabPanel value="2">여기에 컴포넌트 넣으면 됨 1</TabPanel>
            <TabPanel value="3">여기에 컴포넌트 넣으면 됨 2</TabPanel>
          </TabContext>
        </Box>
      <PageComponent/>
      </>
  );
}

