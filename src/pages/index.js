import "./styles.css"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Login" />
      <div className="main-app min-h-screen lg:flex md:grid">
        <div className="section__one padding-default">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <h1 className="title leading-10 mt-5 text-4xl text-white">
            Enjoy the Convenience of Beam Space Storage
          </h1>
        </div>
        <div className="section__two">
          <div className="container__login">
            <h2 className="title text-3xl mb-5 text-red-500 font-bold">
              Log in to Beam Space
            </h2>
            <button className="btn btn-google shadow-md bg-white">
              <StaticImage src="../images/icon/google-icon.png" />
              <p className="ml-2">Login with google</p>
            </button>
            <button className="btn btn-facebook mt-4 text-white shadow-md">
              <StaticImage src="../images/icon/facebook-icon.png" />
              <p className="ml-2">Login with faceboook</p>
            </button>
            <div className="mt-4 flex justify-between items-center divide">
              <span className="line"></span>
              <span>or</span>
              <span className="line"></span>
            </div>
            <form className="mt-6">
              <label>
                <p>
                  Email Address <span className="required-flag">*</span>
                </p>
                <input type="text" placeholder="E.g, name@email.com" />
              </label>
              <label>
                <p className="mt-4">
                  Password <span className="required-flag">*</span>
                </p>
                <input type="text" placeholder="Enter your password" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
