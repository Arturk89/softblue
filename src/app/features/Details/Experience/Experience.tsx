import {
  DetailsWrapper,
  DetailsTitle,
  ArticlesWrapper,
  Article
} from '../components'

import { articles } from 'shared/articles'

export function Experience() {
  return (
    <DetailsWrapper>
      <DetailsTitle title="Experience" />
      <ArticlesWrapper>
        {articles.map((article) => (
          <Article key={article.id} text={article.text} />
        ))}
      </ArticlesWrapper>
    </DetailsWrapper>
  )
}
