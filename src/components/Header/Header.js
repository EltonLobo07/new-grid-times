import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  const searchAndMenuView = (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );

  return (
    <header>
      <SuperHeader>
        <Row>
          {searchAndMenuView}
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <SearchAndMenuLaptopWrapper>
          {searchAndMenuView}
        </SearchAndMenuLaptopWrapper>
        <Logo />
        <SubscribeContentWrapper>
          <Button>subscribe</Button>
          <AlreadyASubscriberLink>
            Already a subscriber?
            <SubscriberLinkUnderline />
          </AlreadyASubscriberLink>
        </SubscribeContentWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  margin-bottom: 48px;

  margin-top: 32px;
  justify-content: center;
  @media (${QUERIES.laptopAndUp}) {
    margin-top: 16px;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const OnlyForLaptop = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const SearchAndMenuLaptopWrapper = styled(OnlyForLaptop)`
  align-self: center;
`;

const SubscribeContentWrapper = styled(OnlyForLaptop)`
  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    row-gap: ${4 / 16}rem;
    justify-content: flex-end;
  }
`;

const AlreadyASubscriberLink = styled.a`
  width: fit-content;
  font-style: italic;
  position: relative;
`;

const SubscriberLinkUnderline = styled.span`
  height: 1px;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: ${4 / 16}rem;
  left: 0;
`;

export default Header;
