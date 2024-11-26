<template>
    <main>

        <!-- Become a member -->
        <div class="text-center md:container md:mx-auto px-8 py-3 border-b-2 mb-4">
            <h4 class="font-bold text-2xl mb-4">Get involved</h4>
            <p>
                Members and volunteers are the lifeblood of the Scottish Railway Preservation Society, with over 1,200
                members and over 300 active volunteers supporting the principal aim of the Society - to preserve
                Scotland's railway heritage. Supplemented by a small team of paid staff, the Society is managed and
                operated almost entirely by its volunteers, whose hard work and enthusiasm has created a unique
                and priceless working collection of Scottish railway relics.
            </p>

            <div class="flex gap-4 mt-4">
                <div class="flex flex-col">
                    <a :href="MFUrl" download class="btn btn-outline btn-info mb-3">Membership form</a>
                    <p class="mb-3">
                        If you are a UK taxpayer, please consider Gift Aid when applying.
                    </p>
                    <p>
                        Print the membership form and send the completed application to the address on the form,
                        or hand it in to the shop at Bo'ness station.
                    </p>
                </div>
                <div class="text-left">
                    <h5 class="font-bold">Become a member</h5>
                    <p>
                        You can support the work of the Society by becoming a member, which is open to individuals and
                        families. The benefits include:
                    </p>
                    <ul class="list-disc list-inside">
                        <li>Free admission to the Museum of Scottish Railways.</li>
                        <li>The Society's Blastpipe magazine each quarter.</li>
                        <li>Member vouchers for travel on the Bo'ness & Kinneil Railway (not transferrable; terms and conditions apply).</li>
                        <li>Participation in activities subject to rules and competency.</li>
                        <li>Adult members can vote at General Meetings.</li>
                        <li>Adult members can be nominated for election to the Board.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Email to volunteer -->
        <div class="text-left md:container md:mx-auto px-8 py-3 border-b-2 mb-4">
            <div class="grid grid-cols-2 gap-4 mb-5">
                <div class="flex flex-col">
                    <a href="mailto:liz.paton@srps.org.uk" class="btn btn-outline btn-info mb-3">Email us to volunteer</a>
                    <h5 class="font-bold">Become a volunteer</h5>
                    <p>Feel like doing a bit more?</p>
                    <ul class="list-disc list-inside">
                        <li>Enjoy a satisfying hobby,</li>
                        <li>try something new, whether you are skilled or unskilled,</li>
                        <li>we welcome everyone,</li>
                        <li>no help is too small,</li>
                        <li>pass on your skills and knowledge for future generations,</li>
                        <li>achieve your dream - become an Engine Driver!</li>
                    </ul>
                </div>
                <div class="flex-none">
                    <img class="my-auto" src="@/assets/SteamGala750.jpg" alt="Steam Gala volunteers" />
                </div>
            </div>
            <div>
                <p class="mb-3">
                    Volunteering, in whatever capacity and at whatever level - is an immensely rewarding experience for people
                    of all ages and abilities.
                </p>
                <p>
                    There is a whole range of rewarding and diverse activities available, such as:
                </p>
                <ul class="list-disc list-inside mb-4">
                    <li>operating the trains and the signals,</li>
                    <li>restoring and preserving historic locomotives and rolling stock,</li>
                    <li>maintaing and improving the railway track, line side, bridges and buildings,</li>
                    <li>staffing the stations, the museum, the sales shop and stands at exhibitions,</li>
                    <li>stewarding and catering on our mailing raitour trains,</li>
                    <li>helping Santa or Thomas on the special events days,</li>
                    <li>plus many other tasks, many of which can be done from home such as marketing, advertising, publicity,
                        fund raising, archiving, record keeping and accounting.
                    </li>
                </ul>
                <p>
                    <strong>We look forward to seeing you on <i>your</i> railway!</strong>
                </p>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import MFUrl from '@/assets/membform.pdf';
</script>