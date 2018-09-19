import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import Words from './components/Words';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            activeBlockId: 1
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    navCheck(event) {
        this.setState({activeBlockId: event});
    }

    render() {
        let activeBlock;
        if (this.state.activeBlockId === 1) {
            activeBlock = <Dashboard/>
        } else if (this.state.activeBlockId === 2) {
            activeBlock = <Quiz/>
        } else if (this.state.activeBlockId === 3) {
            activeBlock = <Words/>
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <Navbar color="inverse" light expand="md">
                            <NavbarBrand href="/">Language study service</NavbarBrand>
                            <NavbarToggler onClick={this.toggle}/>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink>Boss</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/logout">Logout</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/fi1ipx/LanguagesStudyService">Github</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs="1" sm="2">
                        <div>
                            <Nav vertical>
                                <NavLink href="#" onClick={() => this.navCheck(1)}>Dashboard</NavLink>
                                <NavLink href="#" onClick={() => this.navCheck(2)}>Quiz</NavLink>
                                <NavLink href="#" onClick={() => this.navCheck(3)}>Words</NavLink>
                            </Nav>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {activeBlock}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
