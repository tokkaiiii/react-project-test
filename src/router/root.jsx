import {lazy, Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import boardRouter from "./boardRouter.jsx";

const Loading = <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

const Main = lazy(()=> import("../pages/MainPage.jsx"))
const BoardIndex = lazy(()=> import("../pages/board/IndexPage.jsx"))

const root = createBrowserRouter([
  {
    path:'',
    element:<Suspense fallback={Loading}><Main/></Suspense>
  },
  {
    path:'board',
    element:<Suspense fallback={Loading}><BoardIndex/></Suspense>,
    children: boardRouter()
  }
])

export default root