import SiteMaster from "./sitemaster";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

 
  const hideFooterPages = [
    "/upload_image",
    "/create_ai_step",
    "/result",
    "/create_ai_result",
  ];

  const hideFooter = hideFooterPages.includes(router.pathname);

  return (
    <div className="content">
      <SiteMaster />
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
