

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Pages";
import SubscribeNewsletter from "@/components/SubscribeNewsletter/SubscribeNewslettert";
import { GetServerSideProps } from "next";

interface Article {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}


export default function Pages() {
  return (
    <>
      <Navbar />
      <Home />
      <SubscribeNewsletter />
      <Footer />
    </>
  );
}

