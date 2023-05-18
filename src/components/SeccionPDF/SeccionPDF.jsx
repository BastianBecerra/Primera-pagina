import React from "react";
import '../SeccionPDF/SeccionPDF.css'

import { MdDownload }  from "react-icons/md";


//IMPORTACION IMAGENES
import FloorCleaningVol1 from '../../assets/img/the-co-bot-floor-cleaning-guide-vol-1-01.jpg'
import AirportsApplicationVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-airports-01.jpg'
import HealthcareApplicationsVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-healthcare-01.jpg'
import LogisticsApplicationsVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-logistics-01.jpg'
import RetailApplicationsVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-retail-01.jpg'
//

// Importacion PDFs
import PDF1 from '../../assets/PDF/Ejemplo-de-pdf-1.pdf';
import PDF2 from '../../assets/PDF/Ejemplo-de-pdf-2.pdf'
import PDF3 from '../../assets/PDF/Ejemplo-de-pdf-3.pdf'
import PDF4 from '../../assets/PDF/Ejemplo-de-pdf-4.pdf'
import PDF5 from '../../assets/PDF/Ejemplo-de-pdf-5.pdf'
//

function PDF() {

    const downloadFile = (fileUrl, fileName) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
      };
    
      const handleDownload = (pdf) => {
        downloadFile(pdf, `${pdf}`);
      };

    return(
        <section className="container">
            <div className="row">

                <div className="col-12 py-5">
                    <h4 className="RobotoMedio">Obtenga más información sobre cómo nuestras soluciones autónomas brindan valor en múltiples aplicaciones</h4>
                </div>

                <div className="col-12 col-lg py-4">
                    <img className="boxImg" src={FloorCleaningVol1} alt="" />
                    <p className="mt-3 RobotoLigth">Floor Cleaning Guide Vol.1</p>
                    <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(PDF1)}><MdDownload/>PDF</button>
                </div>

                <div className="col-12 col-lg py-4">
                    <img className="boxImg" src={AirportsApplicationVol2} alt="" />
                    <p className="mt-3 RobotoLigth">Airports Applications Vol2</p>
                    <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(PDF2)}><MdDownload/>PDF</button>
                </div>
                        
                <div className="col-12 col-lg py-4">
                    <img className="boxImg" src={HealthcareApplicationsVol2} alt="" />
                    <p className="mt-3 RobotoLigth">Healthcare Applications Vol2</p>
                    <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(PDF3)}><MdDownload/>PDF</button>
                </div>
                        
                <div className="col-12 col-lg py-4">
                    <img className="boxImg" src={LogisticsApplicationsVol2} alt="" />
                    <p className="mt-3 RobotoLigth">Logistics Applications Vol2</p>
                    <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(PDF4)}><MdDownload/>PDF</button>
                </div>

                <div className="col-12 col-lg py-4">
                    <img className="boxImg" src={RetailApplicationsVol2} alt="" />
                    <p className="mt-3 RobotoLigth">Retail Applications Vol2</p>
                    <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(PDF5)}><MdDownload/>PDF</button>
                </div>
            </div>       
        </section>
    )
}

export default PDF;