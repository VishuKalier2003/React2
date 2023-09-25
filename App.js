import React from 'react';
import Card from './components/Card.jsx';
import DATA from './components/DATA.jsx';
import Heading from './components/Heading.js';


// Props to be displayed is provided in nCard function...
function nCard(val) {
  return(
  <Card
    id={val.id}
    image={val.image}
    name={val.name}
    price={val.price}
    variety={val.variety}
    discount={val.discount}
  />
  )
}

// In-File CSS...
const box = {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '30px',
  rowGap: '75px',
  top: '40px',
  padding: '100px 150px',
}

// Main App function...
function App() {
  return (
    <div style={box}>
    <Heading />
    {DATA.map(nCard)}
    </div>
  )
}

export default App;
