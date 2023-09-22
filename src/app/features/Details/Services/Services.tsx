import {
  DetailsWrapper,
  DetailsTitle,
  ArticlesWrapper,
  Article
} from '../components'

import { articles } from 'shared/articles'

export function Services() {
  return (
    <DetailsWrapper>
      <DetailsTitle title="Services" />
      <ArticlesWrapper>
        {articles.map((article) => (
          <Article key={article.id} text={article.text} />
        ))}
      </ArticlesWrapper>
    </DetailsWrapper>
  )
}
