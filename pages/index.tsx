import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card from "./components/ShopCard";

export default function Home() {
  return (
    <div className="bg-white">
      <Header/>  
      <main className=" flex  justify-center items-center flex-wrap gap-1 mt-10 mb-10">
       <Card image="../image/download-3.jpg" title="Knurled Spitfire"/>
       <Card image="../image/download-5.jpg" title="Diamond Cut Spitfire"/>
       <Card image="../image/download-6.jpg" title="Kingston"/>
       <Card image="../image/download-4.jpg" title="Hex Spitfire"/>
       <Card image="../image/download-2.jpg" title="Bamboo Spitfire"/>
       <Card image="../image/handle-18-1.jpg" title="Plain Hurricane"/>
       </main>
      {/* <Footer/> */}
    </div>
  );
}
