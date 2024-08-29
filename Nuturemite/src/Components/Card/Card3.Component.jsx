import React from "react";
import { useState } from "react";
import card3_1 from "../images/card3.1.webp";
import card3_2 from "../images/card3.2.webp";
import card3_3 from "../images/card3.3.webp";

const Card3 = () => {
  // State to manage expanded view for each card
  const [isExpanded, setIsExpanded] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  // Function to toggle the state
  const toggleExpand = (card) => {
    setIsExpanded((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <div className="relative bg-gray-50 px-6 pb-20 lg:px-8 lg:pt-1 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="pt-2 flex">
          <p className="underline justify-start mt-1 max-w-2xl text-2xl font-bold text-black sm:mt-4">
            Lunch/Dinner Recipes
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={card3_1}
                alt="Creamy Mango Chia Pudding Recipe"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/signup" className="hover:underline">
                    Recipe
                  </a>
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Fish Korma
                  </p>
                  <p
                    className={`mt-3 text-base text-gray-500 ${
                      isExpanded.card1 ? "" : "line-clamp-3"
                    }`}
                  >
                    Craving a creamy main dish for lunch? Try this lip-smacking
                    Fish Korma recipe that is so easy to make and tastes just
                    luscious. If you are a fish lover, then this recipe will
                    surely make it to your list of favourites. Without adding
                    unnecessary masalas, this simple Fish Korma rrecipe can be
                    made in less than an hour with just a handful of
                    ingredients. Make sure you add Khada Masalas like clove,
                    cardamom and cinnamon to thick recipe, as they help in
                    giving the dish its signature aroma and infuse the right
                    kind of flavours in it. This Fish Korma recipe also contains
                    curd, cashew paste and raisin paste, which gives the dish
                    its rich and creamy texture. Since it is a Korma, we have
                    added only 1 cup of water to make the curry, as Korma Curry
                    base should always be towards the thicker side. Don't forget
                    to fry some sliced onions in ghee and later use them as a
                    garnish to spruce up the flavours of the dish even further.
                    Be it rice or chapati, Fish Korma tastes equally good with
                    both. You can include it on your dinner party menu or even
                    serve it during family lunches. Do try this recipe, rate it
                    and let us know how it turned out to be by leaving a comment
                    in the section below. Happy Cooking! (image credits-istock)
                  </p>
                  <button
                    className="pt-5 underline font-sans"
                    onClick={() => toggleExpand("card1")}
                  >
                    {isExpanded.card1 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={card3_2}
                alt="Nutella French Toast Recipe"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/signup" className="hover:underline">
                    Recipe
                  </a>
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Chole Bhatura Recipe
                  </p>
                  <p
                    className={`mt-3 text-base text-gray-500 ${
                      isExpanded.card2 ? "" : "line-clamp-3"
                    }`}
                  >
                    A piece of hot & puffed-up bhatura with a tangy & spicy
                    chickpea curry with salad and pickle on the side, what else
                    can you ask for? Well, yes we are talking about the Chole
                    Bhature recipe, which is loved by North Indians. This
                    delicacy has Punjabi origins and thus you can imagine the
                    taste of this dish. Here's how you can make it at home with
                    detailed instructions explained with step-by-step images.
                    <br />
                    It's not just the Punjabis who enjoy eating this
                    mouth-watering dish, but entire Northern India is a fan of
                    it. There are some, who say that this dish originated in
                    Eastern Uttar Pradesh; while many claim it is a dish of
                    Punjabi origin. Chole Bhature is a popular street food not
                    only in India but Pakistan as well! From a spicy &
                    dark-coloured chole to a tangy flavour, there are several
                    varieties that you can find in the nook & corner of the
                    country. Every region brings a new taste to this flavourful
                    breakfast recipe. Made with easily available ingredients,
                    this chole bhature recipe will become your favourite. The
                    protein-rich and spicy Punjabi chole coupled with puffed
                    bhaturas are a match made in heaven. This easy vegetarian
                    recipe is a perfect blend of flavours and textures. If you
                    love spicy food, then this one is a must-try for you! Cooked
                    with chickpeas, all-purpose flour, wheat flour, yoghurt, and
                    a melange of spices, this dish is widely preferred for
                    breakfast, lunch and even dinner by North Indians. You can
                    make this easy Punjabi recipe for kitty parties, pot lucks,
                    and even a buffet. Prepare this mouth-watering dish for your
                    guests and they would love to relish it to the fullest.
                    However, there isn’t much scope for tweaking the basic
                    recipe, but you can still innovate a bit as per your palate
                    preferences. You can enjoy this dish with a glass of chilled
                    lassi to complete the meal. Try it at home and enjoy it with
                    your loved ones!
                  </p>
                  <button
                    className="pt-5 underline font-sans"
                    onClick={() => toggleExpand("card2")}
                  >
                    {isExpanded.card2 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={card3_3} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/signup" className="hover:underline">
                    Recipe
                  </a>
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    Chicken Lababdar
                  </p>
                  <p
                    className={`mt-3 text-base text-gray-500 ${
                      isExpanded.card3 ? "" : "line-clamp-3"
                    }`}
                  >
                    Chicken Lababdar is a Mughlai recipe which is similar to
                    butter chicken but is made with very few ingredients and is
                    super easy to make. The name of the recipe, ‘Chicken
                    Lababdar’ in itself describes its heavenly taste and how it
                    can make one forget everything and be mesmerised by it! It
                    is a dish that can be relished anytime and anywhere,
                    especially parties, weddings, dates, buffets, kitty parties,
                    and pot lucks. This dish can also be enjoyed for lunch or
                    dinner. It tastes best with naans and parathas. So the next
                    time you want to make something luscious and fantastic, try
                    this easy Chicken Lababdar recipe!
                  </p>
                  <button
                    className="pt-5 underline font-sans"
                    onClick={() => toggleExpand("card3")}
                  >
                    {isExpanded.card3 ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
