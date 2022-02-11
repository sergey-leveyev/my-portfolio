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

import Filter from "../components/Filter/Filter.component";

import { projects } from "../constants/constants";

function AllProjects() {
  return (
    <Layout>
      <Section id="project">
        <SectionDivider />
        <SectionTitle main>All Project</SectionTitle>
        <Filter />
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, source, visit }) => (
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
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

export default AllProjects;
