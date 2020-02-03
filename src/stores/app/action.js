const Action = (type, payload) => ({ type, payload })

export const Types = {
  APP_SEACH_LOAD: 'APP_SEACH_LOAD',
  APP_FOCUS_SEARCH: 'APP_FOCUS_SEARCH'
}

export const AppSeachLoad = (apiName, search, onCallback) =>
  Action(Types.APP_SEACH_LOAD, { apiName, search, onCallback })

export const AppFocusSearch = focus => Action(Types.APP_FOCUS_SEARCH, { focus })
