import React from 'react';
import './App.css';
import Header from '../src/attoms/header.jsx';
import Footer from '../src/attoms/footer';
import Avatar from '../src/attoms/avatar';
import Card from '../src/attoms/card';
import Badge from '../src/attoms/badge';
import Counter from '../src/attoms/counter';
import avatar2 from '../src/img/avatar2.png'

function App() {
  return (
    <div className="App">
      <Header title="React Beginner's Quiz" />
      
      <div className="card-container">
        <Card title="Card 2 Title" content="Content for Card 2" />
        <Card title="Card 1 Title" content="Content for Card 1">
          <Counter /> {/* Integrate the Counter component here */}
        </Card>
        <Card title="Card 3 Title" content="Content for Card 3" />

      </div>
      
      
      <Avatar imageSrc= {avatar2} description="Avatar Image" />
      
      <Badge label="New!" />
      
      <Footer content="Created with ❤️ by [David Cedillo]" />
    </div>
  );
}

export default App;
