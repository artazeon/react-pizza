import React from 'react'
import { SearchContext } from '../App'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagenation from '../components/Pagenation/Pagenation'

const Home = () => {
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [pagenation, setPagenation] = React.useState({
    total_pages: 1,
    current_page: 1,
  })
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortType, setSortType] = React.useState({
    name: 'популярности ↓',
    sortProperty: '-rating',
  })

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : 'category=*'
    const sort = `&sortBy=${sortType.sortProperty}`
    const search = searchValue ? `&title=*${searchValue}*` : ''

    setIsLoading(true)
    fetch(
      `https://7a864f3f9ff03705.mokky.dev/items?page=${currentPage}&limit=8&${category}${sort}${search}`
    )
      .then((res) => res.json())
      .then((obj) => {
        setItems(obj.items)
        setPagenation(obj.meta)
        setCurrentPage(obj.meta.current_page)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  const pizzas = items.map((obj, index) => <PizzaBlock {...obj} key={index} />)
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

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
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagenation
          pagenation={pagenation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onChangePage={(number) => setCurrentPage(number)}
        />
      </div>
    </>
  )
}

export default Home
