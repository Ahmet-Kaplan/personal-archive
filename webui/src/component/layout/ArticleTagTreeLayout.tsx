import React, { FC } from "react"
import styled from "styled-components"
import { Button, Container, Loader, Sidebar } from "rsuite"
import ArticleTagTree from "../article/ArticleTagTree"
import BaseLayout from "./BaseLayout"
import { useHistory } from "react-router-dom"


interface Props {
  loading?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const ArticleTagTreeLayout: FC<Props> = ({loading, size = 'md', children}) => {
  const history = useHistory()

  return (
    <BaseLayout size={size}>
      <Sidebar width={260}>
        <Container>
          <NewButton onClick={() => history.push('/articles/new')}>
            New Article
          </NewButton>
          <ArticleTagTree/>
        </Container>
      </Sidebar>
      <StyledContent>
        {loading ? <Loader center/> : null}
        {children}
      </StyledContent>
    </BaseLayout>
  )
}

const StyledContent = styled(Container)`
  padding: 20px;
  margin-bottom: 200px;
`

const NewButton = styled(Button)`
  margin-bottom: 15px;
`

export default ArticleTagTreeLayout