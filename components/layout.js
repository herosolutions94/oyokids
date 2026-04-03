import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

 
  const hideFooterPages = [
    "/login",
    "/signup",
    "/onboarding",
    "/adventure",
    "/register"
  ];

  const hideFooter = hideFooterPages.includes(router.pathname);

  return (
    <div className="content">
      <SiteMaster />
     {!hideFooter && <Header />} 
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
