import "./card.css";
import { Link } from "react-router-dom";
export default function Card({ name, background_image, released, id }) {
  
  return (
    <div class="">
      <div class="news-card">
        <a href="" class="news-card__card-lin"></a>
        <img src={background_image} alt="" class="news-card__image" />
        <div class="news-card__text-wrapper">
          <h2 class="news-card__title">{name}</h2>
          <div class="news-card__post-date">{released}</div>
          <div class="news-card__details-wrapper">
            
            <Link to={"/" + id}>
              <a /* href={"/" + id} */ class="news-card__read-more">
                Read more <i class="fas fa-long-arrow-alt-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
