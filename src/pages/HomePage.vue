<template>

    <div class="row justify-evenly">
        <div class="srps-preamble">
            <h4>Welcome to the Scottish Railway Preservation Society</h4>

            <p>A volunteer-led organisation dedicated to the
            advancement of Scottish railway heritage. It has the largest collection of railway locomotives,
            carriages, wagons, equipment and artefacts outside the National Railway Museum.</p>

            <p>To find out more about the Society, please click on the links above.</p>

            <p>We are proud to present:</p>
        </div>
    </div>

    <div class="row justify-evenly bg-white">
        <q-card rounded class="srps-card">
            <q-card-section>

                <!-- BKR -->
                <a href="https://www.bkrailway.co.uk" class="srps-link">
                    <div class="row q-mt-md bg-green-9 q-px-md srps-redirect" @click="click_bkr">
                        <div class="col-4 srps-rel">
                            <img src="~assets/bklogo.png" class="srps-image absolute-center" />
                        </div>
                        <div class="col-8 q-pt-md text-center">
                            Travel on Scotland's Heritage railway by the Firth of Forth and
                            take a trip on the train to Kinneil, Birkhill and Manuel,
                            experiencing travel of a bygone era. Enjoy Afternoon Teas,
                            dining trains, special galas, Santa trains or character days like
                            Days Out With Thomas&trade; - there's something for everyone!
                        </div>
                    </div>
                </a>


                <!-- Museum -->
                <a href="https://museumofscottishrailways.org.uk/" class="srps-link">
                    <div class="row bg-black text-white q-px-md srps-redirect">
                        <div class="col-4 srps-rel">
                            <img src="~assets/museum-logo.png" class="srps-image absolute-center" />
                        </div>
                        <div class="col-8 q-pt-md text-center text-white">
                            Located on a separate site near Bo'ness station, the Museum
                            houses one of the largest collections of railway artefacts in
                            the UK and promotes education of railways in Scotland and of
                            the Scottish railway industry.
                        </div>
                    </div>
                </a>

                <!-- Railtours -->
                <a href="https://www.srpsrailtours.co.uk/" class="srps-link">
                    <div class="row bg-red text-white q-px-md srps-redirect">
                        <div class="col-4 srps-rel">
                            <img src="~assets/Railtours.png" class="srps-image absolute-center" />
                        </div>
                        <div class="col-8 q-pt-md text-center text-white">
                            Britain's longest established operator of scenic railway
                            excursions, SRPS Railtours Limited offers excursions to view the
                            splendour of Scotland, visit historic towns and cities or enjoy
                            heritage steam and diesel trac5on around the UK mainline in
                            partnership with the Royal Scot General Trust and Locomotive
                        </div>
                    </div>
                </a>

            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">

    /**
     * Redirect to BKR
     */
    function click_bkr() {
        window.location.replace('https://www.bkrailway.org.uk');
    }

</script>

<style lang="sass">
.srps-link
    color: inherit
    text-decoration: inherit
.srps-redirect
    min-height: 200px
.srps-preamble
    max-width: 640px
    width: 100%
    font-size: 120%
.srps-card
    max-width: 900px
    width: 100%
    font-size: 120%
.srps-image
    max-width: 100%
.srps-rel
    position: relative
</style>