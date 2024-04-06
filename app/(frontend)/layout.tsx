import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutI {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollArea className="h-full">
        <Header />
        <main
          className="relative flex-grow"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </main>
        <Footer />
        {/*<MobileNavigation /> */}
      </ScrollArea>
    </div>
  );
};

export default Layout;
