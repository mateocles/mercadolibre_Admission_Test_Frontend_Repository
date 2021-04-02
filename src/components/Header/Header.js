/* eslint-disable indent */
import * as React from 'react';
import { Input, Row, Col } from 'antd';
import './Header.css';
import logo from '../../assets/images/Icon/Logo_ML.png';
import 'antd/dist/antd.css';

const { Search } = Input;

const onSearch = (value) => console.log(value);
export const Header = () => {
    return (
        <nav className="navBar">
            <Row gutter={[16, 24]} className="headerSearch">
                <Col span={6} className="imgLogo">
                    <img alt="logo de mercado libre" src={logo} />
                </Col>
                <Col span={6}>
                    <Search
                        placeholder="Nunca dejes de buscar"
                        onSearch={onSearch}
                        style={{ width: 800, height: 30 }}
                    />
                </Col>
            </Row>
        </nav>
    );
};
