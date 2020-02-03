import './search.scss'
import React from 'react'
// import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'
import TabPage from './tabpage'

const search = props => {
  return (
    <div id="search">
      <Tabs defaultActiveKey="hashtag">
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

search.propTypes = {}

export default search
