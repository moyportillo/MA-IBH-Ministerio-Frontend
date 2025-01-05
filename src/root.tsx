import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Root = () => {
  const { pathname } = useLocation();
  if (pathname === '/') {
    return <Navigate to="home" />;
  }
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Root;
