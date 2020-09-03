/**
 *@author  liumm308
 *@data  2020/09/03 14:27
 *@mail xidian_liu@163.com
 */

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
);

export default store;