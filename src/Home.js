import { Layout, Typography } from 'antd';
import React from 'react';
import anime from 'animejs';

export default class Home extends React.Component {
  state = {
    showText: false,
  };

  animeRef = React.createRef();

  componentDidMount() {
    if (!this.animeRef.current) {
      return;
    }

    const config = {
      targets: this.animeRef.current.querySelectorAll('path'),
      easing: 'easeInOutCubic',
      duration: 1000,
      delay: (el, i) => i * 250,
    };


    anime
      .timeline()
      .add({
        ...config,
        strokeDashoffset: [anime.setDashoffset, anime.setDashoffset],
      })
      .add({
        ...config,
        offset: '+=1000',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        ...config,
        offset: '+=500',
        strokeDashoffset: [0, anime.setDashoffset],
        opacity: 0,
      })
      .finished.then(() => {
        this.setState({ showText: true });
      });
  }

  render() {
    return (
      <Layout style={{ padding: '30px 0' }}>
        <div style={{ textAlign: 'center', display: this.state.showText ? 'block' : 'none' }}>
          <Typography.Title>TiExciting</Typography.Title>
          <Typography.Paragraph type="secondary">Make TiDB Exciting Again!</Typography.Paragraph>
        </div>
        <div style={{ margin: '50px 0', textAlign: 'center' }}>
        <svg ref={this.animeRef} viewBox="0 0 100 100" width="400px" id="logo">
          <path fill="none" stroke="#ED1A3B" d="M51.1 11.3L13.5 30.8 13.5 69.9 51.1 89.4 88.5 69.9 88.5 30.9z" />
          <path fill="none" stroke="#ED1A3B" d="M48.5 37.1L48.5 73.3 39.5 68.6 39.5 41.8 27.5 48 27.5 38.3 51 26.1 60.4 31z"/>
          <path fill="none" stroke="#ED1A3B" d="M67.5 66L58.5 70.7 58.5 42.2 67.5 37.5z"/>
        </svg>
      </div></Layout>
    );
  }
}
