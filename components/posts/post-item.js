import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug, readerCount } = props.post;

  //console.log(props);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //const imagePath = `/images/posts/${slug}/${image}`;
  //const imagePath = `/images/placeholder.png`;
  const imagePath =  image;
  const linkPath = `/posts/${slug}`;



  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt} </p>
        </div>
        <div className={classes.startrating}>
        <span className={classes.svg_star}><svg className="svg_star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              fill="#FFD43B"
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg></span>
          <span> {readerCount}</span>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
