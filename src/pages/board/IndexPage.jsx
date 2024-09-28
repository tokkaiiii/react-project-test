import React from 'react';
import SimpleLayout from "../../layouts/SimpleLayout.jsx";
import {Link, Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import ListBasicComponent from "../../components/board/ListBasicComponent.jsx";

function IndexPage(props) {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <SimpleLayout>
        <div>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                 <Link to={'listMy'}><Tab label="내 스터디" value="1" /></Link>
                  <Link to={'add'}><Tab label="글 작성하기" value="2" /></Link>
                  <Link to={'scrap'}><Tab label="스크랩" value="3" /></Link>
                </TabList>
              </Box>
              {/*<TabPanel value="1">내가 작성한 보드</TabPanel>
              <TabPanel value="2">글쓰기 컴포넌트</TabPanel>
              <TabPanel value="3">나의 스크랩(공유?)</TabPanel>*/}
            </TabContext>
          </Box>
        </div>
        <div>
          <Outlet/>
        </div>

      </SimpleLayout>
  );
}

export default IndexPage;