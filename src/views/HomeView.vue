<template>
    <main>

        <!-- Introductory text -->
        <div class="text-center md:container md:mx-auto px-8 pb-6">
            <h4 class="text-xl py-4 font-semibold">Welcome to the Scottish Railway Preservation Society</h4>

            <p>
                A volunteer-led organisation dedicated to the advancement of Scottish railway heritage.
            </p>
            <p>
                It has the largest collection of railway locomotives, carriages, wagons, equipment and artefacts
                outside the National Railway Museum.
            </p>

            <p>
                To find out more about the Society, please click on the links above.
            </p>

            <p class="mt-2 font-semibold">We are proud to present:</p>
        </div>

        <section class="mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-2xl bg-gray-100 px-4 py-6 sm:px-6 md:grid-cols-2" aria-label="Explore SRPS">
            <!-- Link to BKR -->
            <a href="https://www.bkrailway.co.uk" class="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 border-t-4 border-t-[#49853b] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#49853b]">
                <div class="flex h-36 items-center justify-center gap-4 bg-gray-50 px-4">
                    <img class="h-28 w-[45%] object-contain" src="@/assets/bklogo.png" alt="Bo'ness and Kinneil Railway" />
                    <img class="h-28 w-[45%] object-contain" src="@/assets/bkr-image512.png" alt="Steam train at Bo'ness and Kinneil Railway" />
                </div>
                <div class="flex-1 px-6 py-5 text-center text-gray-800">
                    <h2 class="mb-2 text-lg font-bold text-[#49853b]">Bo'ness &amp; Kinneil Railway</h2>
                    <p>
                        Travel on Scotland's Heritage railway by the Firth of Forth and
                        take a trip on the train to Kinneil, Birkhill and Manuel,
                        experiencing travel of a bygone era. Enjoy Afternoon Teas,
                        dining trains, special galas, Santa trains or character days like
                        Days Out With Thomas&trade; - there's something for everyone!
                    </p>
                </div>
            </a>

            <!-- Link to Museum -->
            <a href="https://museumofscottishrailways.org.uk/" class="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 border-t-4 border-t-black bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                <div class="flex h-36 items-center justify-center gap-4 bg-gray-50 px-4">
                    <img class="h-28 w-[45%] object-contain" src="@/assets/museum-logo.png" alt="Museum of Scottish Railways" />
                    <img class="h-28 w-[45%] object-contain" src="@/assets/museum512.png" alt="Railway exhibits at the museum" />
                </div>
                <div class="flex-1 px-6 py-5 text-center text-gray-800">
                    <h2 class="mb-2 text-lg font-bold text-black">Museum of Scottish Railways</h2>
                    <p>
                        Located on a separate site near Bo'ness station, the Museum
                        houses one of the largest collections of railway artefacts in
                        the UK and promotes education of railways in Scotland and of
                        the Scottish railway industry.
                    </p>
                </div>
            </a>

            <!-- Link to Railtours -->
            <a href="https://www.srpsrailtours.co.uk/" class="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 border-t-4 border-t-[#6b0319] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b0319]">
                <div class="flex h-36 items-center justify-center gap-4 bg-gray-50 px-4">
                    <img class="h-28 w-[45%] object-contain" src="@/assets/Railtours.png" alt="SRPS Railtours" />
                    <img class="h-28 w-[45%] object-contain" src="@/assets/railtours512.png" alt="A train on an SRPS railtour" />
                </div>
                <div class="flex-1 px-6 py-5 text-center text-gray-800">
                    <h2 class="mb-2 text-lg font-bold text-[#6b0319]">SRPS Railtours</h2>
                    <p>
                        Britain's longest established operator of scenic railway
                        excursions, SRPS Railtours Limited offers excursions to view the
                        splendour of Scotland, visit historic towns and cities or enjoy
                        heritage steam and diesel traction around the UK mainline in
                        partnership with the Royal Scot General Trust and Locomotive
                    </p>
                </div>
            </a>

            <!-- Link to Shop -->
            <a href="https://shop.srps.org.uk/" class="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 border-t-4 border-t-[#003149] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003149]">
                <div class="flex h-36 items-center justify-center bg-gray-50 px-4">
                    <img class="h-28 w-full object-contain" src="@/assets/shop_logo.png" alt="SRPS online shop" />
                </div>
                <div class="flex-1 px-6 py-5 text-center text-gray-800">
                    <h2 class="mb-2 text-lg font-bold text-[#003149]">SRPS Online Shop</h2>
                    <p>
                        The SRPS online shop offers items for sale that are relevant to
                        Scottish Railway history such as books and paintings. It also
                        offers exclusive limited edition models of locomotives or rolling
                        stock that form part of the SRPS collection that you can own and
                        operate on your own model railway.
                    </p>
                </div>
            </a>
        </section>

        <!-- Various affiliations-->
        <div class="bg-white text-black py-4">
            <div class="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 px-4 pb-1">
                <div class="text-center">
                    <a href="https://www.museumsgalleriesscotland.org.uk/recognition/recognised-collections/">
                        <img src="@/assets/heritage-logo-180.png"/>
                    </a>
                </div>
                <div class="text-center">
                    <a href="https://railway200.co.uk/">
                        <img src="@/assets/railway200-logo-180.png" />
                    </a>
                </div>
                <div class="text-center">
                    <a href="https://www.goindustrial.co.uk/">
                        <img src="@/assets/goindustrial-175.png" />
                    </a>
                </div>
                <div class="text-center">
                    <a href="https://www.visitscotland.com/">
                        <img src="@/assets/TouristBoard-small.png" />
                    </a>
                </div>
                <div class="text-center">
                    <a href="https://www.hra.uk.com/">
                        <img src="@/assets/hra-180.png"/>
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
