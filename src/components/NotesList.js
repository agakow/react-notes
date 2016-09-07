import React from 'react';
import Note from './Note';

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  render() {
    return (
      <ul>
        {this.state.notes.map(this.eachNote)}
      </ul>
    )
  }
  componentWillMount() {
    var self = this
    var arr = [];
    $.getJSON("https://spy-api.herokuapp.com/apis?api-key=043d38e30b3685edff633897d9fd1483f54b7d1e&json=Notes", function(results) {
        results.notes.forEach(function(note) {
          arr.push({id: note.id, content: note.content});
          self.setState({notes: arr});
        })
        console.log(self.state.notes)
    })
  }
  eachNote(note) {
    return <Note key={note.id}>{note.content}</Note>
  };

};

export default NotesList;
