import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/kanika.png'
          alt='My image'
          width={150}
          height={150}
        />
      </div>
      <div className={classes.hero_intro}>
      <h1>Greetings! This is Kanika</h1>
      <p>
        This is my submission for my Internship assignment @Atlan  
      </p>
      </div>

    </section>
  );
}

export default Hero;