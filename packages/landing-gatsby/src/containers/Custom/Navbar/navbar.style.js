import styled from "styled-components";
import { themeGet } from "styled-system";
import searchIcon from "common/src/assets/image/appClassic/search.svg";

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 25px 0 26px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: ${themeGet("colors.light", "#FAFBFF")};
  position: fixed;
  z-index: 9999;
  transition: all 0.3s ease;
  @media only screen and (max-width: 1366px) {
    padding: 20px 0 21px;
  }
  > div.container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 128px;
        height: auto;
      }
    }
  }
  ul {
    li {
      a {
        color: ${themeGet("colors.menu", "#0D233E")};
        font-size: 16px;
        font-weight: 400;
      }
      &.is-current {
        a {
          color: ${themeGet("colors.primary", "#2563FF")};
        }
      }
    }
  }
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  .menu {
    display: flex;
    align-items: center;
    margin-right: 11px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    @media only screen and (max-width: 1366px) {
      margin-right: 13px;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }
    li {
      margin: 0 19px;
      @media only screen and (max-width: 1366px) {
        margin: 0 17px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.active {
    .menu {
      opacity: 0;
      visibility: hidden;
    }
    .search {
      form {
        opacity: 1;
        visibility: visible;
      }
      input {
        width: 320px;
        @media only screen and (min-width: 1367px) {
          width: 350px;
        }
        @media only screen and (max-width: 480px) {
          width: calc(100vw - 122px);
        }
      }
    }
  }
  .reusecore__button {
    border-radius: 5px;
    font-weight: 500;
    text-transform: inherit;
    padding-left: 13px;
    padding-right: 13px;
    min-height: 42px;
    &.text {
      padding: 0;
      margin-right: 28px;
      .btn-icon {
        svg {
          width: 22px;
          height: auto;
          stroke: ${themeGet("colors.menu", "0D233E")};
          @media only screen and (max-width: 991px) {
            width: 24px;
          }
        }
      }
      @media only screen and (max-width: 1366px) {
        margin-right: 20px;
      }
      @media only screen and (max-width: 991px) {
        margin-right: 0;
      }
    }
    &.trail {
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
    &.menubar {
      display: none;
      @media only screen and (max-width: 991px) {
        display: inline-flex;
        padding: 0;
        justify-content: flex-end;
        min-width: 35px;
        svg {
          width: 27px;
          height: auto;
        }
      }
    }
  }
`;

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  form {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    right: 100%;
  }
  input {
    width: 0px;
    height: 46px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 15px;
    color: ${themeGet("colors.menu", "0D233E")};
    background-color: ${themeGet("colors.light", "#FAFBFF")};
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
    background-size: 16px;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
    &::placeholder {
      color: ${themeGet("colors.textColor", "rgba(52, 61, 72, 0.8)")};
    }
    &:focus {
      border-color: ${themeGet("colors.primary", "#2563FF")};
    }
  }
`;

export const Menu2 = styled.span`
  font-size: 30px;
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const MenuClose = styled.span`
  font-size: 35px;
  cursor: pointer;
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const OtherMenu = styled.div`
  z-index: 1;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;

  display: block;
  width: 100%;
  height: calc(100vh - 70px);
  padding: 0px 0 40px;
  position: absolute;
  top: 82px;
  flex-direction: column;
  background-color: ${themeGet("colors.white", "#ffffff")};
  transition: all 0.3s ease;
  opacity: 1;
  visibility: visible;
  box-shadow: 0 3px 12px ${themeGet("colors.shadow", "rgba(38, 78, 118, 0.1)")};

  .container {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    display: inline-block;
    width: 50%;
    float: left;
    padding: 40px;
    height: 100vh;
    position: relative;
    margin-left: 0;
    margin-right: 0;
  }

  .container-left {
  }

  .container-right {
    background-color: #2a2b2e;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }

  .overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
  }

  .container-right a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .container-left a {
    text-decoration: none;
    font-size: 22px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .container-left h2 {
    font-size: 38px;
  }

  .container-left h4 {
    text-transform: uppercase;
    font-size: 16px;
  }

  .contact {
    margin: 20px 0;
  }

  .container-right a {
    color: #fff;
  }

  .container-right a:hover,
  .container-right a:focus {
    color: #f1f1f1;
    color: ${themeGet("colors.white", "#ffffff")};
    background-color: ${themeGet("colors.primary")};
  }

  .scrollspy__menu a {
    text-align: right;
    font-size: 38px;
    line-height: 1.4em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 27px 0 40px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 82px;
    flex-direction: column;
    background-color: ${themeGet("colors.white", "#ffffff")};
    transition: all 0.3s ease;
    &.active {
      opacity: 1;
      visibility: visible;
      box-shadow: 0 3px 12px
        ${themeGet("colors.shadow", "rgba(38, 78, 118, 0.1)")};
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ul {
      padding-bottom: 20px;
      li {
        a {
          display: block;
          padding: 13px 0;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        &:hover {
          a {
            padding: 13px 15px;
            color: ${themeGet("colors.white", "#ffffff")};
            background-color: ${themeGet("colors.primary")};
          }
        }
      }
    }
    .reusecore__button {
      width: 100%;
      border-radius: 5px;
      @media only screen and (max-width: 480px) {
        margin-top: 20px;
      }
    }
  }
`;

export default NavbarWrapper;
