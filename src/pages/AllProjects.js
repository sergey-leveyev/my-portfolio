import { getProjects } from "../redux/actions/projectAction";

import { wrapper } from "../redux/store";

import { useSelector } from "react-redux";

import Layout from "../layout/Layout";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../components/Projects/ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../styles/GlobalComponents";

export default function AllProjects() {
  const { allProjects } = useSelector((state) => state.allProjects);

  return (
    <Layout>
      <Section id="project">
        <SectionDivider />
        <SectionTitle main>All Project</SectionTitle>

        <GridContainer>
          {allProjects.map(
            ({ _id, title, description, tags, source, visit }) => (
              <BlogCard key={_id}>
                {/* <Img src={image} /> */}
                <TitleContent>
                  <HeaderThree>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={visit}>Code</ExternalLinks>
                  <ExternalLinks href={source}>Source</ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getProjects(req));
    }
);
