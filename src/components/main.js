import React, { Component } from 'react';




import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #fff;
    font-size: 40x;
    font-weight: 700;
    line-height: 50px;

    span{
        display: block;
        font-size: 24px;
        line-height: 30px;
        font-weight: 300;
    }
`

const LightText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`
const CallBtn = styled.button`
    weight: 247px;
    height: 67px;
    background-color: #ffa14b;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 800;
    margin-top: 32px;
    border: none;
`

class Main extends React.Component{
    render(){
        return(
           <Row>
                <Col lg={5}>
                    <Repair> Качественный ремонт
                        <span>Гарантия год</span>
                    </Repair>
                    <LightText>Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, 
                        стоимостью в 1000 рублей в подарок!
                    </LightText>
                    <CallBtn>Оставить заявку</CallBtn>
                </Col>
                <Col lg={6} lgOffset={1}>

                </Col>
            </Row>
        )
    }

}

export default Main;