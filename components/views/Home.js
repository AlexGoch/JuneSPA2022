import html from "html-literal";
import sharkImage from "../../assets/img/happy-shark-cartoon-character.jpg";

export default () => html`
  <section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="/">"Call to Action" "Button"</a>
  </section>

  <h3>
    The weather in ${store.weather.city} is ${store.Home.weather.description}. Temperature is ${store.weather.temp}F, and it feels like ${store.weather.feelsLike}F.
  </h3>
  <img class="cover-img" src="${sharkImage}" />
`;
