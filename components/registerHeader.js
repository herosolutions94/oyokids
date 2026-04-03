import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export default function RegisterHeader() {

  return (
   <div className="reg_header">
      <div className="reg_header_inner">
        <Link href="/">
          <img src="/images/logo.png" alt="Oyo Kids" className="reg_logo" />
        </Link>
        <span className="reg_tagline">Where Every Lesson Feels Like Play</span>
      </div>
      <div className="reg_header_cta">
        <p>Join the Classroom Revolution <strong>Today!</strong></p>
        <span>Free to start — no credit card required</span>
      </div>
    </div>
  );
}
