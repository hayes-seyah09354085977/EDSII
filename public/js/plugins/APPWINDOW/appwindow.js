var activeapp = {
    taskbarid: '',
    appid: ''
}

var windowapp = {
    open: function(id, appname, content) {
        var appwindow = `
        <div id="` + id + `" class="appcontainer ">
   
        <div class="header">
            <div class="column left">
            <span id="close" class="dot" style="background:#ED594A;"></span>
            <span class="dot" style="background:#FDD800;"></span>
            <span id="minimize" class="dot" style="background:#5AC05A;"></span>
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
        windowapp.ActiveApp(id)
        if ($('#' + activeapp.appid).length == 0) {
            $('.app-content').prepend(appwindow)
            windowapp.taskbar(activeapp.taskbarid, appname, 'newapp') //Taskbar
            windowapp.active(activeapp.appid)

            $(".appcontainer").draggable({
                containment: '.app-content',
                handle: '.header'
            });

            $('.appcontainer').click(function() {
                windowapp.ActiveApp(this.id)
                windowapp.active(activeapp.appid)
                    //close button
                var test = this.id
                $('#' + test).find('#close').click(function() {
                    windowapp.close(test)
                    $('.taskbar').find('#' + test + '_bar').remove()
                })

            })
            $("#minimize, .taskbar#" + activeapp.taskbarid).click(function() {
                console.log($(this))
                $("#" + activeapp.appid).animate({
                    width: ["toggle", "swing"],
                    height: ["toggle", "swing"],
                    opacity: "toggle"

                });
            });
        } else {
            $('div#' + activeapp.appid).click()
        }

    },
    close: function(id) {
        console.log(id)
        $('#' + id + '.appcontainer').remove()
        $('.taskbar').find('#' + id).remove()
    },
    active: function(id) {
        $('.header').removeClass('form-active')
        $('.header').addClass('form-inactive')
        $('.appcontainer').removeClass('activeapp')

        $('#' + id).addClass('activeapp')
        $('#' + id).find('.header').removeClass('form-inactive')
        $('#' + id).find('.header').addClass('form-active')
        windowapp.taskbar(activeapp.taskbarid)
    },
    taskbar: function(id, appname, response) {
        console.log(id)
        var taskbarname = $('.taskbar #' + id),
            taskbar = $('.taskbar')


        if (response == 'newapp') {
            var apptaskbar = `
                <div id="` + id + `" class="appbarInfo form-active">
                <label class='taskbar-name-default'>` + appname + ` </label>
                </div>`
            taskbar.append(apptaskbar)
        } else {
            taskbar.find('.appbarInfo').removeClass('form-active')
            $('.taskbar-name-default').addClass('taskbar-inactive')
            taskbar.find('.appbarInfo').addClass('form-inactive')

            taskbarname.find('.taskbar-name-default').removeClass('taskbar-inactive')
            taskbarname.removeClass('form-inactive')
            taskbarname.addClass('form-active')

        }
    },
    ActiveApp: function(aid) {
        activeapp.appid = aid
        activeapp.taskbarid = aid + '_bar'
    }
}

$('li.applist').click(function() {
    var appid = $(this).attr('id'),
        appname = $('#' + appid).text(),
        appcontent = edsapps[appid.split('_')[0]]

    console.log(appid)
    windowapp.open(appid.split('_')[0], appname, appcontent)
})