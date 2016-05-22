'use strict';

var React = require('react');

// include the `Link` and `IndexLink` components from `react-router` which allows us to link to other routes
var { Link, IndexLink } = require('react-router');

// add foundation `top-bar` styling
var Nav = React.createClass({
    onSearch: function onSearchNav(e) {
      e.preventDefault();
      
      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);
      
      if (location.length > 0) {
          this.refs.search.value = '';
          window.location.hash = `#/?location=${ encodedLocation }`;
      }
      
    },
    render: function renderNav () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={ this.onSearch }>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="search" placeholder="Search weather by city..." />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

// // refactor as a stateless functional component
// var Nav = props => {
//     return (
//         <div>
//             <h2>Nav Component</h2>
//             <ul>
//                 <li>
//                     <IndexLink to="/" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>Get Weather</IndexLink>
//                 </li>
//                 <li>
//                     <Link to="/about" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>About</Link>
//                 </li>
//                 <li>
//                     <Link to="/examples" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>Examples</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// // as you can see within the `Link` component we use the `to` attribute to define the route we are linking to
// // we use `IndexLink` to flag our `IndexRoute` and treat it appropriately
// // for example if we just used the regular `Link` component react would match this link as 'active' for all routes with the `activeClassName` attribute
// // this is because without knowing this is the index route the '/' route would match for every route   
// var Nav = React.createClass({
//     render: function renderNav () {
//         return (
//             <div>
//                 <h2>Nav Component</h2>
//                 <ul>
//                     <li>
//                         <IndexLink to="/" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>Get Weather</IndexLink>
//                     </li>
//                     <li>
//                         <Link to="/about" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>About</Link>
//                     </li>
//                     <li>
//                         <Link to="/examples" activeClassName="active" activeStyle={ { fontWeight: 'bold' } }>Examples</Link>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// });

module.exports = Nav;