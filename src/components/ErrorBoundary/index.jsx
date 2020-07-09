import React from 'react';
import styles from './index.module.less';

/**
 * 应用错误便捷
 */
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            info: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error, info });
    }

    render() {
        if (this.state.hasError) {
            return <div className={styles["errorBoundary-content"]}>
              <div className={styles['errorBoundary-tip']}>页面产生错误，请联系管理员!</div>

            </div>;

        }
        return this.props.children;
    }
}
