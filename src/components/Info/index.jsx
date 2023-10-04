import React from "react";
import "./Info.scss";
import fb_icon from "../../assets/images/fb.png";
import twitter_icon from "../../assets/images/twitter.png";
import linkedin_icon from "../../assets/images/linkedin.png";
import instagram_icon from "../../assets/images/instagram.png";

const infoItems = [
  {
    id: 1,
    title: "Fruits",
    items: [
      {
        text: "randomised",
      },
      {
        text: "words which",
      },
      {
        text: "don't look even",
      },
      {
        text: "slightly",
      },
      {
        text: "believable. If you",
      },
      {
        text: "are going to use",
      },
      {
        text: "a passage of",
      },
      {
        text: "Lorem Ipsum,",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    items: [
      {
        text: "randomised",
      },
      {
        text: "words which",
      },
      {
        text: "don't look even",
      },
      {
        text: "slightly",
      },
      {
        text: "believable. If you",
      },
      {
        text: "are going to use",
      },
      {
        text: "a passage of",
      },
      {
        text: "Lorem Ipsum,",
      },
    ],
  },
  {
    id: 3,
    title: "List",
    items: [
      {
        text: "randomised",
      },
      {
        text: "words which",
      },
      {
        text: "don't look even",
      },
      {
        text: "slightly",
      },
      {
        text: "believable. If you",
      },
      {
        text: "are going to use",
      },
      {
        text: "a passage of",
      },
      {
        text: "Lorem Ipsum,",
      },
    ],
  },
];
const socialItems = [
  {
    id: 1,
    img: fb_icon,
    href: "https://www.facebook.com/profile.php?id=100092361162359",
  },
  {
    id: 2,
    img: twitter_icon,
    href: "https://github.com/hoanglg-workplace",
  },
  {
    id: 3,
    img: linkedin_icon,
    href: "https://www.linkedin.com/in/hoanglg-work/",
  },
  {
    id: 4,
    img: instagram_icon,
    href: "https://github.com/hoanglg-workplace",
  },
];
const Info = () => {
  return (
    <section className="w-full h-auto py-[2%] bg-white info">
      <div className="max-w-[1280px] max-md:max-w-[600px] w-full mx-auto p-4">
        <div className="flex flex-wrap max-md:flex-col text-center justify-center items-center">
          {infoItems.map((item) => (
            <div key={item.id} className="col-md-4">
              <h5 className="text-2xl mb-2 max-md:mt-10">{item.title}</h5>
              <ul>
                {item?.items.map((childItem) => (
                  <li className="my-1">{childItem.text}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="">
            <div>
              <h5 className="text-2xl mb-2 mt-10">Follow Us</h5>
              <div className="my-6 flex justify-center items-center">
                {socialItems.map((item) => (
                  <a key={item.id} target="_blank" rel="noreferrer" href={item.href}>
                    <img
                      width={35}
                      className="mr-1"
                      src={item.img}
                      alt="social_icon"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-2xl">Subscribe Now</h5>
              <div>
                <form action="">
                  <input
                    className="my-5 w-[200px] h-7 border border-black"
                    placeholder="Email"
                    type="email"
                  />
                  <button className="custom_orange-button py-1 mx-2" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
