/**
 * Created by TonyTong on 2017/3/5.
 */
import React from 'react'
import FooterLink from '../container/FooterLink.js';
const Footer = ()=>{
   return (
       <p>
           show:
           {' '}
           <FooterLink filter="SHOW_ALL" >all</FooterLink>
           {', '}
           <FooterLink filter="SHOW_ACTIVE">active</FooterLink>
           {', '}
           <FooterLink filter="SHOW_COMPLETED">completed</FooterLink>
       </p>
   );
};
export default Footer;