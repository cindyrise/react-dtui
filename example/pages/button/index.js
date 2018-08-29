import React from 'react';
import {Button, ButtonArea} from '../../../release/dist/roo-bat.min';
//import {Button, ButtonArea} from '../../../release/lib/index';
import Layout from '../../layout';
import './style.scss';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <Layout className="button" title="Button" subTitle="按钮" spacing>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button component="p">component-p</Button>
                <Button type="vcode">btn -a</Button>
                <ButtonArea>
                    <Button  className="dtui-bb" type="default">Secondary Normal</Button>
                    <Button type="default" disabled>Secondary Disabled</Button>
                </ButtonArea>

                <ButtonArea direction="horizontal">
                    <Button type="warn">Warn Normal</Button>
                    <Button type="warn" disabled>Disabled</Button>
                </ButtonArea>
                <div className="button-sp-area">
                    <Button type="primary" plain>Button</Button>
                    <Button type="primary" plain disabled>Button</Button>
                    <Button type="default" plain>Button</Button>
                    <Button size="small">Mini</Button>
                    <Button type="default" size="small">Mini</Button>
                    <Button type="warn" size="small">Mini</Button>
                </div>
            </Layout>
        );
    }
};
