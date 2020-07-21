import React from 'react';

import Card from '../components/Card';

import schedule from '../assets/images/Schedule-Me.png';
import team from '../assets/images/team.png';
import employee from '../assets/images/employee.png';
import burger from '../assets/images/burger-preview.png';
import school from '../assets/images/school-spot.png';
import drinkinBad from '../assets/images/drinkin-bad.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Schedule-Me',
                    subTitle: 'A Scheduling App',
                    imgSrc: schedule,
                    link: 'https://scheduleme-mobile.herokuapp.com/',
                    github: 'https://github.com/ashleydeyoung/schedule-me',
                    selected: false
                },
                {
                    id: 1,
                    title: 'School-Spot',
                    subTitle: 'Grading App for teachers/students',
                    imgSrc: school,
                    link: 'https://fast-beach-51043.herokuapp.com/',
                    github: 'https://github.com/ashleydeyoung/School-Spot',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Eat-A-Burger',
                    subTitle: 'A burger game',
                    imgSrc: burger,
                    link: "https://frozen-beach-67804.herokuapp.com/",
                    github: 'https://github.com/ashleydeyoung/burger',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Drinkin\' Bad',
                    subTitle: 'A front End Breaking Bad Game',
                    imgSrc: drinkinBad,
                    link: 'https://ashleydeyoung.github.io/Drinking-Bad/',
                    github: 'https://github.com/ashleydeyoung/Drinking-Bad',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Employee Directory',
                    subTitle: 'A React Directory',
                    imgSrc: employee,
                    link: 'https://polar-forest-79071.herokuapp.com/',
                    github: 'https://github.com/ashleydeyoung/employee-directory',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Team Profile Generator',
                    subTitle: 'A Node CLI HTML generator',
                    imgSrc: team,
                    github: 'https://github.com/ashleydeyoung/Team-Profile-Generator',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;