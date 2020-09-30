import React from "react";
import { useMediaQuery } from "react-responsive";
import "./footer.css";
import logo from "./logo.png";

function FooterComponent() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });

  if (isDesktopOrLaptop) {
    return (
      <div>
        <div dir="ltr" id="root-footer">
          <div className="MuiBox-root jss797">
            <div className="jss6">
              <div className="MuiBox-root jss799">
                <div className="MuiBox-root jss800">
                  <div
                    className="MuiBox-root
                                jss804"
                  >
                    <div className="MuiBox-root jss805">
                      <div className="MuiBox-root jss806" id="subscribe-title">
                        <h4
                          className="MuiTypography-root jss801
                                            MuiTypography-h4"
                        >
                          Subscribe to our awesome emails.
                        </h4>
                      </div>
                      <div className="MuiBox-root jss807" id="subscribe-info">
                        <p
                          className="MuiTypography-root
                                            MuiTypography-body1
                                            MuiTypography-colorTextSecondary"
                        >
                          Get our latest offers and news straight in your inbox.
                        </p>
                      </div>
                      <div className="MuiBox-root jss808">
                        <form noValidate="">
                          <div className="MuiBox-root jss812">
                            <div className="MuiBox-root jss813">
                              <div
                                className="MuiBox-root
                                                        jss814"
                              >
                                <div
                                  className="MuiBox-root
                                                            jss815"
                                >
                                  <input
                                    type="email"
                                    name="email"
                                    value=""
                                    data-cs-mask="true"
                                    id="subscribe-email"
                                    placeholder="Please enter an email address"
                                    className="jss809
                                                                false"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="MuiBox-root jss816">
                              <button
                                className="MuiButtonBase-root
                                                        MuiButton-root jss810
                                                        MuiButton-contained"
                                tabIndex="0"
                                type="submit"
                                id="btn-subscribe"
                              >
                                <span className="MuiButton-label">
                                  Subscribe
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="MuiBox-root jss817 enjoy-apps">
                      <div className="MuiBox-root jss818" id="download-apps">
                        <h4
                          className="MuiTypography-root jss801
                                            MuiTypography-h4"
                        >
                          Download our apps
                        </h4>
                      </div>
                      <div
                        className="MuiBox-root jss819"
                        id="download-apps-info"
                      >
                        <p
                          className="MuiTypography-root
                                            MuiTypography-body1
                                            MuiTypography-colorTextSecondary"
                        >
                          Shop our products and offers on-the-go.
                        </p>
                      </div>
                      <div className="MuiBox-root jss820">
                        <div
                          className="MuiBox-root jss821"
                          id="apple-app-store"
                        >
                          <a
                            className="MuiButtonBase-root
                                                MuiIconButton-root jss803"
                            tabindex="0"
                            aria-disabled="false"
                            href="#"
                            aria-label="Apple Play Store"
                          >
                            <span className="MuiIconButton-label">
                              <img
                                className="jss802"
                                src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/en/app-store-badge-us-black.svg"
                                alt=""
                              />
                            </span>
                          </a>
                        </div>
                        <div
                          className="MuiBox-root jss822"
                          id="google-play-store"
                        >
                          <a
                            className="MuiButtonBase-root
                                                MuiIconButton-root jss803"
                            tabindex="0"
                            aria-disabled="false"
                            href="#"
                            aria-label="Google Play Store"
                          >
                            <span className="MuiIconButton-label">
                              <img
                                className="jss802"
                                src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/en/google-play-badge-us.svg"
                                alt=""
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root jss823">
                  <div
                    className="MuiGrid-root
                                MuiGrid-container MuiGrid-spacing-xs-5"
                    id="footer-menu"
                  >
                    <div
                      className="MuiGrid-root jss825
                                    MuiGrid-item"
                    >
                      <h6
                        className="MuiTypography-root
                                        jss824 MuiTypography-h6"
                      >
                        Women
                      </h6>
                      <div className="MuiBox-root jss827">
                        <div className="MuiBox-root jss828">
                          <a className="jss826" href="/in/en/c/women-tops">
                            Tops
                          </a>
                        </div>
                        <div className="MuiBox-root jss829">
                          <a
                            className="jss826"
                            href="/in/en/c/women-ethnicwear"
                          >
                            Ethnicwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss830">
                          <a className="jss826" href="/in/en/c/women-bottoms">
                            Bottoms
                          </a>
                        </div>
                        <div className="MuiBox-root jss831">
                          <a
                            className="jss826"
                            href="/in/en/c/women-dressesandjumpsuits"
                          >
                            Dresses &amp; Jumpsuits
                          </a>
                        </div>
                        <div className="MuiBox-root jss832">
                          <a
                            className="jss826"
                            href="/in/en/c/women-winterwear"
                          >
                            Winterwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss833">
                          <a className="jss826" href="/in/en/c/women-lingerie">
                            Lingerie
                          </a>
                        </div>
                        <div className="MuiBox-root jss834">
                          <a className="jss826" href="/in/en/c/women-nightwear">
                            Nightwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss835">
                          <a
                            className="jss826"
                            href="/in/en/c/women-sportswear"
                          >
                            Sportswear
                          </a>
                        </div>
                        <div className="MuiBox-root jss836">
                          <a className="jss826" href="/in/en/c/women-beauty">
                            Beauty
                          </a>
                        </div>
                        <div className="MuiBox-root jss837">
                          <a
                            className="jss826"
                            href="/in/en/c/women-watchesandsunglasses"
                          >
                            Watches &amp; Sunglasses
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss825 MuiGrid-item">
                      <h6
                        className="MuiTypography-root jss824
                                        MuiTypography-h6"
                      >
                        Men
                      </h6>
                      <div className="MuiBox-root jss838">
                        <div className="MuiBox-root jss839">
                          <a className="jss826" href="/in/en/c/men-tops">
                            Tops
                          </a>
                        </div>
                        <div className="MuiBox-root jss840">
                          <a className="jss826" href="/in/en/c/men-bottoms">
                            Bottoms
                          </a>
                        </div>
                        <div className="MuiBox-root jss841">
                          <a className="jss826" href="/in/en/c/men-ethnicwear">
                            Ethnicwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss842">
                          <a className="jss826" href="/in/en/c/men-winterwear">
                            Winterwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss843">
                          <a className="jss826" href="/in/en/c/men-sportswear">
                            Sportswear
                          </a>
                        </div>
                        <div className="MuiBox-root jss844">
                          <a className="jss826" href="/in/en/c/men-innerwear">
                            Innerwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss845">
                          <a
                            className="jss826"
                            href="/in/en/c/men-mensgrooming"
                          >
                            Grooming
                          </a>
                        </div>
                        <div className="MuiBox-root jss846">
                          <a className="jss826" href="/in/en/c/men-watches">
                            Watches
                          </a>
                        </div>
                        <div className="MuiBox-root jss847">
                          <a className="jss826" href="/in/en/c/men-sunglasses">
                            Sunglasses
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss825 MuiGrid-item">
                      <h6
                        className="MuiTypography-root jss824
                                        MuiTypography-h6"
                      >
                        Kids
                      </h6>
                      <div className="MuiBox-root jss848">
                        <div className="MuiBox-root jss849">
                          <a
                            className="jss826"
                            href="/in/en/c/kids-girlsclothing"
                          >
                            Girls Clothing
                          </a>
                        </div>
                        <div className="MuiBox-root jss850">
                          <a
                            className="jss826"
                            href="/in/en/c/kids-boysclothing"
                          >
                            Boys Clothing
                          </a>
                        </div>
                        <div className="MuiBox-root jss851">
                          <a
                            className="jss826"
                            href="/in/en/c/kids-infantsgirls"
                          >
                            Infants Girls
                          </a>
                        </div>
                        <div className="MuiBox-root jss852">
                          <a
                            className="jss826"
                            href="/in/en/c/kids-infantsboys"
                          >
                            Infants Boys
                          </a>
                        </div>
                        <div className="MuiBox-root jss853">
                          <a className="jss826" href="/in/en/c/kids-winterwear">
                            Winterwear
                          </a>
                        </div>
                        <div className="MuiBox-root jss854">
                          <a className="jss826" href="/in/en/c/kids-addons">
                            Add ons
                          </a>
                        </div>
                        <div className="MuiBox-root jss855">
                          <a
                            className="jss826"
                            href="/in/en/c/kids-theteenshop"
                          >
                            The Teen Shop
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss825 MuiGrid-item">
                      <h6
                        className="MuiTypography-root jss824
                                        MuiTypography-h6"
                      >
                        Shoes &amp; Bags
                      </h6>
                      <div className="MuiBox-root jss856">
                        <div className="MuiBox-root jss857">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-women"
                          >
                            Women
                          </a>
                        </div>
                        <div className="MuiBox-root jss858">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-men"
                          >
                            Men
                          </a>
                        </div>
                        <div className="MuiBox-root jss859">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-boys"
                          >
                            Boys
                          </a>
                        </div>
                        <div className="MuiBox-root jss860">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-girls"
                          >
                            Girls
                          </a>
                        </div>
                        <div className="MuiBox-root jss861">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-womenaccessories"
                          >
                            Women Accessories
                          </a>
                        </div>
                        <div className="MuiBox-root jss862">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-menaccessories"
                          >
                            Men Accessories
                          </a>
                        </div>
                        <div className="MuiBox-root jss863">
                          <a
                            className="jss826"
                            href="/in/en/c/shoesandbags-essential"
                          >
                            Essential
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss825 MuiGrid-item">
                      <h6
                        className="MuiTypography-root jss824
                                        MuiTypography-h6"
                      >
                        Explore
                      </h6>
                      <div className="MuiBox-root jss864">
                        <div className="MuiBox-root jss865">
                          <a className="jss826" href="/in/en/offers">
                            Offers
                          </a>
                        </div>
                        <div className="MuiBox-root jss866">
                          <a className="jss826" href="/in/en/magazine">
                            Magazine
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss825 MuiGrid-item">
                      <h6
                        className="MuiTypography-root jss824
                                        MuiTypography-h6"
                      >
                        About
                      </h6>
                      <div className="MuiBox-root jss867">
                        <div className="MuiBox-root jss868">
                          <a className="jss826" href="/in/en/about">
                            About us
                          </a>
                        </div>
                        <div className="MuiBox-root jss869">
                          <a
                            className="jss826"
                            href="http://careers.lifestylestores.com/"
                          >
                            Careers
                          </a>
                        </div>
                        <div className="MuiBox-root jss870">
                          <a className="jss826" href="/in/en/tour">
                            Take a Tour
                          </a>
                        </div>
                        <div className="MuiBox-root jss871">
                          <a
                            className="jss826"
                            href="https://blog.lifestylestores.com/"
                          >
                            Blog
                          </a>
                        </div>
                        <div className="MuiBox-root jss872">
                          <a className="jss826" href="/in/en/storelocator">
                            Store Locator
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root jss825 MuiGrid-item">
                      <h6
                        className="MuiTypography-root jss824
                                        MuiTypography-h6"
                      >
                        Help
                      </h6>
                      <div className="MuiBox-root jss873">
                        <div className="MuiBox-root jss874">
                          <a className="jss826" href="/in/en/contact">
                            Contact us
                          </a>
                        </div>
                        <div className="MuiBox-root jss875">
                          <a className="jss826" href="/in/en/helpShipping">
                            Shipping
                          </a>
                        </div>
                        <div className="MuiBox-root jss876">
                          <a className="jss826" href="/in/en/return">
                            Returns Process
                          </a>
                        </div>
                        <div className="MuiBox-root jss877">
                          <a
                            className="jss826"
                            href="/in/en//in.help.maxfashion.in/hc/sections/360001580293-Returns-Policy"
                          >
                            Returns Policy
                          </a>
                        </div>
                        <div className="MuiBox-root jss878">
                          <a
                            className="jss826"
                            href="/in/en//in.help.maxfashion.in"
                          >
                            Help Centre
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root jss879">
                  <div
                    className="MuiBox-root
                                jss882"
                  >
                    <div className="MuiBox-root jss883">
                      <div
                        className="MuiBox-root jss884"
                        id="footer-contact-talk"
                      >
                        <a
                          className="MuiButtonBase-root
                                            MuiButton-root MuiButton-text
                                            jss880"
                          tabindex="0"
                          aria-disabled="false"
                          href="tel:1800-123-1555"
                        >
                          <span className="MuiButton-label">
                            <div
                              className="MuiBox-root jss885
                                                    jss881"
                            >
                              <img
                                src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/phone-black-24.svg"
                                alt=""
                              />
                            </div>
                            <div className="MuiBox-root jss886">
                              <div
                                className="MuiBox-root
                                                        jss887"
                              >
                                Talk to us
                              </div>
                              <div
                                className="MuiBox-root
                                                        jss888"
                                dir="ltr"
                              >
                                1200-123-5678
                              </div>
                            </div>
                          </span>
                        </a>
                      </div>
                      <div
                        className="MuiBox-root jss889"
                        id="footer-contact-helpcentre"
                      >
                        <a
                          className="MuiButtonBase-root
                                            MuiButton-root MuiButton-text
                                            jss880"
                          tabindex="0"
                          aria-disabled="false"
                          href="#"
                        >
                          <span className="MuiButton-label">
                            <div
                              className="MuiBox-root jss890
                                                    jss881"
                            >
                              <img
                                src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/help-black-24.svg"
                                alt=""
                              />
                            </div>
                            <div className="MuiBox-root jss891">
                              <div
                                className="MuiBox-root
                                                        jss892"
                              >
                                Helpcentre
                              </div>
                              <div
                                className="MuiBox-root
                                                        jss893"
                              >
                                help.theastyles.com
                              </div>
                            </div>
                          </span>
                        </a>
                      </div>
                      <div
                        className="MuiBox-root jss894"
                        id="footer-contact-write"
                      >
                        <a
                          className="MuiButtonBase-root
                                            MuiButton-root MuiButton-text
                                            jss880"
                          tabindex="0"
                          aria-disabled="false"
                          href="/in/en/write-to-us"
                        >
                          <span className="MuiButton-label">
                            <div
                              className="MuiBox-root jss895
                                                    jss881"
                            >
                              <img
                                src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/message-black-24.svg"
                                alt=""
                              />
                            </div>
                            <div className="MuiBox-root jss896">
                              <div
                                className="MuiBox-root
                                                        jss897"
                              >
                                Write to us
                              </div>
                              <div
                                className="MuiBox-root
                                                        jss898"
                              >
                                help@theastyles.com
                              </div>
                            </div>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="MuiBox-root jss899">
                      <div
                        className="MuiBox-root jss900"
                        id="footer-social-facebook"
                      >
                        <a
                          className="MuiButtonBase-root
                                            MuiIconButton-root"
                          tabindex="0"
                          aria-disabled="false"
                          href="http://www.facebook.com/"
                          aria-label="Facebook"
                        >
                          <span className="MuiIconButton-label">
                            <img
                              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/facebook-black-24.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                      <div
                        className="MuiBox-root jss901"
                        id="footer-social-twitter"
                      >
                        <a
                          className="MuiButtonBase-root
                                            MuiIconButton-root"
                          tabindex="0"
                          aria-disabled="false"
                          href="https://twitter.com/"
                          aria-label="Twitter"
                        >
                          <span className="MuiIconButton-label">
                            <img
                              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/twitter-black-24.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                      <div
                        className="MuiBox-root jss902"
                        id="footer-social-instagram"
                      >
                        <a
                          className="MuiButtonBase-root
                                            MuiIconButton-root"
                          tabindex="0"
                          aria-disabled="false"
                          href="https://www.instagram.com/"
                          aria-label="Instagram"
                        >
                          <span className="MuiIconButton-label">
                            <img
                              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/instagram-black-24.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root jss903">
                  <div
                    className="MuiBox-root
                                jss907"
                  >
                    <div className="MuiBox-root jss908">
                      <a
                        className="MuiButtonBase-root
                                        MuiIconButton-root jss904"
                        tabindex="0"
                        aria-disabled="false"
                        href="/in/en/"
                        id="footer-site-logo"
                        aria-label="lifestyle"
                      >
                        <span className="MuiIconButton-label logo-background-custom">
                          <img
                            height="34px"
                            src={logo}
                            alt=""
                            className="logo-image"
                          />
                        </span>
                      </a>
                      <div className="MuiBox-root jss909">
                        <div
                          className="MuiBox-root jss910"
                          id="footer-copywrite"
                        >
                          © 2020 RNA Intellectual Property Limited.
                        </div>
                        <div className="MuiBox-root jss911">
                          <a
                            href="/in/en/termsandconditions"
                            className="jss905"
                          >
                            Terms &amp; Conditions
                          </a>{" "}
                          -{" "}
                          <a href="/in/en/privacypolicy" className="jss905">
                            Privacy Policy
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="MuiBox-root jss912"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div dir="ltr" id="root-footer">
          <div className="MuiBox-root jss218">
            <div className="MuiBox-root jss223">
              <div className="MuiBox-root jss224 jss219">
                Subscribe to our awesome emails.
              </div>
              <div className="MuiBox-root jss225">
                Get our latest offers and news straight in your inbox.
              </div>
              <div className="MuiBox-root jss226">
                <form novalidate="">
                  <div className="MuiBox-root jss230">
                    <div className="MuiBox-root jss231">
                      <div className="MuiBox-root jss232">
                        <div className="MuiBox-root jss233">
                          <input
                            type="email"
                            name="email"
                            value=""
                            data-cs-mask="true"
                            id="subscribe-email"
                            placeholder="Please enter an email address"
                            className="jss227 false"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="MuiBox-root jss234">
                      <button
                        className="MuiButtonBase-root MuiButton-root jss228 MuiButton-contained"
                        tabindex="0"
                        type="submit"
                        id="btn-subscribe"
                        muitab="[object Object]"
                      >
                        <span className="MuiButton-label">Subscribe</span>
                        <span className="MuiTouchRipple-root"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="MuiBox-root jss235">
                <div className="MuiBox-root jss241">
                  <div
                    role="group"
                    className="MuiButtonGroup-root MuiButtonGroup-fullWidth"
                    aria-label="Full width outlined button group"
                  >
                    <a
                      className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined jss236 jss237 MuiButton-fullWidth"
                      tabindex="0"
                      aria-disabled="false"
                      href="/in/en/contact"
                      muitab="[object Object]"
                    >
                      <span className="MuiButton-label">Contact Us</span>
                      <span className="MuiTouchRipple-root"></span>
                    </a>
                    <a
                      className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined jss236 jss238 MuiButton-fullWidth"
                      tabindex="0"
                      aria-disabled="false"
                      href="/in/en/storelocator"
                      muitab="[object Object]"
                    >
                      <span className="MuiButton-label">Store Locator</span>
                      <span className="MuiTouchRipple-root"></span>
                    </a>
                  </div>
                </div>
                <div className="MuiBox-root jss242">
                  <div
                    role="group"
                    className="MuiButtonGroup-root MuiButtonGroup-fullWidth"
                    aria-label="Full width outlined button group"
                  >
                    <a
                      className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined jss236 jss239 MuiButton-fullWidth"
                      tabindex="0"
                      aria-disabled="false"
                      href="/in/en/help"
                      muitab="[object Object]"
                    >
                      <span className="MuiButton-label">Help</span>
                      <span className="MuiTouchRipple-root"></span>
                    </a>
                    <a
                      className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined jss236 jss240 MuiButton-fullWidth"
                      tabindex="0"
                      aria-disabled="false"
                      href="/in/en/about"
                      muitab="[object Object]"
                    >
                      <span className="MuiButton-label">About</span>
                      <span className="MuiTouchRipple-root"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="MuiBox-root jss243">
                <div className="MuiBox-root jss244">
                  <a
                    className="MuiButtonBase-root MuiIconButton-root"
                    tabindex="0"
                    aria-disabled="false"
                    href="http://www.facebook.com/"
                    muitab="[object Object]"
                  >
                    <span className="MuiIconButton-label">
                      <img
                        src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/facebook-black-24.svg"
                        alt=""
                      />
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                  </a>
                </div>
                <div className="MuiBox-root jss245">
                  <a
                    className="MuiButtonBase-root MuiIconButton-root"
                    tabindex="0"
                    aria-disabled="false"
                    href="https://twitter.com/"
                    muitab="[object Object]"
                  >
                    <span className="MuiIconButton-label">
                      <img
                        src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/twitter-black-24.svg"
                        alt=""
                      />
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                  </a>
                </div>
                <div className="MuiBox-root jss246">
                  <a
                    className="MuiButtonBase-root MuiIconButton-root"
                    tabindex="0"
                    aria-disabled="false"
                    href="https://www.instagram.com/"
                    muitab="[object Object]"
                  >
                    <span className="MuiIconButton-label">
                      <img
                        src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/instagram-black-24.svg"
                        alt=""
                      />
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                  </a>
                </div>
              </div>
              <div className="MuiBox-root jss247">
                <a
                  className="MuiButtonBase-root MuiIconButton-root jss221"
                  tabindex="0"
                  aria-disabled="false"
                  href="/in/en/"
                  muitab="[object Object]"
                >
                  <span className="MuiIconButton-label logo-background-custom">
                    <img
                      height="19px"
                      src={logo}
                      className="logo-image mobile-logo-view"
                      alt=""
                    />
                  </span>
                  <span className="MuiTouchRipple-root"></span>
                </a>
              </div>
              <div className="MuiBox-root jss248">
                <div className="MuiBox-root jss249">
                  © 2020 RNA Intellectual Property Limited.
                </div>
                <div className="MuiBox-root jss250">
                  <div className="MuiBox-root jss251">
                    <a href="/in/en/termsandconditions" className="jss222">
                      Terms &amp; Conditions
                    </a>{" "}
                    -{" "}
                    <a href="/in/en/privacypolicy" className="jss222">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
