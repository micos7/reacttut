 var a = React.DOM.a;
      var h1 = React.DOM.h1;

      var Hello = React.createClass({
      render: function() {
        var styles = {color: this.props.color};
        return <h1><a href={this.props.link} style={styles}>{this.props.title}</a></h1>    
      }
    });


      var App = React.createClass({
        render: function(){
          return (
            <div>
            {this.props.children}
              <Hello title="Google" link="https://google.com" color="red" />
              <Hello title="Instagram" link="https://instagram.com" color="green" />
              <Hello title="Twitter" link="https://twitter.com" color="blue" />
            </div>
            )
        }
      })
      
    

    ReactDOM.render(<App>Testing</App>,document.getElementById('root'))