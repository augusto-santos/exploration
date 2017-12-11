import React, { PropTypes } from 'react'
import Layout from '../../components/Layout'
import Sidemenu from '../../components/Sidemenu'
import s from './Home.css'

const title = 'Exploration | Education Platform';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <Sidemenu></Sidemenu>
        <div className={`${s.wrapper_container}`}>
          <h4>conteudo da partes</h4>
        </div>  
      </Layout>
    );
  }

}

export default HomePage;
