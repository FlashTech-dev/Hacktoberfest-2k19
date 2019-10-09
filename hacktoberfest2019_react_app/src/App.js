import React from 'react';
import {Layout, Header, Navigation, Drawer, Content, Button, IconButton } from 'react-mdl';
import { Card, CardText, CardActions, CardTitle, CardMenu } from 'react-mdl/lib/Card';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title="Hacktoberfest React App" scroll>

            </Header>
            <Drawer title="Hacktoberfest React App">
            </Drawer>
            <Content>
              <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>Welcome to Hacktoberfest 2019</CardTitle>
                  <CardText>
                      Are you Ready?
                  </CardText>
                  <CardActions border>
                        <Button colored>Get Started</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                  </CardMenu>
              </Card>
            </Content>
        </Layout>
    </div>
  );
}

export default App;