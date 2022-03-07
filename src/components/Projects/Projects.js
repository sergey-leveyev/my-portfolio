import React from "react";

import { useSelector } from "react-redux";

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
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Projects = () => {
  const { allProjects } = useSelector((state) => state.allProjects);

  return (
    <Section id="project">
      <SectionDivider />
      <SectionTitle main>Project</SectionTitle>
      <GridContainer>
        {allProjects.map(
          ({ _id, title, description, tags, source, visit }, index) => {
            return (
              <div key={_id}>
                {index < 4 && (
                  <BlogCard>
                    {/* <Img src={image} /> */}
                    <TitleContent>
                      <HeaderThree title>{title}</HeaderThree>
                      <Hr />
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>
                    <>
                      <TitleContent>Stack</TitleContent>
                      <TagList>
                        {tags.map((tag, i) => (
                          <Tag key={i}>{tag}</Tag>
                        ))}
                      </TagList>
                    </>
                    <UtilityList>
                      <ExternalLinks href={visit}>Code</ExternalLinks>
                      <ExternalLinks href={source}>Source</ExternalLinks>
                    </UtilityList>
                  </BlogCard>
                )}
              </div>
            );
          }
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
