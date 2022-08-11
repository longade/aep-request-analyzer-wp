import React from "react";
import useStyles from "./styles";
import sampleVideo from "../../../videos/AEP_analyzer.mp4";

export default function FeatureContainer({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            {/* <h1 className={classes.h1}> Pizza of the Day </h1>
            <p className={classes.p}>Truffle alfredo sauce topped with 24 carat gold dust.</p> */}
            <h4>Example of usage</h4>
            <div className={classes.divVideo}>
                <video id="example-video" className={classes.exampleVideo} controls muted>
                    <source src={sampleVideo} type="video/mp4" />
                </video>
            </div>
            {children}
        </div>
    );
}