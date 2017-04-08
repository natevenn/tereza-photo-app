import React, { Component } from 'react';
import Header from './Header';
import headShot from '../styles/images/t-head-shot.jpg';
import '../styles/about.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header activeHeader={true} />
        <div
          className='about-container'>
            <img
              className='head-shot'
              src={headShot}
              alt="Tereza Venn"
            />
            <p className=''>
              photo by JJ Constantin
            </p>
          <div className='about-description-div'>
          <p className='about-description'>
            Hi! My name is Tereza, with a 'z' oh and you have to roll the 'r'.
            Most people have a hard time with it so they just call me T and that
            is where T Photography came from.
            Currently, I am based in Colorado but I was born and raised
            in the Czech Republic.
          </p>
           <p className='about-description'>
            My life is very active. From teaching skiing, biking, and climbing
            to people with disabilities, to dancing, traveling, and recreating
            from mountains to sea, I am always on the go. Photography is a way
            for me to slow down and observe the people and places around me.
            It allows me to capture beautiful moments in time that would otherwise go unnoticed.
          </p>

           <p className='about-description'>
            I enjoy shooting a wide range of subjects and topics.
            I have shot events, especially fashion and dance, weddings, nature,
            family portraits, animals, as well as some risky boudoir.
        </p>

           <p className='about-description'>
             I have been a contributing photographer to the following:
           </p>

           <ul>
               <li className='about-contributions'>
                 Denver Xposer Magazine
               </li>
               <li className='about-contributions'>
                 WeWent
               </li>
               <li className='about-contributions'>
                 Crested Butte Dance Collective
               </li>
               <li className='about-contributions'>
                 Boulder Weekly
               </li>
               <li className='about-contributions'>
                 iStock database contributor
               </li>
             </ul>

               <p className='about-description'>
                 I am always looking for new opportunities and experiences.
                 I am available for general freelance photography, weddings,
                 or just editing projects.
                 Please check me out on  <a
                   className="social-media-link"
                   href="https://www.instagram.com/tereza_venn/"
                   target="_blank">Instagram</a>  or reach out to me on  <a
                   className="social-media-link"
                   href='https://www.facebook.com/tereza.venn?fref=pb&hc_location=friends_tab&pnref=friends.all'
                   target='_blank'>Facebook</a>.
                 You can also email me at tereza.venn@gmail.com.
               </p>

             </div>
           </div>
         </div>
         )
         }
         }
