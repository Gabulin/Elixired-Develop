import React from 'react';
import './Footer.css';
import footer_logo from '../../Media/logo_footer.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
            <img className="footer_logo" src={footer_logo}></img>
        </div>
        <div className="footer-section navigation">
            <div className='footer-section_part'>
          <a className='footer-section-text' href="#">ПАРТНЕРЫ</a>
          <a className='footer-section-text' href="#">ДОКУМЕНТЫ</a>
          <a className='footer-section-text' href="#">ВОПРОС ОТВЕТ</a>
          </div>
          <div className='footer-section_part'>
          <a className='footer-section-text' href="#">КУРСЫ</a>
          <a className='footer-section-text' href="#">НОВОСТИ</a>
          <a className='footer-section-text' href="#">ОТЗЫВЫ</a>
          </div>
          <div className='footer-section_part'>
          <a className='footer-section-text' href="#">ПОДДЕРЖКА</a>
          <a className='footer-section-text' href="#">О КОМПАНИИ</a>
          <a className='footer-section-text' href="#">КОНТАКТЫ</a>
          </div>
          <div className='footer-section_part'>
          <p className='footer-section-text'>БУДЬ С НАМИ</p>
          <div className='footer-section_part-half'>
          <a className='footer-section-text text_socials' href="#">YOUTUBE</a>
          <a className='footer-section-text text_socials' href="#">TELEGRAM</a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
