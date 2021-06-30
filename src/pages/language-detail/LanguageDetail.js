import React from 'react'
import { useParams } from 'react-router-dom'
import { languagesData } from '../../data/languages'

const LanguageDetail = () => {
    const { languageId } = useParams();
    const language = languagesData.find(data => data.id === languageId)
    return (
        <div>
            <h2>{language.header}</h2>
        </div>
    )
}

export default LanguageDetail
