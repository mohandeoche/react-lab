import "./overview.scss";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h4>Our review</h4>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
