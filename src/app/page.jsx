import Header from "./components/header";
import MainContent from "./components/mian-content";

const Home = async () => {
  await delayFn();
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header />
      <MainContent />
    </div>
  );
};

const delayFn = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

export default Home;
