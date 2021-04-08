
import React,{FC} from 'react'
import { CSSProperties } from "react";

interface IIconInterface{
    source:string,
    alt:string
}
const styleOfImage:CSSProperties={
  paddingRight:'15px',
  paddingLeft:'5px',
}

const IconHolder: FC<IIconInterface> = props => {
    return(
      <>
        <img src={props.source} alt ={props.alt} style ={styleOfImage}/>
      </>
    );
  };
  
  export default IconHolder;
