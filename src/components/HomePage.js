import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Header from './Header'
import Sider from './Sider'
import Table from './Table'
import { Outlet } from 'react-router-dom'
function HomePage() {
  return (
    <Container>
      <Header/>
      <Row style={{marginTop:'20px'}}>
        <Col md={3}>
            <Sider/>
        </Col>
        <Col md={9}>
            <Outlet/>
        </Col>
      </Row>
      <hr></hr>
      <h5 style={{textAlign:'center'}}>Copyright by: HExxxxxx</h5>
    </Container>
  )
}

export default HomePage
