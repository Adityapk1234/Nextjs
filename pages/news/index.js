import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>;
      <ul>
        <li>
          <Link href="/news/Roger">Roger Federer is the greatest</Link>
        </li>
        <li>
          <Link href="/news/Rafael-nadal-is-good">
            Rafael Nadal is King of the clay
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
