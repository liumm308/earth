/**
 *@author  liumm308
 *@data  2020/07/21 14:31
 *@mail xidian_liu@163.com
 */
import  React from 'React';

export let a = 123;

export const f = function f() {
    return new Date().getTime();
}

export const A = class Test1 extends React.Component{
     constructor(props){
         // noinspection JSAnnotator
         super(props);
     }
     name = 'name is A';
     getPropsA(){
        return this.name;
     }

     render(){
         return (
             <div>classA</div>
         )
     }
};

export const B = class Test2 extends A{
    constructor(props){
        super(props)
    }
    name = 'name is B';
    getPropsB(){
        return this.name;
    }
    render(){
        return (
            <div>classB</div>
        )
    }
};