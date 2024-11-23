import { auth } from "@/auth";
import "./globals.css";
import Providers from "./providers";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Facebook Clone",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <Providers>{!session ? <Login /> : children}</Providers>
        <ToastContainer position={'bottom-left'}/>
      </body>
    </html>
  );
}
