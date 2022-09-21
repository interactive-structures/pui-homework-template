import './App.css';
import Roll from './Roll';
import NavBar from './NavBar';

function App() {
  return (
    <body>
      <NavBar 
        logo="/assets/logo-01.svg" />

      <div className="row">
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <Roll 
          imageURL="/assets/original-cinnamon-roll.jpg"
          name="Original cinnamon roll"
          price="$2.49"/>
        <Roll 
          imageURL="/assets/apple-cinnamon-roll.jpg"
          name="Apple cinnamon roll"
          price="$3.49"/>
        <Roll 
          imageURL="/assets/raisin-cinnamon-roll.jpg"
          name="Raisin cinnamon roll"
          price="$2.99"/>
      </div>

      <div className="row">
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <Roll 
          imageURL="/assets/walnut-cinnamon-roll.jpg"
          name="Walnut cinnamon roll"
          price="$3.49"/>
        <Roll 
          imageURL="/assets/double-chocolate-cinnamon-roll.jpg"
          name="Double-chocolate cinnamon roll"
          price="$3.99"/>
        <Roll 
          imageURL="/assets/strawberry-cinnamon-roll.jpg"
          name="Strawberry cinnamon roll"
          price="$3.99"/>
      </div>
    </body>

  );
}

export default App;
