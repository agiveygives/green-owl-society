import React, { useState } from 'react';
import Image from 'next/image';
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar
} from 'react95';
import styled from 'styled-components';
import logoIMG from '@/assets/images/logo.png';

const Wrapper = styled.div`
  padding: 5rem;
  height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              <Image
                src={logoIMG}
                alt='react95 logo'
                height={20}
                style={{ marginRight: 4 }}
              />
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%'
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <span role='img' aria-label='👨‍💻'>
                    👨‍💻
                  </span>
                  Profile
                </MenuListItem>
                <MenuListItem>
                  <span role='img' aria-label='📁'>
                    📁
                  </span>
                  My account
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role='img' aria-label='🔙'>
                    🔙
                  </span>
                  Logout
                </MenuListItem>
              </MenuList>
            )}
          </div>

          <TextInput placeholder='Search...' width={150} />
        </Toolbar>
      </AppBar>

      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
};

export default Layout;
