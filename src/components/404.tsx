import * as React from 'react';

export interface NotFoundProps {
}

class NotFound extends React.Component<NotFoundProps, any> {
  render() {
    return (
      <div>
        <p>404</p>
      </div>
    );
  }
}

export default NotFound;
