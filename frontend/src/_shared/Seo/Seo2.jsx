import { Helmet } from 'react-helmet';
import React from 'react';
const Seo = ({ title, description, pathSlug, keywords }) => {
  const url = `https://waytoeducation.com/${pathSlug}`
	return (
<Helmet htmlAttributes={{ lang: 'en' }} title={title} meta={[
        {
          name: 'description',
          content: description,
          
        },
        {
          name: 'keywords',
          //content: keywords.join(),
          content: keywords
        },
        {
            name: 'og:type',
            content: 'type'
        },
        {
            name: 'og:title',
            content: title
        }
		]}
    links={[
     {
          rel: 'canonical',
          href: url,
      },
    ]}
    />
 );
}
export default Seo;





