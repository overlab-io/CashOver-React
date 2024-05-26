import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationBarGeneral from '../components/navigation-bar-general'
import FAQWorkWithUs from '../components/faq-work-with-us'
import ContactFormDark from '../components/contact-form-dark'
import Footer from '../components/footer'
import './work-with-us.css'

const WorkWithUs = (props) => {
  return (
    <div className="work-with-us-container">
      <Helmet>
        <title>Work-With-Us - CashOver Pay | Ultimate Finance App</title>
        <meta
          name="description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:title"
          content="Work-With-Us - CashOver Pay | Ultimate Finance App"
        />
        <meta
          property="og:description"
          content="Send, receive LBP &amp; USD effortlessly with CashOver Pay. Swap USDT for USD in a tap. Join Lebanese customers now! Maximize your money."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8b3094c7-7cdb-40f6-a719-0ee8bc9f46ba/ccd6fb98-7341-44f7-9ed0-1111ae5917eb?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavigationBarGeneral rootClassName="navigation-bar-general-root-class-name1"></NavigationBarGeneral>
      <header className="work-with-us-column">
        <div className="work-with-us-dummy"></div>
        <div className="work-with-us-column01">
          <h1 className="work-with-us-text">Become a CashOver PARTNER Now!</h1>
          <div className="work-with-us-row">
            <svg viewBox="0 0 1024 1024" className="work-with-us-icon">
              <path d="M682.667 810.667c-34.219 0-66.347-13.312-90.539-37.504l-80.128-80.171-80.171 80.171c-48.341 48.341-132.651 48.341-181.035 0-24.149-24.149-37.461-56.32-37.461-90.496s13.312-66.347 37.504-90.539l80.128-80.128-80.128-80.171c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.299 132.651-48.341 181.035 0.043l80.128 80.171 80.171-80.171c48.341-48.341 132.651-48.341 181.035 0 24.149 24.149 37.461 56.32 37.461 90.496s-13.312 66.347-37.504 90.539l-80.128 80.128 80.128 80.171c24.192 24.149 37.504 56.32 37.504 90.496s-13.312 66.347-37.504 90.539c-24.149 24.149-56.277 37.461-90.496 37.461zM512 572.331l140.501 140.501c16.128 16.128 44.245 16.085 60.331 0 8.064-8.064 12.501-18.731 12.501-30.165s-4.437-22.101-12.501-30.165l-140.459-140.501 140.459-140.501c8.064-8.064 12.501-18.773 12.501-30.165s-4.437-22.101-12.501-30.165c-16.128-16.171-44.245-16.128-60.331-0.043l-140.501 140.544-140.501-140.501c-16.128-16.128-44.245-16.085-60.331 0-8.064 8.064-12.501 18.773-12.501 30.165s4.437 22.101 12.501 30.165l140.459 140.501-140.459 140.501c-8.064 8.064-12.501 18.731-12.501 30.165s4.437 22.101 12.501 30.165c16.128 16.171 44.245 16.128 60.331 0.043l140.501-140.544z"></path>
            </svg>
            <h2 className="work-with-us-text01">
              <span className="work-with-us-text02">
                Or put a CashOver
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="work-with-us-text03">ATM</span>
              <span className="work-with-us-text04"> at Your Store</span>
            </h2>
            <svg viewBox="0 0 1024 1024" className="work-with-us-icon02">
              <path d="M682.667 810.667c-34.219 0-66.347-13.312-90.539-37.504l-80.128-80.171-80.171 80.171c-48.341 48.341-132.651 48.341-181.035 0-24.149-24.149-37.461-56.32-37.461-90.496s13.312-66.347 37.504-90.539l80.128-80.128-80.128-80.171c-24.192-24.149-37.504-56.32-37.504-90.496s13.312-66.347 37.504-90.539c48.341-48.299 132.651-48.341 181.035 0.043l80.128 80.171 80.171-80.171c48.341-48.341 132.651-48.341 181.035 0 24.149 24.149 37.461 56.32 37.461 90.496s-13.312 66.347-37.504 90.539l-80.128 80.128 80.128 80.171c24.192 24.149 37.504 56.32 37.504 90.496s-13.312 66.347-37.504 90.539c-24.149 24.149-56.277 37.461-90.496 37.461zM512 572.331l140.501 140.501c16.128 16.128 44.245 16.085 60.331 0 8.064-8.064 12.501-18.731 12.501-30.165s-4.437-22.101-12.501-30.165l-140.459-140.501 140.459-140.501c8.064-8.064 12.501-18.773 12.501-30.165s-4.437-22.101-12.501-30.165c-16.128-16.171-44.245-16.128-60.331-0.043l-140.501 140.544-140.501-140.501c-16.128-16.128-44.245-16.085-60.331 0-8.064 8.064-12.501 18.773-12.501 30.165s4.437 22.101 12.501 30.165l140.459 140.501-140.459 140.501c-8.064 8.064-12.501 18.731-12.501 30.165s4.437 22.101 12.501 30.165c16.128 16.171 44.245 16.128 60.331 0.043l140.501-140.544z"></path>
            </svg>
          </div>
        </div>
        <div className="work-with-us-row01">
          <svg viewBox="0 0 1024 1024" className="work-with-us-icon04">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
          <span className="work-with-us-text05">
            Scroll Down to Discover The Benefits
          </span>
          <svg viewBox="0 0 1024 1024" className="work-with-us-icon06">
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      </header>
      <main className="work-with-us-column02">
        <h2 className="work-with-us-text06">
          <span className="work-with-us-text07">Choose what you need!</span>
          <br></br>
        </h2>
        <p className="work-with-us-text09">
          <span>
            CashOver allows you to host an
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="work-with-us-text11">ATM machine</span>
          <span> at your location.</span>
          <br></br>
          <span>
            You can become an exclusive
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="work-with-us-text15">CashOver Agent.</span>
          <br></br>
        </p>
        <div className="work-with-us-row02">
          <img alt="image" src="/store.png" className="work-with-us-image" />
          <img
            alt="image"
            src="/credit_card.png"
            className="work-with-us-image1"
          />
        </div>
      </main>
      <main className="work-with-us-column03">
        <img
          alt="image"
          src="/cashover-200w.png"
          className="work-with-us-image2"
        />
        <h2 className="work-with-us-text17">
          <span>Discover the perks</span>
          <br></br>
        </h2>
        <p className="work-with-us-text20">
          <span>
            Learn more about the benefits that you can get when working with us.
          </span>
          <br></br>
        </p>
      </main>
      <main className="work-with-us-column04">
        <div className="work-with-us-row03">
          <span className="work-with-us-text23">01</span>
          <div className="work-with-us-column05">
            <h2 className="work-with-us-text24">ATM HOSTING</h2>
            <span className="work-with-us-text25">Recommended</span>
          </div>
        </div>
        <div className="work-with-us-row04">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1592495981488-073153776d9a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxtb25leXxlbnwwfHx8fDE3MTUzODAwMzR8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=300"
            loading="eager"
            className="work-with-us-image3"
          />
          <div className="work-with-us-column06">
            <h3 className="work-with-us-text26">Earn Income</h3>
            <p className="work-with-us-text27">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
        </div>
        <div className="work-with-us-row05">
          <div className="work-with-us-column07">
            <h3 className="work-with-us-text28">Drive traffic</h3>
            <p className="work-with-us-text29">
              Attract more customers when people notice your store is visited a
              lot!
            </p>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1515445182358-a8802afe3130?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGJ1c3klMjBzdG9yZXxlbnwwfHx8fDE3MTYyNjA2MTJ8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
            loading="eager"
            className="work-with-us-image4"
          />
          <div className="work-with-us-column08">
            <h3 className="work-with-us-text30">Earn Income</h3>
            <p className="work-with-us-text31">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
        </div>
        <div className="work-with-us-row06">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1501526029524-a8ea952b15be?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM5fHxncmFwaHxlbnwwfHx8fDE3MTYyNjA2OTZ8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
            loading="eager"
            className="work-with-us-image5"
          />
          <div className="work-with-us-column09">
            <h3 className="work-with-us-text32">Drive sales</h3>
            <p className="work-with-us-text33">
              People withdrawing will buy from your stores when they have cash
              on them.
            </p>
          </div>
        </div>
        <div className="work-with-us-row07">
          <div className="work-with-us-column10">
            <h3 className="work-with-us-text34">withdraw directly</h3>
            <p className="work-with-us-text35">
              Withdraw your revenue from the ATM at your store directly.
            </p>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1580067319115-42124a255c57?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjYXNofGVufDB8fHx8MTcxNjI2MDcyMXww&amp;ixlib=rb-4.0.3&amp;w=1400"
            loading="eager"
            className="work-with-us-image6"
          />
          <div className="work-with-us-column11">
            <h3 className="work-with-us-text36">Earn Income</h3>
            <p className="work-with-us-text37">
              Process invoices at your store to earn commission depending on
              your popularity and processed volume.
            </p>
          </div>
        </div>
      </main>
      <main className="work-with-us-column12">
        <div className="work-with-us-row08">
          <span className="work-with-us-text38">02</span>
          <h2 className="work-with-us-text39">CASHOVER AGENT</h2>
        </div>
        <div className="work-with-us-row09">
          <div className="work-with-us-container1">
            <svg viewBox="0 0 1024 1024" className="work-with-us-icon08">
              <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
            </svg>
            <h2 className="work-with-us-text40">Earn Commisions</h2>
            <p className="work-with-us-text41">
              Gain access to a steady stream of commissions and fees for every
              money transaction processed through your store, bolstering your
              bottom line.
            </p>
          </div>
          <div className="work-with-us-container2">
            <svg viewBox="0 0 1024 1024" className="work-with-us-icon10">
              <path d="M896 597.333h-256c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h256c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
              <path d="M768 725.333c-23.595 0-42.667-19.115-42.667-42.667v-256c0-23.552 19.072-42.667 42.667-42.667s42.667 19.115 42.667 42.667v256c0 23.552-19.072 42.667-42.667 42.667z"></path>
              <path d="M384 256c70.571 0 128 57.429 128 128s-57.429 128-128 128-128-57.429-128-128 57.429-128 128-128M384 170.667c-117.931 0-213.333 95.488-213.333 213.333s95.403 213.333 213.333 213.333 213.333-95.488 213.333-213.333-95.403-213.333-213.333-213.333z"></path>
              <path d="M384 725.333c86.229 0 140.843 32.896 161.408 61.653-29.141 11.093-84.011 23.68-161.408 23.68-84.651 0-136.789-13.013-162.901-23.125 19.584-30.507 75.819-62.208 162.901-62.208M384 640c-160 0-256 85.333-256 170.667 0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333s-100.437-170.667-256-170.667z"></path>
            </svg>
            <h2 className="work-with-us-text42">Drive More Traffic</h2>
            <p className="work-with-us-text43">
              CashOver services attract a diverse customer base. This means
              increased foot traffic to your store, potentially leading to
              higher sales of your existing products and services.
            </p>
          </div>
        </div>
      </main>
      <FAQWorkWithUs rootClassName="faq-work-with-us-root-class-name"></FAQWorkWithUs>
      <ContactFormDark rootClassName="contact-form-dark-root-class-name"></ContactFormDark>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default WorkWithUs
