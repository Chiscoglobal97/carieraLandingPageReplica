import { FiArrowRight, FiFileText } from "react-icons/fi";
import "./ArticleCard.css";

function ArticleCard({
  icon: Icon,
  cardTitle,
  articleOne,
  articleTwo,
  articleThree,
  articleFour,
  articleFive,
  articleSix,
  viewAllCount,
}) {
  return (
    <article className="articleCard">
      <header className="articleCardHeader">
        {Icon && (
          <Icon
            className="articleHeaderIcon"
            aria-hidden="true"
          />
        )}

        <h3 className="articleCardTitle">{cardTitle}</h3>
      </header>

      <div className="articleCardBody">
        <ul className="articleList">
          {articleOne && (
            <li className="articleListItem">
              <FiFileText
                className="articleDetailIcon"
                aria-hidden="true"
              />

              <a className="articleLink" href="#">
                {articleOne}
              </a>
            </li>
          )}

          {articleTwo && (
            <li className="articleListItem">
              <FiFileText
                className="articleDetailIcon"
                aria-hidden="true"
              />

              <a className="articleLink" href="#">
                {articleTwo}
              </a>
            </li>
          )}

          {articleThree && (
            <li className="articleListItem">
              <FiFileText
                className="articleDetailIcon"
                aria-hidden="true"
              />

              <a className="articleLink" href="#">
                {articleThree}
              </a>
            </li>
          )}

          {articleFour && (
            <li className="articleListItem">
              <FiFileText
                className="articleDetailIcon"
                aria-hidden="true"
              />

              <a className="articleLink" href="#">
                {articleFour}
              </a>
            </li>
          )}

          {articleFive && (
            <li className="articleListItem">
              <FiFileText
                className="articleDetailIcon"
                aria-hidden="true"
              />

              <a className="articleLink" href="#">
                {articleFive}
              </a>
            </li>
          )}

          {articleSix && (
            <li className="articleListItem">
              <FiFileText
                className="articleDetailIcon"
                aria-hidden="true"
              />

              <a className="articleLink" href="#">
                {articleSix}
              </a>
            </li>
          )}
        </ul>

        {viewAllCount && (
          <footer className="articleCardFooter">
            <a className="viewAllLink" href="#">
              <span>View All {viewAllCount}</span>

              <FiArrowRight
                className="viewAllIcon"
                aria-hidden="true"
              />
            </a>
          </footer>
        )}
      </div>
    </article>
  );
}

export default ArticleCard;