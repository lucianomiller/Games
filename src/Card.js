import "./card.css";
export default function Card({ name, background_image }) {
  console.log(name);
  return (
    <div class="">
      <div class="news-card">
        <a href="https://www.w3schools.com" class="news-card__card-lin"></a>
        <img src={background_image} alt="" class="news-card__image" />
        <div class="news-card__text-wrapper">
          <h2 class="news-card__title">{name}</h2>
          <div class="news-card__post-date">Jan 29, 2018</div>
          <div class="news-card__details-wrapper">
            <p class="news-card__excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              pariatur nemo tempore repellat? Ullam sed officia iure architecto
              deserunt distinctio, pariatur&hellip;
            </p>
            <a href="wwww.google.com" class="news-card__read-more">
              Read more <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
