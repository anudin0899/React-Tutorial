import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Header from '../../Components/Header/Header';

const I18Next = () => {
    const { t } = useTranslation();

    const { line1, line2 } = t("description");
    return (
        <div className='page'>
            <Header />
            <div className='container flex-col'>
                <h1>{t("greeting")}</h1>
                <span>
                    <Trans
                        i18nKey={line1}
                        values={{
                            channel: "practice"
                        }}
                        components={{ 1: <b/> }}
                    />
                </span>
                {/* <h4>{line1}</h4> */}
                <p>{line2}</p>
            </div>
        </div>
    )
}

export default I18Next