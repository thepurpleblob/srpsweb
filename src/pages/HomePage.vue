<template>

    <div class="row justify-evenly">
        <div class="srps-preamble text-center">
            <h4>Welcome to the Scottish Railway Preservation Society</h4>

            <p>A volunteer-led organisation dedicated to the
            advancement of Scottish railway heritage. It has the largest collection of railway locomotives,
            carriages, wagons, equipment and artefacts outside the National Railway Museum.</p>

            <p>To find out more about the Society, please click on the links above.</p>

            <p>We are proud to present:</p>
        </div>
    </div>

    <!-- BKR  -->
    <!--
    <a href="https://www.bkrailway.co.uk" class="srps-link">
        <div class="column flex-center brand-bkr">
            <div class="col srps-800">
                <div class="row srps-redirect">
                    <div class="col-4 srps-rel">
                        <q-img src="~assets/bklogo.png" class="absolute-center" fit="scale-down"/>
                    </div>
                    <div class="col-8 sprs-rel">
                        <q-img src="~assets/bkr-image512.png"  class="relative-center" fit="scale-down" />
                    </div>
                </div>
            </div>
            <div class="col srps-800 text-center">
                Travel on Scotland's Heritage railway by the Firth of Forth and
                take a trip on the train to Kinneil, Birkhill and Manuel,
                experiencing travel of a bygone era. Enjoy Afternoon Teas,
                dining trains, special galas, Santa trains or character days like
                Days Out With Thomas&trade; - there's something for everyone!
            </div>
        </div>
    </a>
    -->
    <a href="https://www.bkrailway.co.uk" class="srps-link">
        <div class="column flex-center brand-bkr">
            <div class="col srps-800">
                <div class="row srps-redirect">
                    <div class="col-4 srps-rel">
                        <q-img src="~assets/bklogo.png" class="absolute-center" fit="scale-down"/>
                    </div>
                    <div class="col-8">
                        <img src="~assets/bkr-image512.png" fit="cover" />
                    </div>
                </div>
            </div>
            <div class="col srps-800 text-center">
                Travel on Scotland's Heritage railway by the Firth of Forth and
                take a trip on the train to Kinneil, Birkhill and Manuel,
                experiencing travel of a bygone era. Enjoy Afternoon Teas,
                dining trains, special galas, Santa trains or character days like
                Days Out With Thomas&trade; - there's something for everyone!
            </div>
        </div>
    </a>

    <!-- Museum  -->
    <a href="https://museumofscottishrailways.org.uk/" class="srps-link">
        <div class="column flex-center brand-museum">
            <div class="col srps-800">
                <div class="row srps-redirect">
                    <div class="col-4 srps-rel">
                        <q-img src="~assets/museum-logo.png" class="absolute-center" fit="scale-down"/>
                    </div>
                    <div class="col-8">
                        <img src="~assets/museum512.png" />
                    </div>
                </div>
            </div>
            <div class="col srps-800 text-center">
                Located on a separate site near Bo'ness station, the Museum
                houses one of the largest collections of railway artefacts in
                the UK and promotes education of railways in Scotland and of
                the Scottish railway industry.
            </div>
        </div>
    </a>

    <!-- Railtours  -->
    <a href="https://www.srpsrailtours.co.uk/" class="srps-link">
        <div class="column flex-center brand-railtours">
            <div class="col srps-800">
                <div class="row srps-redirect">
                    <div class="col-4 srps-rel">
                        <q-img src="~assets/Railtours.png" class="absolute-center" fit="scale-down"/>
                    </div>
                    <div class="col-8">
                        <img src="~assets/railtours512.png" />
                    </div>
                </div>
            </div>
            <div class="col srps-800 text-center">
                Britain's longest established operator of scenic railway
                excursions, SRPS Railtours Limited offers excursions to view the
                splendour of Scotland, visit historic towns and cities or enjoy
                heritage steam and diesel traction around the UK mainline in
                partnership with the Royal Scot General Trust and Locomotive
            </div>
        </div>
    </a>

    <!-- Shop  -->
    <a href="https://www.srpsrailtours.co.uk/" class="srps-link">
        <div class="column flex-center bg-white text-black">
            <div class="col srps-800">
                <div class="row srps-redirect">
                    <div class="col-4 srps-rel">
                        <q-img src="~assets/shop_logo.png" class="absolute-center" fit="scale-down"/>
                    </div>
                    <div class="col-8 q-pt-lg">
                        The SRPS online shop offers items for sale that are relevant to
                        Scottish Railway history such as books and paintings. It also
                        offers exclusive limited edition models of locomotives or rolling
                        stock that form part of the SRPS collection that you can own and
                        operate on your own model railway.
                    </div>
                </div>
            </div>
        </div>
    </a>

    <!-- Affiliation links-->
            <div class="srps-affiliate-links">
                <div class="row flex-center">
                    <div class="col srps-affil text-center">
                        <q-img class="srps-assoc" src="~assets/heritage-logo-180.png" fit="scale-down"/>
                    </div>
                    <div class="col srps-affil text-center">
                        <a href="https://railway200.co.uk/">
                            <q-img class="srps-assoc" src="~assets/railway200-logo-180.png" fit="scale-down" />
                        </a>
                    </div>
                    <div class="col srps-affil text-center">
                        <a href="https://www.visitscotland.com/">
                            <q-img class="srps-assoc" src="~assets/TouristBoard-small.png" fit="scale-down" />
                        </a>
                    </div>
                    <div class="col srps-affil text-center">
                        <a href="https://www.goindustrial.co.uk/">
                            <q-img class="srps-assoc" src="~assets/goindustrial.png" fit="scale-down" />
                        </a>
                    </div>
                    <div class="col srps-affil text-center">
                        <a href="https://www.hra.uk.com/">
                            <q-img class="srps-assoc" src="~assets/hra-180.png" fit="scale-down" />
                        </a>
                    </div>
                </div>
            </div>
</template>


<style lang="sass">
.brand-bkr
    background: #49853b
    color: white
.brand-museum
    background: black
    color: white
.brand-railtours
    background: #6b0319
    color: #fddf51
.srps-affil
    max-width: 200px !important
.srps-link
    color: inherit
    text-decoration: inherit
    font-size: 120%
.srps-redirect
    min-height: 200px
    max-width: 800px
.srps-800
    max-width: 800px
    width: 100%
    min-height: 200px
.srps-preamble
    max-width: 640px
    width: 100%
    font-size: 120%
.srps-rel
    position: relative
.srps-affiliate-links
    border-top: solid #003149 5px
</style>