import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, Pagination, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

import './ResultTable.scss'

const ResultTable = props => {
  const { cols, items, pageActive, setPageActive, loading } = props
  const pageItem = props.appReducer.TableRowPage
  //

  const [paginItem, setPaginItem] = useState([])
  //
  useEffect(() => {
    const pages = []
    if (items) {
      for (let page = 1; page <= Math.ceil(items.length / pageItem); page++) {
        pages.push(page)
      }
    }
    setPaginItem(pages)
  }, [items, pageItem])
  //
  const onPageChange = e => {
    if (e.target.text && Number(e.target.text) !== pageActive) setPageActive(Number(e.target.text))
  }
  //
  //   console.log('ResultTable-items', items)
  return (
    <div id="result-table">
      <Table>
        <thead>
          <tr>
            {/* Css when has items */}
            {items?.length > 0 &&
              cols?.map(col => <th key={col} className={items[0][col][1]}>{`${col}`}</th>)}
            {/* Only column when no data */}
            {!(items?.length > 0) && cols?.map(col => <th key={col}>{`${col}`}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* Loading */}
          {loading && (
            <tr>
              <td className="col-nodata" colSpan={cols?.length}>
                <Spinner animation="grow" variant="info" />
              </td>
            </tr>
          )}
          {/* Render items */}
          {!loading &&
            items
              ?.filter((_, index) => {
                return index >= (pageActive - 1) * pageItem && index < pageActive * pageItem
              })
              .map((item, index) => (
                <tr key={index}>
                  {cols.map(col => (
                    <td key={col}>
                      <div className={item[col][1] && item[col][1]}>{item[col][0]}</div>
                    </td>
                  ))}
                </tr>
              ))}
          {/* No data found */}
          {!loading && !(items?.length > 0) && (
            <tr>
              <td className="col-nodata" colSpan={cols?.length}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {!loading && (
        <Pagination id="pagin" onClick={onPageChange}>
          {paginItem.map(item => (
            <Pagination.Item key={item} active={item === pageActive}>
              {item}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  )
}

ResultTable.propTypes = {
  cols: PropTypes.array,
  items: PropTypes.array
}

export default connect(({ appReducer }) => ({ appReducer }))(ResultTable)
