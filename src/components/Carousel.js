import React from 'react';

import Card from '../components/Card';

import schedule from '../assets/images/Schedule-Me.png';
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
                    selected: false
                },
                {
                    id: 1,
                    title: 'School-Spot',
                    subTitle: 'Grading App for teachers/students',
                    imgSrc: school,
                    link: 'https://fast-beach-51043.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Eat-A-Burger',
                    subTitle: 'A burger game',
                    imgSrc: burger,
                    link: "https://frozen-beach-67804.herokuapp.com/",
                    selected: false
                },
                {
                    id: 3,
                    title: 'Drinkin\' Bad',
                    subTitle: 'A front End Breaking Bad Game',
                    imgSrc: drinkinBad,
                    link: 'https://ashleydeyoung.github.io/Drinking-Bad/',
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