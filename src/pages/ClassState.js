import React, { Component } from 'react';

class ClassState extends Component{

    // contructor initialize an object's state in class
    constructor() {
        super()
        this.state = {
            sampleContent: "Hello Worlds",
            bgcol: "red" 
        };
        this.changeElement = this.changeElement.bind(this);
    }
    changeElement(){
        // element = "Wow Nabago";
        // document.getElementById("sampleElement").innerHTML = "Wow nabago";
        // this.setState({sampleContent: "Wow Nabago"})
        // this.setState({bgcol: "yellow"})
        this.state.bgcol == "red" ? this.setState({sampleContent: "Wow Nabago",bgcol: "yellow"}) : this.setState({bgcol: "red"});
        // Sample conditional statement using ternary operator
    }   
    render(){
        // let element = "meow";
        const {bgcol, sampleContent} = this.state;
        return(
            <>
                <h1 id="sampleElement" style={{background: this.state.bgcol}}>{this.state.sampleContent}</h1>
                <button onClick={this.changeElement}>Change sample Element</button>
                {/* <button onClick={() =>this.changeElement()}>Change sample Element</button> */}
            </>
        );
    }
}

export default ClassState;
