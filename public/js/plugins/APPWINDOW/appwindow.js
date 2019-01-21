var activeapp = ''
var windowapp = {
    open: function(id, appname) {
        console.log('open')
        var appwindow = `
        <div id="` + id + `" class="appcontainer">
   
        <div class="header">
            <div class="column left">
            <span id="close" class="dot" style="background:#ED594A;"></span>
            <span class="dot" style="background:#FDD800;"></span>
            <span class="dot" style="background:#5AC05A;"></span>
            </div>
            <div class="column middle">
            ` + appname + `
            </div>
            <div class="column right">
            <div style="float:right">
                <!-- <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span> -->
            </div>
            </div>
        </div>

        <div class="content">
           <label>Ref. No</label><input type'text' id='REFNO' class='shorttext'><br>
           <label>Importer</label><input type'text' id='IMPORTER'><br>
           <label>Address</label><input type'text' id='ADDRESS'><br>
           <label>CIIS No</label><input type'text' id='CIISNO'><br>
           <label>Port/Org</label><input type'text' id='PORTORG'><br>
           <label>Reg. No</label><input type'text' id='REGNO'><br>
           <label>BL/AWB</label><input type'text' id='BLAWB'><br>
           <label>A/Bank</label><input type'text' id='ABANK'><br>
           <label>PMode/LC</label><input type'text' id='PMODE'><br>
        </div>
    </div>`
        activeapp = id
        $('.app-content').prepend(appwindow)
        windowapp.taskbar(activeapp, appname, 'newapp')
        windowapp.active(activeapp)

        $(".appcontainer").draggable({
            containment: '.app-content',
            handle: '.header'
        });
        console.log(activeapp)
        $('#' + activeapp).find('#close').click(function() {
            windowapp.close()
            $('.taskbar').find('#' + activeapp).remove()
        })

        $('.appcontainer').click(function() {
            activeapp = this.id
            console.log(this)
            windowapp.active(activeapp)

        })


    },
    close: function(id) {
        $('#' + activeapp + '.appcontainer').remove()
        $('.taskbar').find('#' + id).remove()
    },
    active: function(id) {
        $('.header').removeClass('form-active')
        $('.header').addClass('form-inactive')
        $('.appcontainer').removeClass('activeapp')

        $('#' + id).addClass('activeapp')
        $('#' + id).find('.header').removeClass('form-inactive')
        $('#' + id).find('.header').addClass('form-active')
        windowapp.taskbar(id)
    },
    taskbar: function(id, appname, response) {
        $('.taskbar').find('.appbarInfo').removeClass('form-active')
            // $('.taskbar-name-default').addClass('taskbar-inactive')
        $('.taskbar').find('.appbarInfo').addClass('form-inactive')

        switch (response) {
            case 'newapp':
                var apptaskbar = `
                <div id="` + id + `" class="appbarInfo form-active">
                <label class='taskbar-name-default'>` + appname + ` </label>
                </div>`
                $('.taskbar').append(apptaskbar)
                break;

            default:
                // $('.taskbar').find('#' + id).removeClass('form-inactive')
                $('.taskbar').find('#' + id).removeClass('form-inactive')
                $('.taskbar').find('#' + id).addClass('form-active')

        }
    }
}


windowapp.open('PROBOOK', 'Pro Book')