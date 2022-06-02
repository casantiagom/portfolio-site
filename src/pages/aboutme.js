import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import NavBar from "../components/NavBar"
import Reel from "../components/Reel"
import AboutMe from "../components/aboutme"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <AboutMe />
  </Layout>
)

export default IndexPage
