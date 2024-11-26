<template>
    <main>
        <div class="text-justify md:mx-auto md:px-8 px-1 py-3 border-b-2 mb-4 max-w-4xl">

            <h2 class="font-bold text-2xl mb-4 text-center">About the Society</h2>

            <h4 class="font-bold mb-2">Our charitable aims</h4>

            <p class="mb-2">
                The Scottish Railway Preservation Society was founded in 1961, at a time when rapid change was
                sweeping away much of the infrastructure of the Victorian railways. The general object of the Society is
                stated in its Memorandum of Association:
            </p>
            <blockquote class="mb-2 italic px-8">
                &quot;...to establish a Museum of Railways in Scotland whereby there shall be preserved locomotives, rolling
                stock and other equipment and relics of railways in Scotland and of the Scottish railway industry as may
                illustrate the characteristics of her railways...&quot;
            </blockquote>
            <p class="mb-2">
                ...and such is the success of the Society that it now has the
                largest collection of railway locomotives, carriages, wagons, equipment and artefacts in the United
                Kingdom outside the National Railway Museum.
                Our charitable aims, as set our in the Memorandum of Association that has stood us well for almost 65
                years, are to:
            </p>
            <ul class="mb-2 list-inside list-disc">
                <li>promote education of railways in Scotland and of the Scottish railway industry,</li>
                <li>establish a Museum of Railways in Scotland,</li>
                <li>manage, conserve, safeguard and document a Collection,</li>
                <li>display and exhibit items in the the Collection in either a static way, or by operating them or by
                    carrying the public in them,</li>
                <li>stimulate public interest in the Museum,</li>
                <li>provide access to research workers and school children</li>
            </ul>
            <p class="mb-2">For additional information, please see the following PDF documents:</p>
            <ul class="mb-2 list-inside list-disc">
                <li><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" :href="AAUrl">Articles of Association</a></li>
                <li><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="@/assets/Memorandum_of_Association.pdf">Memorandum of Association</a></li>
                <li><a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="@/assets/SRPS_Education_Policy.pdf">SRPS Education Policy</a></li>
            </ul>

            <h4 class="font-bold mb-2">Railways in Scotland</h4>

            <p class="mb-8">
                Railways had a particular effect on Scotland, allowing her to develop from a rather isolated part of the
                British Isles to a land with great industries, whose engineers were known the world over. The industries of
                steel, coal, shipbuilding and engineering, which brought prosperity, would not have developed without
                the railways. Railways connected harbours and allowed fishing fleets a ready market in the growing towns.
                Railways were used as a deliberate means of bringing development to the Highlands, and those parts
                which never had a railway did not develop much at all. The Society hopes to illustrate these special
                characteris5cs of Scotland's railways.
            </p>

            <h4 class="font-bold mb-2">Origins of the Society</h4>

            <p class="mb-2">
                In its early years the Society set up a small museum at Murrayfield station in Edinburgh. With the addition
                of more and larger items to the collection the SRPS moved its activities to Falkirk.
            </p>
            <p class="mb-8">
                From its earliest days, the Society aspired to use its Museum collection and its volunteers' skills to
                establish a preserved railway in central Scotland, on which its collection could be demonstrated in an
                authentic environment, a challenge far beyond the demands of a museum 'static display'.
            </p>

            <h4 class="font-bold mb-2">Establishing and growing a preserved railway</h4>

            <p class="mb-2">
                After many years of searching for a suitable site, the Society started work at Bo'ness in 1979. At that time,
                there was no railway in the town, just a green field where Bo'ness Station now stands on a reclaimed site
                on the south shore of the Firth of Forth. From the early days, the Society formed partnerships to progress.
                The local authority, then Falkirk District Council, organised a Manpower Services Commission project
                which built Bo'ness Station, the locomotive running shed and the first part of the railway, which opened in
                1981 with passenger trains shuttling back and forward from Bo'ness Station. Several historic buildings
                have also been obtained and re-erected to provide a traditional railway setting. With further Manpower
                Services Commission support, the line was extended to the run round loop at Kinneil (a mile from Bo'ness)
                in 1987. With continued support from Falkirk District Council, and from Central Regional Council and the
                Scotish Tourist Board, and with track materials acquired from the South of Scotland Electricity Board, the
                line was extended to Birkhill (3&frac12; miles) in 1989. The depot at Falkirk closed due to a redevelopment
                scheme at the end of 1987, and all of the rolling stock was then moved to Bo'ness.
            </p>
            <p class="mb-8">
                The 1&frac12; miles of the line between Birkhill and Manuel were relaid in 1990 and since 2010 the Bo'ness &
                Kinneil Railway passenger service has operated over the extension to Manuel. From summer 2013 the
                railway uses the new station which has been constructed adjacent to the Edinburgh - Glasgow main-line.
            </p>

            <p>Learn more about the <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.bkrailway.co.uk">
                Bo'ness and Kinneil Railway
            </a></p>
        </div>
    </main>
</template>

<script setup lang="ts">
    import AAUrl from '@/assets/Articles_of_Association.pdf';
</script>