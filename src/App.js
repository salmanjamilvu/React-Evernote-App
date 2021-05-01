import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App = () => {
  return (
    <Row>
      <Col span={4}>
        <Sidebar />
      </Col>
      <Col span={20}>
        <Content />
      </Col>
    </Row>
  );
}

export default App;
