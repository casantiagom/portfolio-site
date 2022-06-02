import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Reel from "../components/Reel"

const IndexPage = () => (
  <Layout>
    <Reel />
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
