import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import {lazy, Suspense} from "react";

const Loading = <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
const BoardAdd = lazy(()=> import("../pages/board/AddPage.jsx"))
const BoardListMy = lazy(()=> import("../pages/board/ListMyPage.jsx"))
const BoardScrap = lazy(()=> import("../pages/board/ScrapPage.jsx"))

const BoardRouter = () => {
  return [
    {
      path: 'add',
      element: <Suspense fallback={Loading}><BoardAdd/></Suspense>
    },
    {
      path: 'listMy',
      element: <Suspense fallback={Loading}><BoardListMy/></Suspense>
    },
    {
      path: 'scrap',
      element: <Suspense fallback={Loading}><BoardScrap/></Suspense>
    }
  ]
}

export default BoardRouter;