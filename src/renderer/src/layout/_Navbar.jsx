import { LogoutOutlined } from '@ant-design/icons'
import wideagri from '@renderer/assets/images/wide.png'
import { Clock, WBButton } from '@renderer/components'
import { MenuList } from '@renderer/routes'
import { clearStorage } from '@renderer/utils/globalUtility'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
  const navigate = useNavigate()

  const generateLink = (list) => {
    return (
      list &&
      list.map(({ path, name }) => (
        <NavLink to={path} key={`nav-btn-${name}`}>
          <span>{name}</span>
        </NavLink>
      ))
    )
  }

  const logoutHandle = () => {
    clearStorage()
    navigate('/login')
  }

  return (
    <NavBox>
      <div className="nav-logo">
        <img alt="Wide Agri" src={wideagri} />
        <span>Weight Bridge System</span>
      </div>
      <nav className="nav-links">{generateLink(MenuList)}</nav>
      <nav className="nav-profile">
        <Clock />
        <WBButton title="" danger shape="circle" icon={<LogoutOutlined />} onClick={logoutHandle} />
      </nav>
    </NavBox>
  )
}

const NavBox = styled.div`
  height: 50px;
  background-color: var(--primary-color);
  width: 100vw;
  padding-inline: 20px;
  display: flex;
  justify-content: space-between;
  > * {
    display: flex;
    align-items: center;
    a {
      border-radius: 4px;
      padding: 6px 8px;
      color: var(--background-color);
      &.active,
      &:hover {
        background-color: var(--background-color);
        color: var(--primary-color);
      }
    }
    .anticon {
      font-size: 14px;
    }
  }
  .nav {
    &-logo {
      color: var(--primary-color);
      border-radius: 4px;
      gap: 4px;
      padding-block: 8px;
      padding-inline: 8px;
      margin-block: 4px;
      background-color: var(--background-color);
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
      gap: 16px;
      .anticon {
        margin-right: 4px;
      }
    }
    &-profile {
      gap: 8px;
      color: var(--background-color);
      .anticon {
        padding-inline: 4px;
      }
    }
  }
`
