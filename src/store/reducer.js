/**
 *@author  liumm308
 *@data  2020/09/03 14:30
 *@mail xidian_liu@163.com
 */

// 初始化状态
const initState = {
    bgColor: 'red'
};

export default (state = initState, action) => {
    switch (action.type){
        case 'bgColor':
            let _state = Object.assign({},state);
            _state.bgColor = action.bgColor;
            return _state;
        default:
            return state
    }
}