import * as React from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

type Props = {
  children: React.Node,
}

class Portal extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children,
      this.el,
    );
  }
}

export default Portal;
