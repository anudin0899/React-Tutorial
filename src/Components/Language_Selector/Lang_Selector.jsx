import React, { useEffect } from 'react'
import Style from "./index.module.css"
import { useTranslation } from 'react-i18next'

const Language = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
    { code: "ar", lang: "Arabic" },
];




const Lang_Selector = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    useEffect(()=>{
        document.body.dir = i18n.dir() // change the direction right to left
    },[i18n,i18n.language])

    return (
        <div className={Style.box}>
            <ul className={Style.item}>
                {Language.map((lng) => {
                    return (
                        <li key={lng.code}
                            className={lng.code === i18n.language ? Style.items_selected : ""}
                            onClick={() => changeLanguage(lng.code)}
                        >
                            {lng.lang}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Lang_Selector