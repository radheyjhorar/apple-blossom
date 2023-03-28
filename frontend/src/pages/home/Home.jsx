import React, { Component } from 'react';
import Services from './Services';
import AdmissionOpen from './AdmissionOpen';
import { Jobs } from '../../components';
import FeaturedSchools from './FeaturedSchools';
import TopSchools from './TopSchools';
import SchoolSupplies from './SchoolSupplies';
import NewsArticle from '../../components/NewsArticle';
import './home.css';
import InSpotLight from './InSpotlight';
import api from '../../api/API';
import { Seo } from '../../_shared';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDB: true,
      resp: []
    };
  }



  async componentDidMount() {
    if (this.state.fromDB) {
      const response = await api.post('/institution', { id: 0 });
      if (response.statusText === "OK") {
        this.setState({ resp: response.data });

      }
    }

  }
  render() {

    return (
      <div>
        { /*<div className='bg-light' style={{ paddingLeft: '15%', paddingRight: '15%'}}>
              <Services />
      </div>*/ }
        <Seo
          title='Learning React Helmet!'
          description='Beginner friendly page for learning React Helmet.'
          name='Company name.'
          type='article' />
        {/* <Seo title='Schools'  description='Beginner friendly page for learning React Helmet.' pathSlug='/' keywords='education, schools, jobs'/>   */}
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-9 px-5'>
              <Jobs />
              <AdmissionOpen {...this.state.resp} />
              <InSpotLight />
              <TopSchools key={'TopSchools'} />
              <FeaturedSchools key={'FeaturedSchools'} />

            </div>
          </div>
        </div>
        <div className='container-fluid bg-light'>
          <div className='row justify-content-center'>
            <div className='col-9 px-5'>
              <SchoolSupplies />
            </div>
          </div>
        </div>
        {/* <NewsArticle /> */}
      </div>
    );
  }
}
export default Home;  