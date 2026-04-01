"use client";

import { useFadeIn } from "@/app/hooks/useFadeIn";
export default function About() {

  const { imgRef, isImgVisible } = useFadeIn();
  const { textRef, isTextVisible } = useFadeIn();

  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">

          {/* LEFT — IMAGE */}
          <div ref={imgRef} className="about-img-col">
            
            <div className="about-img-wrap reveal">
              <img
                src="/images/img-restaurant.jpg"
                alt="Restaurant Interior"
                loading="lazy"
              />
            </div>

            <div className="about-badge-years">
              <div className="num">20+</div>
              <div className="lbl">Years Experience</div>
            </div>

            <div className="about-badge-rating">
              <svg
                className="star-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
              </svg>

              <div>
                <div className="rating-num">4.0</div>
                <div className="rating-lbl">Rating</div>
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div ref={textRef} className="about-text-col reveal">

            <h2 className="about-title">About Our Story</h2>

            <p className="about-p">
              Welcome to Kaah Restaurant, where authentic East African cuisine
              meets modern culinary excellence. Located in the heart of
              Minneapolis, we bring you the rich flavors and traditions of East Africa.
            </p>

            <p className="about-p">
              Our dishes are crafted with love using traditional recipes passed
              down through generations, combined with fresh, locally-sourced
              ingredients to create an unforgettable dining experience.
            </p>

            {/* CHEF CARD */}
            <div className="chef-card">
              <div className="chef-name">Chef Fatima Ahmed</div>
              <div className="chef-title">Executive Chef & Owner</div>
              <p className="chef-bio">
                With over 20 years of culinary experience, Chef Fatima brings
                authentic East African flavors to life, blending traditional
                recipes with modern techniques.
              </p>
            </div>

            {/* ICONS */}
            <div className="about-icons">

              <div className="about-icon-item">
                <div className="icon-circle">🍽</div>
                <div className="icon-label">Authentic Recipes</div>
              </div>

              <div className="about-icon-item">
                <div className="icon-circle">❤️</div>
                <div className="icon-label">Made with Love</div>
              </div>

              <div className="about-icon-item">
                <div className="icon-circle">⭐</div>
                <div className="icon-label">Top Rated</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}