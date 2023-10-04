import React, { useRef, useState } from "react";
import "./Contact.scss";
import { message } from "antd";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Modal Form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(form.current);
    const phone = formData.get("phone");

    if (!phone.match(/(0[3|5|7|8|9])+([0-9]{8})\b/)) {
      message.error("Please check your phone number again!");
    } else {
      emailjs
        .sendForm(
          "service_q5rh4hn",
          "template_ozsn4t8",
          form.current,
          "3TNn7eTINqAKSaUua"
        )
        .then(
          (result) => {
            message.success("Your message has been sent!");
            e.target.reset();
            setIsLoading(false);
          },
          (error) => {
            message.error(
              "Đã có lỗi xảy ra. Lời nhắn của quý khách chưa được gửi, vui lòng thử lại"
            );
            setIsLoading(false);
          }
        );
    }
  };

  // const onChangeForm = (e) => {
  //   const formData = new FormData(form.current);
  //   const name = formData.get("name");
  //   const phone = formData.get("phone");
  //   const email = formData.get("email");

  //   if (
  //     name !== null &&
  //     name !== undefined &&
  //     name.length !== 0 &&
  //     phone !== null &&
  //     phone !== undefined &&
  //     phone.length !== 0 &&
  //     email !== null &&
  //     email !== undefined &&
  //     email.length !== 0
  //   ) {
  //     setSubmitButton(true);
  //   } else {
  //     setSubmitButton(false);
  //   }
  // };

  // End Modal Form

  return (
    <section className="w-full h-auto py-[2%] contact_section bg-white">
      <div className="max-w-[1280px] w-full max-md:max-w-[600px] mx-auto p-4">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <div className="flex flex-wrap">
          <div className="col-md-8 mr-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              // onChange={(e) => onChangeForm(e)}
            >
              <div className="py-4">
                <div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      onInvalid={(F) =>
                        F.target.setCustomValidity(
                          "Please enter your name!"
                        )
                      }
                      onInput={(F) => F.target.setCustomValidity("")}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      onInvalid={(F) =>
                        F.target.setCustomValidity(
                          "Please enter your phone number!"
                        )
                      }
                      onInput={(F) => F.target.setCustomValidity("")}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onInvalid={(F) =>
                        F.target.setCustomValidity(
                          "Please enter your email!"
                        )
                      }
                      onInput={(F) => F.target.setCustomValidity("")}
                    />
                  </div>
                  <div className="mt-5">
                    <input type="text" name="message" placeholder="Message" />
                  </div>
                  <div className="mt-5">
                    <button
                      className={`uppercase ${isLoading ? 'custom_disable-button cursor-not-allowed' : 'custom_orange-button'}`}
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? 'sending...' : 'send'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
