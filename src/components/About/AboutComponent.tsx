import { Fade, Slide } from 'react-awesome-reveal';
import Typed from 'react-typed';

const AboutComponent = () => (
  <section className="container mx-auto grid grid-cols-12 gap-4">
    <div className="pt-6 flex flex-col gap-3 col-start-2 col-end-12 text-stone-100 text-base lowercase">
      <Slide direction="down" duration={250} triggerOnce>
        <h1 className="text-4xl">
          Hello, my name is{' '}
          <span className="text-green-500">
            <Typed
              strings={[`luan`, `code`, `luancode`, `luan`]}
              typeSpeed={75}
              backSpeed={50}
            />
          </span>{' '}
          and now you're going to find out a little about me
        </h1>
      </Slide>

      <Fade cascade delay={150} duration={400} triggerOnce>
        <p>
          I have a degree in Software Analysis and Development, which provided
          me with a deep understanding of software engineering principles. Based
          on this, I pursued an MBA in Software Engineering, honing my strategic
          thinking and leadership skills, enabling me to bridge the gap between
          technical expertise and business objectives. And, not least, design
          things are my favourite hobby.
        </p>

        <p>
          I'm focus on front-end technologies such as HTML, CSS, JavaScript, and
          various modern frameworks. I believe that a well-crafted front-end not
          only enhances usability but also plays a pivotal role in elevating the
          overall user experience.
        </p>

        <p>
          Finally, i think in ensuring that my front-end solutions are not only
          aesthetically pleasing but also optimized for speed, accessibility,
          and compatibility across different devices and browsers.
        </p>
      </Fade>
    </div>
  </section>
);

export default AboutComponent;
