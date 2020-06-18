import React, { Component } from 'react';
class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//     //tags: ['tag1', 'tag2', 'tag3'],
//   };
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     else
  //       return (
  //         <ul>
  //           {this.state.tags.map((tag) => (
  //             <li key={tag}>{tag}</li>
  //           ))}
  //         </ul>
  //       );
  //   }
//   handleIncrement = () => {
//     //console.log(product);
//     this.setState({ value: this.state.value + 1 });
//   };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        
        <button
          onClick={() => {this.props.onIncrement(this.props.counter)}}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
 
      </div>
    );
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    if (this.props.counter.value === 0) {
      classes += 'warning';
    } else {
      classes += 'primary';
    }
    return classes;
  }
}

export default Counter;
