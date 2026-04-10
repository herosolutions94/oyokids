import ComparisonTable from "@/components/ComparisonTable";
import CtaSection from "@/components/cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Popup from "@/components/Popup";
import Pricing from "@/components/Pricing";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import TrustBar from "@/components/TrustBar";
import VocabPreview from "@/components/VocabPreview";
import React from "react";

const Index = () => {
    
  return (
    <>
    <main>
      <section className="hero">
          <div class="hblob hb1"></div>
          <div class="hblob hb2"></div>
          <div class="hblob hb3"></div>
          <div class="contain-sm">
              <div class="flex">
                  <div class="hero-left">
                      <div class="hero-pill">
                          <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#b1d570"/></svg>
                          Now Available — 2 Lessons Free Forever
                      </div>
                      <h1>Where Every Lesson<br/>Feels Like <span>Play</span></h1>
                      <p class="hero-sub">The complete gamified English learning platform for primary school teachers. Ready-made lessons, native speaker audio, interactive games and progress tracking — all in one place.</p>
                      <div class="hero-chips">
                          <span class="chip">Ages 4–11</span>
                          <span class="chip">Native Audio</span>
                          <span class="chip">Zero Prep</span>
                          <span class="chip">Any Device</span>
                      </div>
                      <div class="hero-btns">
                          <a href="#cta" class="btn-primary">Get 2 Free Lessons</a>
                          <a href="#vocab" class="btn-secondary">See the Lessons</a>
                      </div>
                  </div>
                  <div class="hero-right">
                      <img src="/images/banner.png" alt="Oyo Kids Classroom"/>
                  </div>
              </div>
          </div>
      </section>
      <TrustBar />
      <Features/>
      <HowItWorks/>
      <VocabPreview />
      <ComparisonTable />
      <Pricing />
     <Team />
      <Testimonials />
      <Faq />
      <CtaSection />
    </main>
    <Popup/>
    </>
  );
};

export default Index;
