import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header, NavList, Link, Container } from './Layout.styled';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </NavList>
          </nav>
        </Container>
      </Header>
      <Container>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
