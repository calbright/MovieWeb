import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class Movie extends Component{
   
    render(){
        if(this.props.movie){
            let items = this.props.movie;
            return (
               <div>
                   {items.map((item,index) => 
                    <div class ="card" className="text-primary bg-dark">
                       <div class="card-body" key={index}>
                           <h5 class="card-title">{item.titleName}, {item.releaseYear}</h5>
                           <ListGroup className="bg-dark">
                                <ListGroupItem><Badge color="primary">Story:</Badge> {item.storyLines[0].description}</ListGroupItem>
                            </ListGroup>
                            <ListGroup className="bg-dark">
                            <ListGroupItem><Badge color="secondary">Genre:</Badge> 
                            {item.titleGenres.map((g, i) => (
                                <span>&nbsp;{g.name}</span>
                            ))}</ListGroupItem></ListGroup>
                            <ListGroup className="bg-dark">
                            <ListGroupItem><Badge color="dark">Awards:</Badge>
                            {item.awards.map((a, i) => (
                                <span>&nbsp;{a.award1},{a.awardYear}</span>
                            ))}</ListGroupItem></ListGroup>
                             <ListGroup className="bg-dark">
                            <ListGroupItem><Badge color="success">Participants:</Badge>
                            {item.titleParticipants.map((p, i) => (
                                <span>&nbsp;{p.name},{p.roleType}</span>
                            ))}</ListGroupItem></ListGroup>
                        </div>
                    </div> )}
               </div>
            )
        }

        return null
    }
}

export default Movie;