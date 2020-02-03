import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'
import TabPage from './tabpage'
import { connect } from 'react-redux'
import { AppFocusSearch } from 'stores/app/action'

import './search.scss'

const Search = props => {
  const { AppFocusSearch } = props
  //
  useEffect(() => {
    AppFocusSearch(true)
  }, [AppFocusSearch])
  //
  return (
    <div id="search">
      <Tabs
        defaultActiveKey="hashtag"
        onClick={e => {
          //e.target.getAttribute('data-rb-event-key')
          AppFocusSearch(true)
          setTimeout(() => {
            AppFocusSearch(false)
          }, 100)
        }}
      >
        <Tab eventKey="hashtag" title="Hashtag search">
          <TabPage apiName="hashtags" formLabel="Hashtag search" placeholder="Serach by Hashtag" />
        </Tab>
        <Tab eventKey="user" title="User search">
          <TabPage apiName="users" formLabel="User search" placeholder="Serach by User" />
        </Tab>
      </Tabs>
    </div>
  )
}

Search.propTypes = {
  AppFocusSearch: PropTypes.func
}

export default connect(null, { AppFocusSearch })(Search)
