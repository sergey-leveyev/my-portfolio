import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Scrollbtn from "../components/ScrollBtn/ScrollBtn";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

import { getProjects } from "../redux/actions/projectAction";

import { wrapper } from "../redux/store";

export default function Home() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Technologies />
      <Projects />
      <Scrollbtn />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getProjects(req));
    }
);
