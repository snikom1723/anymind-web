const Action = (type, payload) => ({ type, payload })

export const Types = {
  APP_SEACH_LOAD: 'APP_SEACH_LOAD'
}

export const AppSeachLoad = (apiName, search, onCallback) =>
  Action(Types.APP_SEACH_LOAD, { apiName, search, onCallback })
