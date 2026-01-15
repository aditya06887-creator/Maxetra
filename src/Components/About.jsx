import React from "react";
import { FaRocket } from "react-icons/fa";

const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

const About = () => {
  return (
    <section className="w-full">
      {/* ===== HERO / WELCOME SECTION ===== */}
      <div className="bg-[#001e37] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold rounded-full 
            bg-gradient-to-r from-purple-500 to-pink-500">
            WELCOME TO OUR BUBBLE
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-5xl">
            We Are A Collective Of{" "}
            <span className="text-purple-400">Creatives</span> Based Across The
            Globe, Here To Help Your Brand Burst Onto The Digital Stage.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-4xl text-gray-300 text-lg leading-relaxed">
            Burst is home to a hive of talented creatives who put digital first.
            We have cultivated deep experience across the digital landscape,
            making us leaders in designing your complete online presence.
            From building brand identity to web design, managing social media
            platforms, digital marketing & everything in between – we thrive on
            making your brand shine in the spotlight.
          </p>

          <p className="mt-4 max-w-4xl text-gray-400">
            Since Burst was founded in 2018, we've already helped bring 100s of
            high-profile clients into the new digital age, working tirelessly
            to ensure that we leave brands looking brilliantly bright.
          </p>
        </div>
      </div>

      {/* ===== VALUES SECTION ===== */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-purple-500 font-semibold tracking-widest text-sm mb-2">
            OUR AGENCY’S VALUES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center justify-center gap-2">
            What We Stand For <FaRocket className="text-purple-500" />
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="border-2 border-purple-400 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">
                Some Go The Extra Mile.
                <span className="text-purple-500 block">
                  We’ll Run A Marathon.
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Good enough isn’t good enough for us. We pride ourselves with
                creating exceptional digital work that stands out from the
                crowd, no matter how far we need to go to do it, with
                unparalleled attention-to-detail.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-purple-400 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">
                Time Is Of The Essence.
                <span className="text-purple-500 block">
                  And We Won’t Waste Yours.
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team are trained in agile project management, and we work
                round-the-clock to deliver on time. No project has too tight a
                turnaround for our agency, we’re ready for the challenge.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-purple-400 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">
                It Doesn’t Have To Be Boring.
                <span className="text-purple-500 block">
                  We Bring Back The Joy.
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You aren’t boring – and neither are we. Our goal is to make
                working with us an enjoyable and painless journey – one that
                you’ll want to make again (and again).
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-14 flex justify-center gap-4">
            <button className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-600 font-semibold hover:bg-purple-500 hover:text-white transition cursor-pointer">
              Explore Our Services
            </button>
            <button onClick={() => openNewTab('https://calendly.com/growixa/30min')} className="px-8 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition cursor-pointer">Schedule a Meeting</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
