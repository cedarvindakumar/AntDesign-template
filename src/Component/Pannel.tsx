import Layout, { Content } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import AppFooter from './Footer/Footer'
import Menus from './Menu/Menus'
import Header from './Header/Header'

export default function Pannel() {

    return (
        <>
            <Menus />
            <Layout className='app-layout'>
                <Header />
                <Layout className='app-content'>
                    <Content>
                        Content
                    </Content>
                </Layout>
                <AppFooter />
            </Layout>
        </>
    )
}
