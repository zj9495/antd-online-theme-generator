import React, {ReactNode} from 'react';
import { Row, Col } from 'antd';

interface Props {
  left: any;
  right: ReactNode;
}

const Layout = (props: Props) => {
  const { left, right } = props;
  return (
    <Row className="container">
      <Col span={16}>
        {left}
      </Col>
      <Col span={8}>
        {right}
      </Col>
    </Row>
  )
}

export default Layout;