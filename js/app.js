
    class Hello extends React.Component {
        render(){
            var styles = {color: this.props.color};
            return <h1><a href={this.props.link} style={styles}>{this.props.title}</a></h1>
        }
    }


    class App extends React.Component {
        render(){
          return (
            <div>
            {this.props.children}
              <Hello title="Google" link="https://google.com" color="red" />
              <Hello title="Instagram" link="https://instagram.com" color="green" />
              <Hello title="Twitter" link="https://twitter.com" color="blue" />
            </div>
            )
        }
    }

    

    ReactDOM.render(<App></App>,document.querySelector('#root'))