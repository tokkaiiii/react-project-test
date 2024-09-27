import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import {lazy, Suspense} from "react";

const Loading = <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
const BoardAdd = lazy(()=> import("../pages/board/AddPage.jsx"))

const BoardRouter = () => {
  return [
    {
      path: 'add',
      element: <Suspense fallback={Loading}><BoardAdd/></Suspense>
    }
  ]
}

export default BoardRouter;