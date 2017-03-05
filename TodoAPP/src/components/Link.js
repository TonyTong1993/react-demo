/**
 * Created by TonyTong on 2017/3/5.
 */
    import React from 'react';
const Link = ({active,onLinkClick,children})=> {
   if (active){
      return <span>{children}</span>
   }
  return  <a href="#" onClick = {e=>{
    e.preventDefault();
    onLinkClick()
  }
  }>{children}</a>
};
export default Link;
