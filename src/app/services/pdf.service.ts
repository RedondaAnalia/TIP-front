import { Injectable } from '@angular/core';


import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Injectable()
export class PdfService {

  constructor() { }

  downloadPDF(DOM) {
    return html2canvas(DOM, {allowTaint: false,
                              useCORS: false,
                              scale: 1
                            })
          .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');

                    const imgWidth = 150;
                    const pageHeight = 295;
                    const imgHeight = canvas.height * imgWidth / canvas.width;
                    let heightLeft = imgHeight;

                    const doc = new jsPDF('p', 'mm');
                    let position = 0;

                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;

                    while (heightLeft >= 0) {
                      position = heightLeft - imgHeight;
                      doc.addPage();
                      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                      heightLeft -= pageHeight;
                    }
                    doc.save('historia_clinicas.pdf');
                  });
                }

}
