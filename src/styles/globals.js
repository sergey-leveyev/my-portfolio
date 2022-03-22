import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
 
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 20px;
  
}

.page-item.active{
  background: #801414;
}

.page-item.active .page-link {
  color: #d4c0c0;
}

.page-item{
  box-shadow: 3px 3px 10px rgb(80 78 78 / 50%);
  border-radius: 20px;
  margin: 2px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}

.page-item:hover{
  background: #801414;
  
}

.page-link {
  color: #fff;
}

.page-link:hover {
  color: #d4c0c0;
}

`;

export default GlobalStyles;
