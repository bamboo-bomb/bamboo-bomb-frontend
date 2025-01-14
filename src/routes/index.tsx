import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import Board from '../pages/Board';
import BoardDetail from '../pages/BoardDetail';
import MyPage from '../pages/MyPage';
import Bomb from '../pages/Bomb';

const router = createBrowserRouter([
  {
    path: '',
    element: <Main />,
  },
  {
    path: '/board',
    element: <Board />,
  },
  {
    path: '/board/:id',
    element: <BoardDetail />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/bomb',
    element: <Bomb />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
