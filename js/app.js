
class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState((prevState,props)=>(
            {
                count: prevState.count + 1
            }
        ))
    }
                

    decrement() {
         this.setState((prevState,props)=>(
            {
                count: prevState.count > 0 ? prevState.count - 1 : 0
            }
        ))
    }

    render() {
        return <div>
            <h1>You have {this.state.count} friends!</h1>
            <button onClick={this.increment} >Add new friend</button>
            <button onClick={this.decrement}>Remove friend</button>
        </div>
         
    }

    
}

ReactDOM.render(<Counter></Counter>,document.getElementById('root'))
