import { AppstoreFilled } from '@ant-design/icons'
import wideagri from '@renderer/assets/images/wide.png'
import { MenuList } from '@renderer/routes'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
  const generateLink = (list) => {
    console.log('list', list)
    return (
      list &&
      list.map(({ path, name }) => (
        <NavLink to={path} key={`nav-btn-${name}`}>
          <AppstoreFilled />
          <span>{name}</span>
        </NavLink>
      ))
    )
  }
  return (
    <NavBox>
      <div className="nav-logo">
        <img alt="Wide Agri" src={wideagri} />
        <span> Weight Bridge System</span>
      </div>
      <nav className="nav-links">{generateLink(MenuList)}</nav>
    </NavBox>
  )
}

const NavBox = styled.div`
  height: 50px;
  background-color: var(--primary-color);
  width: 100vw;
  padding-inline: 20px;
  display: flex;
  gap: 80px;
  .nav {
    &-logo {
      color: var(--primary-color);
      display: flex;
      border-radius: 8px;
      gap: 4px;
      align-items: ce;
      padding-block: 8px;
      padding-inline: 8px;
      margin-block: 4px;
      background-color: var(--neutral-color);
      img {
        height: 100%;
        margin: 'auto';
        margin-right: 8px;
      }
      * {
        font-weight: bold;
      }
    }
    &-links {
      display: flex;
      align-items: center;
      gap: 16px;
      a {
        border-radius: 4px;
        padding: 6px;
        color: var(--neutral-color);
      }
      .active {
        background-color: var(--neutral-color);
        color: var(--primary-color);
      }
      .anticon {
        margin-right: 4px;
      }
    }
  }
`
