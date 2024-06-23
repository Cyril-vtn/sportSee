import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
