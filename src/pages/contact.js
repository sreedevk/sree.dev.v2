import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContactForm from '../components/contact-form.js'
import Social from '../components/social.js'
import QrCode from '../images/sreedev-qr2.png'

const ContactPage = () => (
  <Layout> 
    <SEO title="Contact" />
    <div className="row">
      <div className="col-12">
        <h3 className="page-title">Get in Touch</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <ContactForm />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <Social />
        <img src={QrCode} className="contact-page-qr"/>
      </div>
    </div>
  </Layout>
)

export default ContactPage;
