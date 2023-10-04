import React from 'react'
import Contact from '../../components/Contact'
import { Helmet } from 'react-helmet';

function handleContextMenu(event) {
  event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
}

const ContactPage = () => {
  return (
    <section onContextMenu={handleContextMenu}>
      <Helmet>
        <title>CONTACT US - FRUITS SHOP</title>
        <meta name="description" content=" CONTACT US - FRUITS SHOP" />
        <meta property="og:title" content="CONTACT US - FRUITS SHOP" />
        <meta property="og:description" content="CONTACT US - FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
        />
      </Helmet>

        <Contact />
    </section>
  )
}

export default ContactPage