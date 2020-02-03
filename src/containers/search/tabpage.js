import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchBox from 'components/SearchBox'
import ResultTable from 'components/ResultTable'
import { connect } from 'react-redux'
import { AppSeachLoad } from 'stores/app/action'

const TabPage = props => {
  const { apiName, formLabel, placeholder, AppSeachLoad } = props
  const [search, setSearch] = useState('')
  const [items, setItems] = useState(null)
  const [cols, setCols] = useState(null)
  const [pageActive, setPageActive] = useState(1)
  const [loading, setLoading] = useState(false)
  //
  useEffect(() => {
    setCols(['Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'])
  }, [])
  //
  const onSubmit = search => {
    //
    if (!search) {
      setItems(null)
      return
    }
    //
    setLoading(true)
    AppSeachLoad(apiName, search, items => {
      setLoading(false)
      items = items.map(item => {
        return {
          Tweet: [
            item.text.length > 50 ? `${item.text.substring(0, 49)}...` : item.text,
            'col-text'
          ],
          Likes: [item.likes > 0 ? item.likes : '-', 'col-number'],
          Replies: [item.replies > 0 ? item.replies : '-', 'col-number'],
          Retweets: [item.retweets > 0 ? item.retweets : '-', 'col-number'],
          Hashtags: [(item.hashtags || []).filter((_, index) => index <= 1).join(', ')],
          Date: [
            new Date(item.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }),
            'col-date'
          ]
        }
      })
      //
      setItems(items)
      setPageActive(1)
    })
  }
  //
  return (
    <div>
      <SearchBox
        formLabel={formLabel}
        placeholder={placeholder}
        value={search}
        onChange={setSearch}
        onSubmit={onSubmit}
      />
      <ResultTable
        cols={cols}
        items={items}
        pageActive={pageActive}
        setPageActive={setPageActive}
        loading={loading}
      />
    </div>
  )
}

TabPage.propTypes = {
  AppSeachLoad: PropTypes.func
}

export default connect(null, { AppSeachLoad })(TabPage)
