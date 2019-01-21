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
            <label>` + appname + `</label>
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
            <h3>Browser Window</h3>
            <p>How to create a detailed browser window look with CSS.</p>
            <input type='text'>
            <input type='submit'>
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
           $('.appcontainer').removeClass('activeapp')
           $('#' + id).addClass('activeapp')
           windowapp.taskbar(id)
       },
       taskbar: function(id, appname, response) {
           $('.taskbar').find('.appbarInfo').removeClass('active')
           switch (response) {
               case 'newapp':
                   var apptaskbar = `
                <div id="` + id + `" class="appbarInfo active">
                ` + appname + `
                </div>`
                   $('.taskbar').append(apptaskbar)
                   break;

               default:
                   $('.taskbar').find('#' + id).addClass('active')

           }
       }
   }


   windowapp.open('test', 'test')