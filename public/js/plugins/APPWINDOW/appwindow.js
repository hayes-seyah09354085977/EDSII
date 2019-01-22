var activeapp = ''
var windowapp = {
    open: function(id, appname, content) {
        var appwindow = `
        <div id="` + id + `" class="appcontainer ">
   
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
           ` + content + `
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
        var taskbarname = $('.taskbar #' + id),
            taskbar = $('.taskbar')
        taskbar.find('.appbarInfo').removeClass('form-active')
        $('.taskbar-name-default').addClass('taskbar-inactive')
        taskbar.find('.appbarInfo').addClass('form-inactive')

        switch (response) {
            case 'newapp':
                var apptaskbar = `
                <div id="` + id + `" class="appbarInfo form-active">
                <label class='taskbar-name-default'>` + appname + ` </label>
                </div>`
                taskbar.append(apptaskbar)
                break;

            default:
                taskbarname.find('.taskbar-name-default').removeClass('taskbar-inactive')
                taskbarname.removeClass('form-inactive')
                taskbarname.addClass('form-active')

        }
    }
}

$('li.applist').click(function() {
    var appid = $(this).attr('id'),
        appname = $('#' + appid).text(),
        appcontent = edsapps[appid.split('_')[0]]

    console.log(appid)
    windowapp.open(appid.split('_')[0], appname, appcontent)
})

// windowapp.open('PROBOOK', 'Pro Book')
// windowapp.open('TEST2', 'Test2')