import { Types } from './action'
import { APPSETTING } from 'configs/app-setting'

const INITIAL_STATE = {
  ...APPSETTING,
  focusSearch: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.APP_FOCUS_SEARCH:
      return { ...state, focusSearch: payload.focus }

    default:
      return state
  }
}
