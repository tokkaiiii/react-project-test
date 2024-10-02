import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const Loading = <Box sx={{display: 'flex'}}><CircularProgress/></Box>
const MemberLogin = lazy(() => import("../pages/member/LoginPage.jsx"))
const MemberJoin = lazy(() => import("../pages/member/JoinPage.jsx"))

const MemberRouter = () => {
  return [
    {
      path: 'login',
      element: <Suspense fallback={Loading}><MemberLogin/></Suspense>
    },
    {
      path: '',
      element: <Navigate replace to={'login'}/>
    },
    {
      path: 'join',
      element: <Suspense fallback={Loading}><MemberJoin/></Suspense>
    }
  ]
}
export default MemberRouter