import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import {lazy, Suspense} from "react";

const Loading = <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
const MemberLogin = lazy(()=>import("../pages/member/LoginPage.jsx"))


const MemberRouter = () => {
  return[
    {
      path:'login',
      element:<Suspense fallback={Loading}><MemberLogin/></Suspense>
    }
  ]
}
export default MemberRouter