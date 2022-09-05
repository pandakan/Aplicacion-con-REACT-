import react , { Component } from "react";

import ContentRowTop from './ContentRowTop'
import TopBar from "./TopBar";
import Footer from './Footer'

class ContentWrapper extends Component{
    render(){

        return(
            <div id="content-wrapper" classNAme="d-flex flex-column">
            <div id="content">
                <TopBar />

                {/* tarjetas de colores superiores */}
                <ContentRowTop 
                    info = {[
                    {
                    titulo : "MOVIES IN DATA BASE",
                    cifra : "21",
                    color : "primary",
                    icono : "border-left-primary"
                    },
                    {
                    titulo : "TOTAL AWARDS",
                    cifra : "79",
                    color : "succes",
                    icono : "border-left-success"
                },
                    {
                        titulo : "ACTORS QUANTITY",
                    cifra : "49",
                    color : "warning",
                    icono : "border-left-warning"
                }
            ]}
                />

            </div>

            <Footer />

        </div>
    )
}
}
export default ContentWrapper