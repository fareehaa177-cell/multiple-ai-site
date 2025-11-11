'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function Resources() {
  const resources = {
    articles: [
      'Practical automation ideas for accounting and marketing teams',
      'AI implementation strategies for professional services',
      'Building a sustainable AI practice'
    ],
    videos: [
      'Short explainers on voice AI and automation',
      'Predictive analytics in action',
      'Partner success stories'
    ],
    ebooks: [
      'Harnessing AI in Professional Services',
      'AI for Marketing Agencies',
      'Building a Low-Risk AI Practice'
    ]
  };

  return (
    <section id="resources" style={{ 
      background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)' 
    }}>
      <Container>
        <div className="section-title">
          <h2>Learn How AI Transforms Business</h2>
          <p>
            Our Resource Hub shares insights, tutorials, and success stories to help partners and 
            clients understand the business impact of AI.
          </p>
        </div>
        
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="card-custom">
              <div className="card-icon">
                <i className='bx bx-file'></i>
              </div>
              <h4>Articles</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                marginBottom: 0
              }}>
                {resources.articles.map((article, index) => (
                  <li key={index} style={{ 
                    marginBottom: '12px',
                    color: '#666',
                    fontSize: '1rem'
                  }}>
                    <i className='bx bx-chevron-right' style={{ 
                      color: '#4A90E2',
                      marginRight: '5px'
                    }}></i>
                    {article}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <div className="card-custom">
              <div className="card-icon">
                <i className='bx bx-video'></i>
              </div>
              <h4>Videos</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                marginBottom: 0
              }}>
                {resources.videos.map((video, index) => (
                  <li key={index} style={{ 
                    marginBottom: '12px',
                    color: '#666',
                    fontSize: '1rem'
                  }}>
                    <i className='bx bx-chevron-right' style={{ 
                      color: '#4A90E2',
                      marginRight: '5px'
                    }}></i>
                    {video}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <div className="card-custom">
              <div className="card-icon">
                <i className='bx bx-book'></i>
              </div>
              <h4>eBooks</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                marginBottom: 0
              }}>
                {resources.ebooks.map((ebook, index) => (
                  <li key={index} style={{ 
                    marginBottom: '12px',
                    color: '#666',
                    fontSize: '1rem'
                  }}>
                    <i className='bx bx-chevron-right' style={{ 
                      color: '#4A90E2',
                      marginRight: '5px'
                    }}></i>
                    {ebook}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        
        <div className="text-center mt-5">
          <form className="d-inline-flex flex-wrap justify-content-center gap-2" style={{ maxWidth: '500px' }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="form-control-custom"
              style={{ flex: '1', minWidth: '250px' }}
            />
            <button type="submit" className="btn btn-primary-custom">
              Subscribe for Updates
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
