import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cartState = useSelector((state) => state.cart);

  const EmptyCart = () => {
    return (
      <section className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto bg-background mt-5">
        <div className="py-[2%] mx-auto text-center">
          <h4 className="text-center text-5xl py-5">No item in Cart</h4>
          <Link to="/" className="custom_black_outline-button mx-4 w-40">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </section>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    cartState.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    cartState.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <Helmet>
          <title>CHECK OUT - FRUITS SHOP</title>
          <meta name="description" content="CHECK OUT - FRUITS SHOP" />
          <meta property="og:title" content="CHECK OUT - FRUITS SHOP" />
          <meta property="og:description" content="CHECK OUT - FRUITS SHOP" />
          <meta
            property="og:image"
            content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
          />
        </Helmet>

        <section className="h-full">
          <div className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
            <div className="flex-wrap flex flex-col-reverse md:flex-row justify-center my-4">
              <div className="flex-0-auto  md:w-1/2 mx-2 my-2 md:my-0">
                <div className="flex flex-col relative border rounded-lg">
                  <div className="flex flex-col relative border rounded-tl-lg rounded-tr-lg p-5 bg-background">
                    <h5 className="text-xl">Billing address</h5>
                  </div>
                  <div className="flex-auto p-5">
                    <form className="needs-validation" novalidate>
                      <div className="flex flex-wrap">
                        <div className="flex w-1/2 my-1 flex-col">
                          <label for="firstName" className="mb-2">
                            First name
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="firstName"
                            placeholder="First Name..."
                            value=""
                            required
                          />
                        </div>

                        <div className="flex w-1/2 my-1 flex-col">
                          <label for="lastName" className="mb-2">
                            Last name
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="lastName"
                            placeholder="Last Name..."
                            value=""
                            required
                          />
                        </div>

                        <div className="flex w-full my-1 flex-col">
                          <label for="email" className="mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="border rounded-lg p-2 mr-2"
                            id="email"
                            placeholder="youremail@example.com"
                            required
                          />
                        </div>

                        <div className="flex w-full my-1 flex-col">
                          <label for="address" className="mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="address"
                            placeholder="1234 Main St"
                            required
                          />
                        </div>

                        <div className="flex w-full my-1 flex-col">
                          <label for="address2" className="mb-2">
                            Address 2{" "}
                            <span className="text-gray-500">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="address2"
                            placeholder="Apartment or suite"
                          />
                        </div>

                        <div className="flex w-full md:w-1/3 my-1 flex-col">
                          <label for="country" className="mb-2">
                            Country
                          </label>
                          {/* <br /> */}
                          <select
                            className="border rounded-lg p-2 mr-2"
                            id="country"
                            required
                          >
                            <option value="">Choose...</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antartica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegowina">
                              Bosnia and Herzegowina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo">
                              Congo, the Democratic Republic of the
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia (Hrvatska)</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="France Metropolitan">
                              France, Metropolitan
                            </option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard and McDonald Islands">
                              Heard and Mc Donald Islands
                            </option>
                            <option value="Holy See">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">
                              Iran (Islamic Republic of)
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Democratic People's Republic of Korea">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon" selected>
                              Lebanon
                            </option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint LUCIA">Saint LUCIA</option>
                            <option value="Saint Vincent">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">
                              Slovakia (Slovak Republic)
                            </option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="Span">Spain</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="St. Helena">St. Helena</option>
                            <option value="St. Pierre and Miguelon">
                              St. Pierre and Miquelon
                            </option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard">
                              Svalbard and Jan Mayen Islands
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syrian Arab Republic</option>
                            <option value="Taiwan">
                              Taiwan, Province of China
                            </option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Viet Nam</option>
                            <option value="Virgin Islands (British)">
                              Virgin Islands (British)
                            </option>
                            <option value="Virgin Islands (U.S)">
                              Virgin Islands (U.S.)
                            </option>
                            <option value="Wallis and Futana Islands">
                              Wallis and Futuna Islands
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>

                        <div className="flex w-full md:w-1/3 my-1 flex-col">
                          <label for="state" className="mb-2">
                            State
                          </label>
                          {/* <br /> */}
                          <select
                            className="border rounded-lg p-2 mr-2"
                            id="state"
                            required
                          >
                            <option value="">Choose...</option>
                            <option>District 1</option>
                            <option>District 2</option>
                            <option>District 3</option>
                            <option>District 4</option>
                            <option>District 5</option>
                            <option>District 6</option>
                            <option>District 7</option>
                            <option>District 8</option>
                            <option>District 9</option>
                            <option>District 10</option>
                            <option>District 11</option>
                            <option>District 12</option>
                            <option>Tan Binh District</option>
                            <option>Tan Phu District</option>
                            <option>Go Vap District</option>
                            <option>Binh Thanh District</option>
                            <option>Binh Tan District</option>
                            <option>Cu Chi District</option>
                            <option>Nha Be District</option>
                            <option>Thu Duc District</option>
                          </select>
                        </div>

                        <div className="flex w-full md:w-1/3 my-1 flex-col">
                          <label for="zip" className="mb-2">
                            Zip Code
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="zip"
                            placeholder="Zip Code"
                            required
                          />
                        </div>
                      </div>

                      <hr className="my-4" />

                      <h4 className="mb-3 text-xl">Payment</h4>
                      <div className="flex flex-wrap">
                        <div className="flex w-full md:w-1/2 my-1 flex-col">
                          <label for="cc-name" className="mb-2">
                            Name on card
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="cc-name"
                            placeholder=""
                            required
                          />
                          <small className="text-gray-500 mb-2">
                            Full name as displayed on card
                          </small>
                        </div>

                        <div className="flex w-full md:w-1/2 my-1 flex-col">
                          <label for="cc-number" className="mb-2">
                            Credit card number
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="cc-number"
                            placeholder=""
                            required
                          />
                        </div>

                        <div className="flex w-1/2 md:w-1/3 my-1 flex-col">
                          <label for="cc-expiration" className="mb-2">
                            Expiration
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="cc-expiration"
                            placeholder=""
                            required
                          />
                        </div>

                        <div className="flex w-1/2 md:w-1/3 my-1 flex-col">
                          <label for="cc-cvv" className="mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            className="border rounded-lg p-2 mr-2"
                            id="cc-cvv"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>

                      <hr className="my-4" />

                      <button
                        className="w-full custom_dark-button"
                        type="submit"
                        disabled
                      >
                        Continue to checkout
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex-0-auto md:w-1/3 mx-2 my-2 md:my-0">
                <div className="flex flex-col relative border rounded-lg mb-4">
                  <div className="flex flex-col relative border rounded-tl-lg rounded-tr-lg p-5 bg-background">
                    <h5 className="text-xl">Order Summary</h5>
                  </div>
                  <div className="flex-auto p-5">
                    <ul>
                      <li className="flex flex-row items-center justify-between py-5">
                        Products ({totalItems})
                        <span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="flex flex-row items-center justify-between py-5">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="flex flex-row items-center justify-between py-5">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <div className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
        <h1 className="text-center text-4xl">Check out</h1>
        {/* <hr /> */}
        {cartState.length > 0 ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default CheckoutPage;
