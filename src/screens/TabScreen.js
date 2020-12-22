/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Button, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#003366'}} hasTabs>
            <Left style={{flex:1}}>
              <Icon name='arrow-back' />
            </Left>
          <Body style={{flex:1}}> 
            <Title style={{color:'#FFFFFF'}}>React-Native</Title>
          </Body>
            <Right style={{flex:1}}>
              <Icon name='menu' />
            </Right>
          </Header>
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
