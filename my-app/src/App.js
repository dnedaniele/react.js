import logo from './logo.svg';
import './App.css';
import Product from "./Product"

function App(props) {

  props.pixel.page("name of the page", {
    search: "search term",
    numberSearchResults: 7,
    errorMessages: "error: ...",
    paywall: false,
    articleTitle: "article title",
    contentTags: "content tags",
    title: "page title",
    type: "page type",
    length: "medium",
    daysSincePublication: 5,
    testVariant: "test variant",
    testExperiment: "test experiment",
    parameter: {5: "parameter value 5"},
    category: {8: "category value 8"},
    goal: {2: "goal value 2"}
});

  return (
    <div className="App">
      <Product pixel={pixel} name="Backpack" price="12" quantity={4}></Product>
      <Product name="Backpack" price="12" quantity={1}></Product>
      <Product name="Backpack" price="12" quantity={2}></Product>
      <Product name="Tshirt" price="12" quantity={2}></Product>
      <Product name="Tshirt" price="12" quantity={2}></Product>
      <Product name="Tshirt" price="12" quantity={2}></Product>

    </div>
  );
}

export default App;
