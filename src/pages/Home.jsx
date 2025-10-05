import React from 'react'
import axios from 'axios'

import { SearchContext } from '../App'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagenation from '../components/Pagenation/Pagenation'

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter)

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const [pagenation, setPagenation] = React.useState({
    total_pages: 1,
    current_page: 1,
  })

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : 'category=*'
    const sortBy = `&sortBy=${sort.sortProperty}`
    const search = searchValue ? `&title=*${searchValue}*` : ''

    axios
      .get(
        `https://7a864f3f9ff03705.mokky.dev/items?page=${currentPage}&limit=4&${category}${sortBy}${search}`
      )
      .then((res) => {
        setItems(res.data.items)
        setPagenation(res.data.meta)
        setCurrentPage(res.data.meta.current_page)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((obj, index) => <PizzaBlock {...obj} key={index} />)
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagenation currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  )
}

export default Home
