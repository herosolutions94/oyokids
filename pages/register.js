import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RegisterHeader from '@/components/registerHeader';

const GRADE_LEVELS = ['CP', 'CE1', 'CE2', 'CM1', 'CM2', 'Maternelle', '6ème', 'Other'];

const TEACHER_COUNTRIES = [
  'France', 'Belgium', 'Switzerland', 'Canada', 'Morocco',
  'Algeria', 'Tunisia', 'Senegal', 'Ivory Coast', 'Other'
];

const SCHOOL_COUNTRIES = [
  'France', 'Belgium', 'Switzerland', 'Canada', 'Morocco',
  'Algeria', 'Tunisia', 'Senegal', 'Ivory Coast', 'Other'
];

const LANGUAGES = ['French', 'English', 'Arabic', 'Spanish'];

const HOW_OPTIONS = [
  'Social Media', 'Word of Mouth', 'Google Search',
  'School / Colleague', 'Event / Conference', 'Other'
];

const TEACHER_RANGES = ['1–5', '6–10', '11–20', '21–50', '51–100', '100+'];

export default function Register() {
  const router = useRouter();
  const [accountType, setAccountType] = useState('teacher');

  const [teacherForm, setTeacherForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    schoolName: '',
    city: '',
    country: '',
    gradeLevels: [],
    platformLanguage: '',
    howHeard: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    newsletter: false,
  });

  const [schoolForm, setSchoolForm] = useState({
    schoolName: '',
    schoolId: '',
    schoolType: 'Public',
    streetAddress: '',
    city: '',
    postalCode: '',
    region: '',
    country: '',
    adminName: '',
    contactEmail: '',
    phone: '',
    numberOfTeachers: '',
    numberOfClasses: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleTeacherChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTeacherForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleGradeToggle = (grade) => {
    setTeacherForm((prev) => {
      const already = prev.gradeLevels.includes(grade);
      return {
        ...prev,
        gradeLevels: already
          ? prev.gradeLevels.filter((g) => g !== grade)
          : [...prev.gradeLevels, grade],
      };
    });
  };

  const handleSchoolChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSchoolForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSchoolType = (type) => {
    setSchoolForm((prev) => ({ ...prev, schoolType: type }));
  };

  return (
    <main className="reg_sc">
      <RegisterHeader />

      {/* MAIN CONTENT */}
      <div className="reg_body">
        <div className="reg_container">
          <h1 className="reg_title">
            Create Your <span>Account</span>
          </h1>
          <p className="reg_sub">
            Choose your account type below and fill in your details to get started.
          </p>

          {/* ACCOUNT TYPE TOGGLE */}
          <div className="type_toggle">
            <button
              className={`type_btn ${accountType === 'teacher' ? 'type_btn_active' : ''}`}
              onClick={() => setAccountType('teacher')}
            >
              <span className="type_icon">🎓</span> I'm a Teacher
            </button>
            <button
              className={`type_btn ${accountType === 'school' ? 'type_btn_active_school' : ''}`}
              onClick={() => setAccountType('school')}
            >
              <span className="type_icon">🏫</span> I'm a School
            </button>
          </div>

          {/* ACCOUNT INFO BANNER */}
          {accountType === 'teacher' ? (
            <div className="info_banner">
              <div className="info_banner_icon">🎓</div>
              <div>
                <strong>Teacher Account — Free to start!</strong>
                <p>Get 2 complete lessons free forever. Upgrade anytime for full access at €9/month.</p>
              </div>
            </div>
          ) : (
            <div className="info_banner info_banner_school">
              <div className="info_banner_icon">🏫</div>
              <div>
                <strong>School Account — €99/month</strong>
                <p>All teachers in your school get full access. One admin dashboard for your principal or coordinator.</p>
              </div>
            </div>
          )}

          {/* ────────── TEACHER FORM ────────── */}
          {accountType === 'teacher' && (
            <div className="reg_form">

              {/* PERSONAL INFORMATION */}
              <div className="form_section">
                <div className="section_label">Personal Information</div>
                <div className="form_row">
                  <div className="form_group">
                    <label className="form_label">First Name <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">👤</span>
                      <input type="text" name="firstName" className="reg_input" placeholder="Jane" value={teacherForm.firstName} onChange={handleTeacherChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Last Name <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">👤</span>
                      <input type="text" name="lastName" className="reg_input" placeholder="Dupont" value={teacherForm.lastName} onChange={handleTeacherChange} />
                    </div>
                  </div>
                </div>
                <div className="form_row">
                  <div className="form_group">
                    <label className="form_label">Email Address <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">✉️</span>
                      <input type="email" name="email" className="reg_input" placeholder="jane@school.com" value={teacherForm.email} onChange={handleTeacherChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Phone Number</label>
                    <div className="input_wrap">
                      <span className="input_icon">📞</span>
                      <input type="tel" name="phone" className="reg_input" placeholder="+33 6 00 00 00 00" value={teacherForm.phone} onChange={handleTeacherChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* SCHOOL INFORMATION */}
              <div className="form_section">
                <div className="section_label">School Information</div>
                <div className="form_row3">
                  <div className="form_group">
                    <label className="form_label">School Name <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🏫</span>
                      <input type="text" name="schoolName" className="reg_input" placeholder="École primaire..." value={teacherForm.schoolName} onChange={handleTeacherChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">City</label>
                    <div className="input_wrap">
                      <span className="input_icon">📍</span>
                      <input type="text" name="city" className="reg_input" placeholder="Paris" value={teacherForm.city} onChange={handleTeacherChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Country <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🌍</span>
                      <select name="country" className="reg_input reg_select" value={teacherForm.country} onChange={handleTeacherChange}>
                        <option value="">Select country...</option>
                        {TEACHER_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* TEACHING DETAILS */}
              <div className="form_section">
                <div className="section_label">Teaching Details</div>
                <div className="form_group">
                  <label className="form_label">Grade Levels You Teach <span className="req">*</span></label>
                  <div className="grade_chips">
                    {GRADE_LEVELS.map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`grade_chip ${teacherForm.gradeLevels.includes(g) ? 'grade_chip_active' : ''}`}
                        onClick={() => handleGradeToggle(g)}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form_row">
                  <div className="form_group">
                    <label className="form_label">Platform Language <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🌐</span>
                      <select name="platformLanguage" className="reg_input reg_select" value={teacherForm.platformLanguage} onChange={handleTeacherChange}>
                        <option value="">Select language...</option>
                        {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">How Did You Hear About Us?</label>
                    <div className="input_wrap">
                      <span className="input_icon">💬</span>
                      <select name="howHeard" className="reg_input reg_select" value={teacherForm.howHeard} onChange={handleTeacherChange}>
                        <option value="">Select...</option>
                        {HOW_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* PASSWORD */}
              <div className="form_section">
                <div className="section_label">Password</div>
                <div className="form_row">
                  <div className="form_group">
                    <label className="form_label">Password <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🔒</span>
                      <input type="password" name="password" className="reg_input" placeholder="••••••••" value={teacherForm.password} onChange={handleTeacherChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Confirm Password <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🔒</span>
                      <input type="password" name="confirmPassword" className="reg_input" placeholder="••••••••" value={teacherForm.confirmPassword} onChange={handleTeacherChange} />
                    </div>
                  </div>
                </div>
                <p className="pass_hint">Minimum 8 characters — include a number and a symbol</p>
              </div>

              {/* CHECKBOXES */}
              <div className="check_group">
                <label className="check_label">
                  <input type="checkbox" name="agreeTerms" checked={teacherForm.agreeTerms} onChange={handleTeacherChange} />
                  <span>
                    I have read and agree to the{' '}
                    <Link href="/terms">Terms of Use</Link> and{' '}
                    <Link href="/privacy">Privacy Policy</Link>. I understand my data may be used to improve the Oyo Kids experience. <span className="req">*</span>
                  </span>
                </label>
                <label className="check_label">
                  <input type="checkbox" name="newsletter" checked={teacherForm.newsletter} onChange={handleTeacherChange} />
                  <span>Send me new lesson alerts, teaching tips and Oyo Kids updates by email. (Optional)</span>
                </label>
              </div>

              <button className="reg_submit_btn" onClick={() => router.push('/onboarding')}>
                Create My Teacher Account — It's Free!
              </button>

              <div className="reg_divider">
                <div className="reg_divider_line"></div>
                <span>or sign up with</span>
                <div className="reg_divider_line"></div>
              </div>

              <div className="reg_social_btns">
                <button className="reg_social_btn">
                  <img src="/images/google.png" alt="Google" />
                  <span>Continue with Google</span>
                </button>
                <button className="reg_social_btn">
                  <img src="/images/facebook.png" alt="Facebook" />
                  <span>Continue with Facebook</span>
                </button>
              </div>

              <p className="reg_already_have">
                Already have an account? <Link href="/login">Log in here</Link>
              </p>
            </div>
          )}

          {/* ────────── SCHOOL FORM ────────── */}
          {accountType === 'school' && (
            <div className="reg_form">

              {/* SCHOOL IDENTITY */}
              <div className="form_section">
                <div className="section_label">School Identity</div>
                <div className="form_row3">
                  <div className="form_group">
                    <label className="form_label">School Name <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🏫</span>
                      <input type="text" name="schoolName" className="reg_input" placeholder="ABC School" value={schoolForm.schoolName} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">School ID / RNE <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🔢</span>
                      <input type="text" name="schoolId" className="reg_input" placeholder="0000000A" value={schoolForm.schoolId} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">School Type <span className="req">*</span></label>
                    <div className="school_type_btns">
                      {['Public', 'Private', 'International'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`school_type_btn ${schoolForm.schoolType === t ? 'school_type_btn_active' : ''}`}
                          onClick={() => handleSchoolType(t)}
                        >
                          <span>{t === 'Public' ? '🏛️' : t === 'Private' ? '🔒' : '✈️'}</span>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="form_section">
                <div className="section_label">Location</div>
                <div className="form_group">
                  <label className="form_label">Street Address <span className="req">*</span></label>
                  <div className="input_wrap">
                    <span className="input_icon">📍</span>
                    <input type="text" name="streetAddress" className="reg_input" placeholder="123 Rue de l'École" value={schoolForm.streetAddress} onChange={handleSchoolChange} />
                  </div>
                </div>
                <div className="form_row4">
                  <div className="form_group">
                    <label className="form_label">City <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">📍</span>
                      <input type="text" name="city" className="reg_input" placeholder="Paris" value={schoolForm.city} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Postal Code</label>
                    <div className="input_wrap">
                      <span className="input_icon">📮</span>
                      <input type="text" name="postalCode" className="reg_input" placeholder="75001" value={schoolForm.postalCode} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Region / State</label>
                    <div className="input_wrap">
                      <span className="input_icon">🗺️</span>
                      <input type="text" name="region" className="reg_input" placeholder="Île-de-France" value={schoolForm.region} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Country <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🌍</span>
                      <select name="country" className="reg_input reg_select" value={schoolForm.country} onChange={handleSchoolChange}>
                        <option value="">Select...</option>
                        {SCHOOL_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* ADMINISTRATOR DETAILS */}
              <div className="form_section">
                <div className="section_label">Administrator Details</div>
                <div className="form_row3">
                  <div className="form_group">
                    <label className="form_label">Principal / Admin Name <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">👤</span>
                      <input type="text" name="adminName" className="reg_input" placeholder="Dr. Martin" value={schoolForm.adminName} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Contact Email <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">✉️</span>
                      <input type="email" name="contactEmail" className="reg_input" placeholder="admin@school.com" value={schoolForm.contactEmail} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Phone Number <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">📞</span>
                      <input type="tel" name="phone" className="reg_input" placeholder="+33 1 00 00 00 00" value={schoolForm.phone} onChange={handleSchoolChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* SCHOOL SIZE */}
              <div className="form_section">
                <div className="section_label">School Size</div>
                <div className="form_row">
                  <div className="form_group">
                    <label className="form_label">Number of Teachers <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">👥</span>
                      <select name="numberOfTeachers" className="reg_input reg_select" value={schoolForm.numberOfTeachers} onChange={handleSchoolChange}>
                        <option value="">Select range...</option>
                        {TEACHER_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Number of Classes</label>
                    <div className="input_wrap">
                      <span className="input_icon">🔢</span>
                      <input type="number" name="numberOfClasses" className="reg_input" placeholder="e.g. 12" min="1" value={schoolForm.numberOfClasses} onChange={handleSchoolChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* PASSWORD */}
              <div className="form_section">
                <div className="section_label">Password</div>
                <div className="form_row">
                  <div className="form_group">
                    <label className="form_label">Password <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🔒</span>
                      <input type="password" name="password" className="reg_input" placeholder="••••••••" value={schoolForm.password} onChange={handleSchoolChange} />
                    </div>
                  </div>
                  <div className="form_group">
                    <label className="form_label">Confirm Password <span className="req">*</span></label>
                    <div className="input_wrap">
                      <span className="input_icon">🔒</span>
                      <input type="password" name="confirmPassword" className="reg_input" placeholder="••••••••" value={schoolForm.confirmPassword} onChange={handleSchoolChange} />
                    </div>
                  </div>
                </div>
                <p className="pass_hint">Minimum 8 characters</p>
              </div>

              {/* CHECKBOX */}
              <div className="check_group">
                <label className="check_label">
                  <input type="checkbox" name="agreeTerms" checked={schoolForm.agreeTerms} onChange={handleSchoolChange} />
                  <span>
                    I confirm I am authorised to register this school and I accept the{' '}
                    <Link href="/terms">Terms of Use</Link>,{' '}
                    <Link href="/privacy">Privacy Policy</Link> and{' '}
                    <Link href="/school-data">School Data Agreement</Link>. <span className="req">*</span>
                  </span>
                </label>
              </div>

              <button className="reg_submit_btn reg_submit_btn_school" onClick={() => router.push('/onboarding')}>
                Register Our School on Oyo Kids
              </button>

              <p className="reg_already_have">
                Already have an account? <Link href="/login">Log in here</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
