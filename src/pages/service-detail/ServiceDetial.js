import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/services";
import DocumentImg from "../../images/big-document.webp";
import Quote from "../../images/quote.webp";
import BigCircle from "../../images/big-circle.webp";
import Review from "../../components/review/Review";
import useStyles from "./styles";

const ServiceDetial = () => {
    const classes = useStyles();
    const { serviceId } = useParams();
    const service = servicesData.find((data) => data.id === serviceId);
    return (
        <div className={classes.serviceDetailWrap}>
            <img
                src={DocumentImg}
                alt="document"
                className={classes.documentImg}
            />
            <div className={classes.serviceDetail}>
                <h2>{service.text1}</h2>
                <h3>{service.text2}</h3>
                <img src={Quote} alt="quote" className={classes.quote} />
                <p>{service.text3}</p>
                <br />
                <p>{service.text4}</p>
            </div>
            <hr />

            <div className={classes.moreAbout}>
                <h3>{service.text5}</h3>
                <p>{service.text6}</p>
                <br />
                <p>{service.text7}</p>
                <br />
                <p>{service.text8}</p>
                <br/>
                <p>{service.text8Upd}</p>

                {service.textList1 ? (
                    <>
                        <ul className={classes.moreAboutList}>
                            <li>{service.textList1}</li>
                            <li>{service.textList2}</li>
                            <li>{service.textList3}</li>
                            <li>{service.textList4}</li>
                            <li>{service.textList5}</li>
                            {
                                service.listUpd ? (
                                    <>
                                        <li>{service.listUpd}</li>
                                        <li>{service.textList6}</li>
                                        <li>{service.textList7}</li>
                                    </>
                                ) : (
                                    <></>
                                )
                            }
                        </ul>
                    </>
                ) : (
                    <></>
                )}
            </div>

            <div className={classes.commonServices}>
                {service.text9 && service.text10 ? (
                    <>
                        <h3>{service.text9}</h3>
                        <img
                            src={BigCircle}
                            alt="circle"
                            className={classes.bigCircle}
                        />
                        <p>{service.text10}</p>
                        <br />
                        <Grid container className={classes.comServiceGrid}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Link to="/" className={classes.comServiceItem}>
                                    French Document Translations
                                </Link>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Link to="/" className={classes.comServiceItem}>
                                    Arabic Document Translations
                                </Link>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Link to="/" className={classes.comServiceItem}>
                                    German Document Translations
                                </Link>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Link to="/" className={classes.comServiceItem}>
                                    Dutch Document Translations
                                </Link>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Link to="/" className={classes.comServiceItem}>
                                    Italian Document Translations
                                </Link>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Link to="/" className={classes.comServiceItem}>
                                    Chinese Document Translations
                                </Link>
                            </Grid>
                        </Grid>
                        <hr />
                    </>
                ) : (
                    <></>
                )}
            </div>

            <div className={classes.otherTransServices}>
                <h3>{service.text11}</h3>
                <p>
                    Other common services are listed here below for your
                    convenience:
                </p>
                <br />
                <Grid container className={classes.otherServiceGrid}>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Certified Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Website Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Sworn Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Legal Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Certificate Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Standard Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Mobile App Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Technical Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            Medical Translations
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        xs={12}
                        className={classes.item}
                    >
                        <Link to="/" className={classes.itemTitle}>
                            User Manual Translations
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <hr />
            <Review />
        </div>
    );
};

export default ServiceDetial;
