import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // whitelist: ['auth'] // Only persist the auth slice if you want
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;