
import Header from "./components/header";
import MainContent from "./components/mian-content";
import Login from "./components/login";
import { auth } from "../../auth";

const Home = async () => {
  const session = await auth()
  if (!session) return <Login/>
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header/>
      <MainContent/>
    </div>
  )
}

export default Home
