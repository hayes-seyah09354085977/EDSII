var edsapps = {
    PROBOOK: `
    <div class="column">
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">ETA:</label>
                    <div class="col-lg-7">
                        <input type="text" class="form-control primary"  id="name">
                    </div>
                    <div class="col-lg-1">
                        <span class= "glyphicon glyphicon-search lookup"></span>
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">I/Code:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="ICODE">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">S/Code:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="SCODE">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">Shipment:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="SHIPMENT">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">L/C NO.:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="LCNO">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">Vessel:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="VESSEL">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">BL/AWB:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="BLAWB">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">REG NO:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="REGNO">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">ENTNO:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="ENTNO">
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
    
    <div class="column">
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">PORT:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="PORT">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">PROCEDURE:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="PROCEDURE">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">IMPORTER:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="IMPORTER">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">DATERECEIVE:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="DATERECEIVE">
                    </div>
                </div>
            </div> 
        </div>
        <div class="row top-buffer">
            <div class="frm ">
                <div class="form-group">
                    <label for="name" class="col-lg-4">REMARKS:</label>
                    <div class="col-lg-8">
                        <input type="text" class="form-control shorttext"  id="REMARKS">
                    </div>
                </div>
            </div> 
        </div>
        
    </div> `,

    PRODUCTDATABASE: `
    <label>PRODUCT NO</label><input type'text' id='PRODUCTNO' class='PRIMARY'>
    <label>PRODUCT DESCRIPTION</label><input type'text' id='PRODUCTDESCRIPTION'>
    <label>I/VAL</label><input type'text' id='IVAL'>
    <label>P/VAL</label><input type'text' id='PVAL'>
    <label>CRF/VAL</label><input type'text' id='CRFVAL'>
    <label>UNIT</label><input type'text' id='UNIT'>
    <label>COUNTRY</label><input type'text' id='COUNTRY'>
    <label>CURRENCY</label><input type'text' id='CURRENCY'>


    <label>I/CODE</label><input type'text' id='ICODE'>
    <label>H.S. CODE</label><input type'text' id='HSCODE'>
    <label>DUTY(%)</label><input type'text' id='DUTY'>`,

    IMPORTERDATABASE: `
    <label>REF NO</label><input type'text' id='REFNO' class='PRIMARY'>
    <label>I/CODE</label><input type'text' id='ICODE'>
    <label>I/NAME</label><input type'text' id='INAME'>
    <label>ADDRESS</label><input type'text' id='ADDRESS'>
    <label>SIGNATORY</label><input type'text' id='SIGNATORY'>
    <label>CIIS NO.</label><input type'text' id='CIISNO'>
    <label>IPF A/C</label><input type'text' id='IPFAC'>
    <label>CBW</label><input type'text' id='CBW'>`,

    SUPPLIERDATABASE: `
    <label>S/CODE</label><input type'text' id='SCODE' class='PRIMARY'>
    <label>S/NAME</label><input type'text' id='SNAME'>
    <label>ADDRESS</label><input type'text' id='ADDRESS'>
    `,
    USDEXCHANGERATE: `
    <label>REF NO.</label><input type'text' id='REFNO' class='PRIMARY'>
    <label>DATE</label><input type'text' id='DATE'>
    <label>CURRENCY</label><input type'text' id='CURRENCY'>
    <label>USD EQUIVALENT</label><input type'text' id='USDEQUIVALENT'>
    <label>PHP EQUIVALENT</label><input type'text' id='PHPEQUIVALENT'>
    `,
    ATTACHMENTDOCUMENTCODE: `
    <label>A.D. CODE</label><input type'text' id='ADCODE' class='PRIMARY'>
    <label>A.D. DESCRIPTION</label><input type'text' id='ADDESCRIPTION'>
    `,
    TARIFFRATES: `
    <label>H.S CODE</label><input type'text' id='HSCODE' class='PRIMARY'>
    <label>DESCRIPTION</label><input type'text' id='DESCRIPTION'>
    `
}