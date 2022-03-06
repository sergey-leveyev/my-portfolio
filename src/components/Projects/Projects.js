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
              <>
                {index < 4 && (
                  <BlogCard key={_id}>
                    {/* <Img src={image} /> */}
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
                )}
              </>
            );
          }
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
