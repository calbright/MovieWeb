import React, { Component } from 'react';
import { Accordion,Badge,Button,Card,ListGroup } from 'react-bootstrap';

class Movie extends Component{
   
    render(){
        if(this.props.movie){
            let items = this.props.movie;
            return (
               <div className="container">
                   <p class="h1">Results<Badge pill variant ="primary">&nbsp;{items.length}</Badge></p>
                   {items.map((item,index) => 
                    <Accordion key={index}>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as ={Button} variants="link" eventKey="0">
                                {item.titleName},&nbsp;{item.releaseYear} 
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                 <Card.Body>
                                 <h6 className="card-subtitle">Language:</h6><p className="card-text">{item.storyLines[0].language}</p>
                                 <h6 className="card-subtitle">Description:</h6><p className="card-text">{item.storyLines[0].description}</p>
                                 <h6 className="card-subtitle">Source:</h6><p className="card-text">{item.storyLines[0].type}</p>
                                 <h6 className="card-subtitle">Genre:<Badge pill variant ="primary">{item.titleGenres.length}</Badge></h6>
                                 <Card style={{ width: '18rem' }}>
                                    <ListGroup variant="horizontal">
                                        {item.titleGenres.map((g, i) => (
                                <ListGroup.Item key={i}>{g.name}</ListGroup.Item>
                            ))}</ListGroup></Card><p></p>
                                <h6 className="card-subtitle">Awards:<Badge pill variant ="primary">&nbsp;{item.awards.length}</Badge></h6>
                                    <Card style={{ width: '18rem' }}>
                                        <ListGroup variant="flush" overflow="scroll">
                                            {item.awards.map((a, i) => (
                                    <ListGroup.Item key={i}>{a.award1}, {a.awardYear}</ListGroup.Item>
                                ))}</ListGroup>
                                    </Card><p></p>
                                    <h6 className="card-subtitle">Participants:<Badge pill variant ="primary">&nbsp;{item.titleParticipants.length}</Badge></h6>
                                    <Card style={{ width: '18rem' }}>
                                        <ListGroup variant="horizontal-sm">
                                            {item.titleParticipants.map((p, i) => (
                                    <ListGroup.Item key={i}>{p.name}, {p.roleType}</ListGroup.Item>
                                ))}</ListGroup>
                                    </Card>
                                 </Card.Body>                       
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                    </Accordion>)}
               </div>
            )
        }

        return null
    }
}

export default Movie;