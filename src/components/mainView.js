import React, { Component } from 'react'

export default class MainView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listData: [
                {
                    title: "Winnie",
                    content: [
                        "Buy Eggs From Grocery Store",
                        "Return Text Book"
                    ]
                },
                {
                    title: "Bob",
                    content: [
                        "Buy Eggs From Grocery Store",
                        "Return Text Book"
                    ]
                },
                {
                    title: "Thomas",
                    content: [
                        "Buy Eggs From Grocery Store",
                        "Return Text Book"
                    ]
                },
                {
                    title: "George",
                    content: [
                        "Buy Eggs From Grocery Store",
                        "Return Text Book"
                    ]
                }

            ]
        }
        this.renderMainList = this.renderMainList.bind(this);
        this.renderCardContent = this.renderCardContent.bind(this);
        //this.addNewCard = this.addNewCard.bind(this);

    }

    renderCardContent(cData){
       return (
         <li className="card">
            <div class="card-body">
                {cData}
            </div>
         </li>
       );
    }

    addNewCard(event){
        //console.log(event);
       const cardContent=  window.prompt("Enter New Card");
       if (!cardContent){
           return;
       }
       let cardStateContent = this.state.listData.filter((d)=> d.title === event);
            cardStateContent[0].content.push(cardContent);
            console.log(cardStateContent);

        this.setState({state: cardStateContent});

    }

    renderMainList(data){
       // debugger;
        return (
            <div key={data.title} className="column-item">
                <div className="column-header">{data.title}</div>
                <ul className="card-list">
                    {data.content.map(
                        (cData,i)=>{
                            return (<li key={i}> {cData} </li>);
                        }
                    )}
                    <button type="button" className="btn btn-primary mt-4" onClick={()=>this.addNewCard(data.title)}>Add a Card</button>
                </ul>
            </div>
        );
    }
    
    render() {
        console.log(this.state.listData.length);
        return (
            <div className="column-content my-4">
                {this.state.listData.map(this.renderMainList)}
            </div>
        )
    }
}
