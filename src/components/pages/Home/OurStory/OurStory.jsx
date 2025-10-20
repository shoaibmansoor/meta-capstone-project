import chefsMarioAndAdrian1Img from "../assets/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2Img from "../assets/chefs-mario-and-adrian_2.jpg";
import "./OurStory.css";
const OurStory = () => {
  return (
    <section className="container grid our-story" id="about" aria-labelledby="story-heading">
      <div className="our-story-description">
        <h2 id="story-heading">Our Story</h2>
        <p>
          <strong>Little Lemon</strong> opened its doors in 2005 when childhood friends{" "}
          <strong>Mario</strong> and <strong>Adrian</strong> decided to bring the authentic 
          flavors of their Mediterranean heritage to Chicago. What started as a modest 
          25-seat bistro has blossomed into a beloved neighborhood cornerstone, where every 
          dish tells a story of tradition, passion, and family.
        </p>

        <p>
          <strong>Mario</strong>, who grew up in his family's taverna in coastal Greece, 
          brings decades of hospitality expertise and an infectious enthusiasm for sharing 
          Mediterranean culture. <strong>Adrian</strong>, trained in classical Italian cuisine 
          and inspired by his Tunisian grandmother's recipes, masterfully crafts each menu 
          with seasonal ingredients sourced from local farms and specialty Mediterranean importers.
        </p>

        <p>
          Our signature <em>lemon-herb grilled branzino</em> pays homage to Mario's seaside 
          roots, while Adrian's <em>handmade pasta with Sicilian pistachio pesto</em> has 
          become a citywide sensation. We take pride in our from-scratch approach—from our 
          daily-baked focaccia to our house-cured olives and hand-rolled phyllo pastries.
        </p>

        <p>
          Over the years, <strong>Little Lemon</strong> has become more than just a restaurant. 
          It's where proposals happen over our candlelit tables, where regulars celebrate 
          milestones with our family-style feasts, and where strangers become friends over 
          shared mezze platters. We've weathered challenges together, always staying true to 
          our core belief: great food is best enjoyed with great company.
        </p>

        <p>
          Today, we continue our mission to transport you to sun-drenched Mediterranean shores 
          with every bite. Whether you're here for a quick lunch, a romantic dinner, or a 
          celebration with loved ones, we invite you to be part of our story. Welcome to{" "}
          <strong>Little Lemon</strong>—where every meal is a journey home.
        </p>
      </div>
      <div className="our-story-chefs" role="img" aria-label="Images of chefs Mario and Adrian">
        <img 
          src={chefsMarioAndAdrian1Img} 
          alt="Chef Mario and Chef Adrian working together in the kitchen" 
          loading="lazy"
        />
        <img 
          src={chefsMarioAndAdrian2Img} 
          alt="Chef Mario and Chef Adrian preparing Mediterranean dishes" 
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default OurStory;
