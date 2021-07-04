import React from "react";
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import { servicesData } from '../../data/services'
import Review from '../../components/review/Review'

const Services = () => {
    const classes = useStyles();
    return (
        <div className={classes.services}>
            <div className={classes.servicesWrap}>
                <h2>
                    Translation Services
                </h2>
                <h3>
                   Translation Services offered by Translator UK: Translation Agency
                </h3>
            </div>
            <p>Translator UK offers an expansive range of translation services throughout the United Kingdom. Below are only a few of the most common translation services that have been provided to clients within the past year.</p>

            <Grid container className={classes.servicesItems}>
                {
                    servicesData.map(data => (
                        <Grid item md={4} lg={4} xl={4} xs={6} key={data.id}><Link to={`/services/${data.id}`}>{data.title}</Link></Grid>        
                    ))
                }
            </Grid>

            <div className={classes.servicesPrices}>
                <h3>Translation Service Prices</h3>
                <p>Here at Translator UK we are pleased to offer a no-commitment quotation for translation projects no matter how big or small. One of our expert project managers will discuss your needs and work to find you the best possible price for translation considering your timeline.</p>
            </div>
            <hr />

            <Review />
        </div>
    );
};

export default Services;
