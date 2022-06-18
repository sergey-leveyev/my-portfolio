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

  allProjects.reverse();
  return (
    <Section id="project">
      <SectionDivider />
      <SectionTitle main>Recent projects</SectionTitle>
      <GridContainer>
        {allProjects.map(
          ({ _id, title, description, tags, source, visit, image }, index) => {
            return (
              <div key={_id}>
                {index < 4 && (
                  <BlogCard>
                    <Img src={image} />
                    <TitleContent>
                      <HeaderThree>{title}</HeaderThree>
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
                      <ExternalLinks href={visit}>Visit</ExternalLinks>
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
