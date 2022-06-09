import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGnubash } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      {router.pathname === "/" ? (
        <>
          <Div1>
            <Link href="/">
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                <SiGnubash size="3rem" />{" "}
                <Span style={{ marginLeft: "5px" }}>S.L Portfolio</Span>
              </a>
            </Link>
          </Div1>
          <Div2>
            <li>
              <Link href="#project">
                <NavLink>Projects</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#tech">
                <NavLink>Technologies</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <NavLink>CV</NavLink>
              </Link>
            </li>
          </Div2>
        </>
      ) : (
        <>
          <Div1>
            <Link href="/">
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                <SiGnubash size="3rem" />{" "}
                <Span style={{ marginLeft: "5px" }}>S.L Portfolio</Span>
              </a>
            </Link>
          </Div1>
          <Div2>
            <li>
              <Link href="#about">
                <NavLink>CV</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/">
                <NavLink>Back to home</NavLink>
              </Link>
            </li>
          </Div2>
        </>
      )}
      <Div3>
        <SocialIcons href="https://github.com/sergey-leveyev">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sergey-leveyv-234783199/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/sergi.leviev">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
