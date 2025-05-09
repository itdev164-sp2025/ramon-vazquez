import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Search } from 'styled-icons/feather'
import { H1 } from "../Heading"
import { IconButton } from '../Button'
import { Section } from "../Section"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.header.backgroundColor}
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${props => props.theme.header.color}
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Section width={11/12}>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Section>
    <Section width={1/12}>
      <IconButton icon={<Search />} />
    </Section>
  </Outer>
)

export { Header }
