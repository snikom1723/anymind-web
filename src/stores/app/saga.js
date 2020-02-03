import { takeLatest, call } from 'redux-saga/effects'
import * as act from './action'
import api from 'services/api'

const { Types } = act

function* appSearchLoad({ payload }) {
  const { apiName, search, onCallback } = payload
  //
  const apiLoad = () =>
    api()
      .get(`/${apiName}/${search}?offset=0`)
      .then(res => {
        return res.data.results
      })
  //
  try {
    const items = (yield call(apiLoad)) || []
    onCallback(items)
  } catch (error) {
    console.error('appSearchLoad', error)
  }
}

export default [takeLatest(Types.APP_SEACH_LOAD, appSearchLoad)]
