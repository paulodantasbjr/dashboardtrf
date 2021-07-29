import React from 'react'
import ContentLoader from 'react-content-loader'
import { LoadingStyled } from './styled'

const Loading = () => {
  return (
    <LoadingStyled>
      <ContentLoader
        viewBox='0 0 400 160'
        height={160}
        width={400}
        backgroundColor='transparent'
      >
        <circle cx='150' cy='86' r='8' />
        <circle cx='194' cy='86' r='8' />
        <circle cx='238' cy='86' r='8' />
      </ContentLoader>
    </LoadingStyled>
  )
}

export default Loading
