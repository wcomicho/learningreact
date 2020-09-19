import React from 'react';

import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import IndexKey from './components/IndexKey';
import Form from './components/Form';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import CounterTwo from './components/CounterTwo';


function App() {
  return (
    <div className="App">
      <Accordion defaultActiveKey="0">
        
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Say Hello by Calling a function component using React
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Hello/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Set State Sample Code using React
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Counter iniCount="5"/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Simple event and method binding using React
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Welcome/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Using props in React
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Greet name="Bruce" heroName="Batman"/>
              <Greet name="Clark" heroName="Superman"/>
              <Greet name="Diana" heroName="Wonder Woman"/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Event Binding in React
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="4">
            <Card.Body><EventBind/></Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Listing objects or arrays in React
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="5">
            <Card.Body><NameList/></Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Parent Child method calling
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body><ParentComponent/></Card.Body>
          </Accordion.Collapse>
        </Card>


        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              Using Index as Key in React
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body><IndexKey/></Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="8">
               Controlled components
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
            <Form/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
               Pure Component and using Memo for function component
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
            <ParentComp/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="10">
               Ref demo
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
            <RefDemo/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="11">
               Input Ref Class
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
            <FocusInput/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="12">
               Ref forwarding
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <FRParentInput/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="13">
              Error Boundary
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="13">
            <Card.Body>
                <ErrorBoundary>
                <Hero heroName="Batman"/>
                </ErrorBoundary>
                <ErrorBoundary> 
                <Hero heroName="Superman"/>
                </ErrorBoundary>
                <ErrorBoundary>
                <Hero heroName="Wonder Woman"/>
                </ErrorBoundary>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="14">
              Higher Order Components
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="14">
            <Card.Body>
                
                <ClickCounter name='User Name'/>
                <HoverCounter/>

            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="15">
              Render Props
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
                
                <User render={(isLoggedIn) => isLoggedIn ? 'Hello Will' : 'Hello guest'}/>

                <CounterTwo>
                  {
                    (count, incrementCount)=>(
                      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
                    )
                  }
                </CounterTwo>

                <CounterTwo>
                  {
                    (count, incrementCount)=>(
                      <HoverCounter2 count={count} incrementCount={incrementCount}/>
                    )
                  }
                </CounterTwo>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <PortalDemo/>
    </div>
  );
}

export default App;
