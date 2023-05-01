import { Outlet } from "react-router-dom";
import { NavigationBar, Footer } from "./components";
import styled from "styled-components";

const Container = styled.div`
  max-width: 740px !important;
  margin: 23px auto 0 auto;
  padding: 0 10px;
  width: 100%;
`;

const MainLayout = styled.div`
  min-height: 100vh;
`;
function Layout() {
  return (
    <Container>
      <NavigationBar />
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer />
    </Container>
  );
}

export default Layout;
