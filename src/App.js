import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import taco from "./assets/food.jpg"; // Görsel yolu (senin yüklediğin resim)

function App() {
  const recipeData = {
    author: "Kodluyoruz",
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: taco,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    likeCount: 193,
    liked: true,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeData.author}
          title={recipeData.title}
          date={recipeData.date}
          food={recipeData.image}
          description={recipeData.description}
          likeCount={recipeData.likeCount}
          liked={recipeData.liked}
        />
      </header>
    </div>
  );
}

export default App;
