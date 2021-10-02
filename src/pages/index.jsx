import * as React from 'react'
import HomeGallery from '../components/homeGallery';
import Layout from "../components/layout";

function Index() {
  return (
    <Layout title="Andrew Barlow">
      <main>
        <HomeGallery />
      </main>
    </Layout>
  )
}

export default Index
