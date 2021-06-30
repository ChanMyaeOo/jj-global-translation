import React from 'react'
import { useParams } from 'react-router-dom'
import { servicesData } from '../../data/services'

const ServiceDetial = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(data => data.id === serviceId)
    return (
        <div>
            <h1>{service.title}</h1>
        </div>
    )
}

export default ServiceDetial
