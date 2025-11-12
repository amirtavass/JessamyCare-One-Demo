import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-slate-200">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
