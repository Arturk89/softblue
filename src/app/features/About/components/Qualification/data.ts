type Experience = {
  id: number
  company: string
  description: string
  from: string
  to: string | null
}

export const data: Experience[] = [
  {
    id: 1,
    company: 'Behancer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    from: '2017-01-10',
    to: '2017-06-25'
  },
  {
    id: 2,
    company: 'Dribbble',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    from: '2017-07-11',
    to: '2017-12-07'
  },
  {
    id: 3,
    company: 'Themforest',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    from: '2018-01-12',
    to: '2018-12-26'
  },
  {
    id: 4,
    company: 'Behancer',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    from: '2019-01-01',
    to: null
  }
]
