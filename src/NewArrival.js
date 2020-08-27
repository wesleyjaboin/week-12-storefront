import React from 'react'


class NewArrival extends React.Component {
    constructor () {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
        .then((response) => { 
            this.setState({ response: response.length + ' items found' }) 
        } )
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('http://localhost:3001/NewArrival');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        return (
            <div>
                <div>New arrival Place holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default NewArrival