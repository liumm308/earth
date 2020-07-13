import React from 'react';
import styles from './index.module.less';

/**
 * 404 页面
 */
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    goHome = () =>{
        this.props.history.push({
            pathname: '/home',
        })
    };
    render() {
        return(
            <div className={styles['notFound-content']}>

            </div>
        )
    }
}
