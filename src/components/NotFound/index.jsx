import React from 'react';


/**
 * 404 页面
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
          <label>页面走丢了，请联系管理员！</label>
          <p>尝试去<span>首页</span>看看</p>
      </div>
    )
  }
}
