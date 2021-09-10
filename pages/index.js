import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/card";
import Masthead from "../components/masthead";

export const siteTitle = "Natan Sample Website";
export default function Home() {
  return (
    <>
      <Layout>
        <Masthead />
        <div className="container lg:relative top-20">
          <Card />
        </div>
      </Layout>
    </>
  );
}
