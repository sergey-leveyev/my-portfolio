import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { getProjects } from "../redux/actions/projectAction";
import Pagination from "react-js-pagination";
import { wrapper } from "../redux/store";
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
  const router = useRouter();

  const { allProjects, resPerPage, projectCount, filteredProjectsCount } =
    useSelector((state) => state.allProjects);

  let { page = 1 } = router.query;
  page = Number(page);

  const handlePagination = (pageNumber) => {
    window.location.href = `/AllProjects/?page=${pageNumber}`;
  };

  return (
    <Layout>
      <Section id="project">
        <SectionDivider />
        <SectionTitle main>All Project</SectionTitle>

        <GridContainer>
          {allProjects.map(
            ({ _id, title, description, tags, source, visit, image }) => (
              <BlogCard key={_id}>
                <Img src={image} />
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
        {resPerPage < projectCount && (
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={projectCount}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        )}
      </Section>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      await store.dispatch(getProjects(req, query.page));
    }
);
