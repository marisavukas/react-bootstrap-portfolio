import { Outlet } from "react-router-dom";
import { NavigationBar, Footer } from "./components";
import styled from "styled-components";

const PageContainer = styled.div`
margin: auto;
max-width: 740px;
padding: 10px;
width: 100%;
`;

const MainLayout = styled.div`
  flex: 1;
`;
function Layout() {
  return (
    <PageContainer>
      <NavigationBar />
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer />
    </PageContainer>
  );
}

export default Layout;
