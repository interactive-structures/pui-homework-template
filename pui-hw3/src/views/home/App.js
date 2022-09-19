import './App.css';
import Roll from './Roll';
import NavBar from './NavBar';

function App() {
  return (
    <body>
      <NavBar 
        logo="/pui-assignments/pui-hw3/assets/logo-01.svg" />

      <div className="row">
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <Roll 
          imageURL="/pui-assignments/pui-hw3/assets/original-cinnamon-roll.jpg"
          name="Original cinnamon roll"
          price="$2.49"/>
        <Roll 
          imageURL="/pui-assignments/pui-hw3/assets/apple-cinnamon-roll.jpg"
          name="Apple cinnamon roll"
          price="$3.49"/>
        <Roll 
          imageURL="/pui-assignments/pui-hw3/assets/raisin-cinnamon-roll.jpg"
          name="Raisin cinnamon roll"
          price="$2.99"/>
      </div>

      <div className="row">
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <Roll 
          imageURL="/pui-assignments/pui-hw3/assets/walnut-cinnamon-roll.jpg"
          name="Walnut cinnamon roll"
          price="$3.49"/>
        <Roll 
          imageURL="/pui-assignments/pui-hw3/assets/double-chocolate-cinnamon-roll.jpg"
          name="Double-chocolate cinnamon roll"
          price="$3.99"/>
        <Roll 
          imageURL="/pui-assignments/pui-hw3/assets/strawberry-cinnamon-roll.jpg"
          name="Strawberry cinnamon roll"
          price="$3.99"/>
      </div>
    </body>

  );
}

export default App;
