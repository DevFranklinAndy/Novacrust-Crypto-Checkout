import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="main">
      <section className="main-container">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
