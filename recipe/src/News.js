import React from "react";
import style from "./news.module.css";
const News=({title,date,author,url})=>{
    return(
        <div className={style.bod}>
            <h1 className={style.my}>{title}</h1>
            <p className={style.my}>Date: {date}</p>
            <p className={style.my}>Author: {author}</p>
            {/* <p className={style.my}>URL: {url}</p> */}
            <a href={url} target="__blank" className={style.li}><span className={style.sp} >Visit the page</span></a>
        </div>
    )
}
export default News;