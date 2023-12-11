import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { IoWarningOutline , IoShareSocialOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";


function CompanyName() {
  return (
    
      <Container fluid id='title'>
        <Container className="position-relative my-5">
          <Row className='text-nowrap'>
            <Col className="col-3 pt-2">(주)진솔 <Button variant="outline-primary" size="sm"><FaRegHeart className='mb-1'/> 관심기업</Button></Col>
          </Row>
          <Row>
            <Col className="fs-1 text-nowrap">진솔컴퍼니 백엔드 개발자 채용</Col>
          </Row>
          <Row xs="auto" className='position-absolute end-0'>
            <Col><BsPeopleFill className='mb-1'/> 조회수</Col>
            <Col><IoShareSocialOutline className='mb-1'/> 공유</Col>
            <Col><IoWarningOutline /> 신 고</Col>
          </Row>
        </Container>
      
        <Container fluid  id='condition' >
          <Row className='border-top border-bottom'>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </Container>
  );
}

export default CompanyName;
