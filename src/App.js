import './App.css';
import Diena from "./Diena";
import styles from "./Diena.module.css"

function App() {
  const visasStundas = [
    {
      diena: "Pirmdiena",
      stundas: [
        "Lat. val",
        "Sports",
        "Matemātika",
        "Pats. darbs"
      ]
    }
  ]




const dienaJSX = visasStundas.map((diena, indekss) => {
  return (
      <div class="dienasDiv">
        <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
      </div>
  )
}
);

return (
  <>
    {dienaJSX}
  </>
)
}

export default App;

