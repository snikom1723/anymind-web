import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // import { AsyncStorage as storage} from 'react-native'
import createSaga from 'redux-saga'
import rootReducer, { rootPersist, authPersist } from './rootRedus'
import rootSaga from './rootSagas'
import crypto from '../services/crypto'

// Encrypt
const cryptoTransform = createTransform(
  inboundState => {
    if (!inboundState) return inboundState
    return crypto.encrypt(JSON.stringify(inboundState))
  },
  outboundState => {
    if (!outboundState) return outboundState
    return JSON.parse(crypto.decrypt(outboundState))
  },
  { whitelist: authPersist }
)

// PersistConfig
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: rootPersist,
  transforms: [cryptoTransform]
}

// Saga
const sagaMidleware = createSaga()

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMidleware))

// store
export const store = createStore(persistReducer(rootPersistConfig, rootReducer), enhancer)

// persistStore
export const persistor = persistStore(store)

// Kick off the root saga
sagaMidleware.run(rootSaga)
