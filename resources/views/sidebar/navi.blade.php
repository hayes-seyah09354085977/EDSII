<!-- START PAGE SIDEBAR -->
<div class="page-sidebar">
    <!-- START X-NAVIGATION -->
    <ul class="x-navigation">
        <li class="xn-logo">
            <a href="index.html">{{ config('app.name', 'EDS') }}</a>
            <a href="#" class="x-navigation-control"></a>
        </li>
        <li class="xn-profile">
            <a href="#" class="profile-mini">
                <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
            </a>
            <div class="profile">
                <div class="profile-image">
                    <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
                </div>
                <div class="profile-data">
                    <div class="profile-data-name">{{ Auth::user()->name }}</div>
                    <div class="profile-data-title">{{ Auth::user()->designation }}</div>
                </div>
                <div class="profile-controls">
                    <a href="pages-profile.html" class="profile-control-left"><span class="fa fa-info"></span></a>
                    <a href="pages-messages.html" class="profile-control-right"><span class="fa fa-envelope"></span></a>
                </div>
            </div>                                                                        
        </li>
        <li class="xn-title">Navigation</li>
        <li class="active">
            <a href="index.html"><span class="fa fa-desktop"></span> <span class="xn-text">Dashboard</span></a>                        
        </li>                    
        <li class="xn-openable">
            <a href="#"><span class="fa fa-files-o"></span> <span class="xn-text">Databanks</span></a>
            <ul>
                
            <ul>
                {{-- start Maintenance app --}}
                    <li class="xn-openable">
                            <a href="#"><span class="fa fa-image"></span>Maintenance</a>
                            <ul>
                                <li id='PROBOOK_MS' class='applist'><a href="#"><span class="fa fa-align-center"></span> Pro Book</a></li>
                                <li id='PRODUCTDATABASE_MS' class='applist'><a href="#"><span class="fa fa-align-justify"></span>Product Database</a></li>
                                <li id='IMPORTERDATABASE_MS' class='applist'><a href="#"><span class="fa fa-align-justify"></span>Importer Database</a></li>
                                <li id='SUPPLIERDATABASE_MS' class='applist'><a href="#"><span class="fa fa-align-justify"></span>Supplier Database</a></li>
                                <li id='USDEXCHANGERATE_MS' class='applist'><a href="#"><span class="fa fa-align-justify"></span>USD Exhange Rate</a></li>
                                <li id='ATTACHMENTDOCUMENTCODE_MS' class='applist'><a href="#"><span class="fa fa-align-justify"></span>Attachment Document Code</a></li>
                                <li id='TARIFFRATES_MS' class='applist'><a href="#"><span class="fa fa-align-justify"></span>Tariff Rates</a></li>
                            </ul>
                        </li>
                {{-- end maintenance app --}}
                                          
            </ul>
        </li>
                {{-- <li><a href="#"><span class="fa fa-image"></span> Maintenance</a></li> --}}
                <li><a href="#"><span class="fa fa-user"></span> Transaction</a></li>
                <li class="xn-openable">
                    <a href="#"><span class="fa fa-clock-o"></span>Smartlist</a>
                    <ul>
                        <li><a href="pages-timeline.html"><span class="fa fa-align-center"></span> Default</a></li>
                        <li><a href="pages-timeline-simple.html"><span class="fa fa-align-justify"></span> Full Width</a></li>
                    </ul>
                </li>
               
                                          
            </ul>
        </li>

        <li class="xn-openable">
            <a href="#"><span class="fa fa-file-text-o"></span> <span class="xn-text">Computation</span></a>
            <ul>
                <li><a href="pages-gallery.html"><span class="fa fa-image"></span> Maintenance</a></li>
                <li><a href="pages-profile.html"><span class="fa fa-user"></span> Transaction</a></li>
                <li class="xn-openable">
                    <a href="#"><span class="fa fa-clock-o"></span>Smartlist</a>
                    <ul>
                        <li><a href="pages-timeline.html"><span class="fa fa-align-center"></span> Default</a></li>
                        <li><a href="pages-timeline-simple.html"><span class="fa fa-align-justify"></span> Full Width</a></li>
                    </ul>
                </li>                       
            </ul>
        </li>
        <li class="xn-openable">
            <a href="#"><span class="fa fa-file-text-o"></span> <span class="xn-text">Utilities</span></a>
            <ul>
                <li><a href="pages-gallery.html"><span class="fa fa-image"></span> Maintenance</a></li>
                <li><a href="pages-profile.html"><span class="fa fa-user"></span> Transaction</a></li>
                <li class="xn-openable">
                    <a href="#"><span class="fa fa-clock-o"></span>Smartlist</a>
                    <ul>
                        <li><a href="pages-timeline.html"><span class="fa fa-align-center"></span> Default</a></li>
                        <li><a href="pages-timeline-simple.html"><span class="fa fa-align-justify"></span> Full Width</a></li>
                    </ul>
                </li> 
            </ul>
        </li>
        
        
    </ul>
    <!-- END X-NAVIGATION -->
</div>
<!-- END PAGE SIDEBAR -->