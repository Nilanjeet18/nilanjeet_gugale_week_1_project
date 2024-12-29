import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Calculate Weather is a tool that provides accurate and up-to-date weather information for any location worldwide. Simply enter the desired location, and our system will quickly deliver detailed weather forecasts, including temperature, humidity, wind speed, precipitation probability, and more.',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Looking for more than just a sightseeing trip? Find the Best Tour Guide who will unlock the soul of your destination. From cultural immersion to off-the-beaten-path adventures, we connect you with exceptional guides.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Tailor your travel experience to your unique interests and preferences. We offer flexible itineraries, personalized recommendations, and the ability to adjust your trip to your exact needs.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
