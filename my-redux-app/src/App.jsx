import { useRoutes } from 'react-router-dom'
import UserList from './pages/UserList.jsx'
import UserEdit from './pages/UserEdit.jsx'

const App = () => {
  const elements = useRoutes([
    { path: '/', element: <UserList />},
    { path: '/create', element: <UserEdit/>},
    { path: '/edit/:id', element: <UserEdit/>}
  ])
  return elements
};

export default App;
