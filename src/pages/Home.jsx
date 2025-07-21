import React from 'react'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name: 'популярности ↓',
    sortProperty: '-rating',
  })

  const category = categoryId > 0 ? `category=${categoryId}` : 'category=*'
  const sort = `&sortBy=${sortType.sortProperty}`

  React.useEffect(() => {
    setIsLoading(true)
    fetch(`https://7a864f3f9ff03705.mokky.dev/items?${category}${sort}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType])

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onClickCategory={(index) => {
              setCategoryId(index)
            }}
          />
          <Sort
            value={sortType}
            onChangeSort={(index) => {
              setSortType(index)
            }}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj, index) => <PizzaBlock {...obj} key={index} />)}
        </div>
      </div>
    </>
  )
}

export default Home
