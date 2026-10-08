<template>
    <main class="bg-gray-100 px-4 py-10 sm:px-6 sm:py-14">
        <div class="mx-auto max-w-6xl">
            <header class="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
                <h1 class="mb-4 text-3xl font-bold text-[#003149]">Get involved</h1>
                <p class="leading-relaxed text-gray-700">
                    Members and volunteers are the lifeblood of the Scottish Railway Preservation Society, with over
                    1,200 members and over 300 active volunteers supporting the principal aim of the Society - to preserve
                    Scotland's railway heritage. Supplemented by a small team of paid staff, the Society is managed and
                    operated almost entirely by its volunteers, whose hard work and enthusiasm has created a unique
                    and priceless working collection of Scottish railway relics.
                </p>
            </header>

            <section class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2" aria-label="Ways to get involved">
                <article class="flex flex-col overflow-hidden rounded-2xl border border-gray-200 border-t-4 border-t-[#003149] bg-white shadow-lg">
                    <div class="p-6 sm:p-8">
                        <h2 class="mb-3 text-2xl font-bold text-[#003149]">Become a member</h2>
                        <p class="mb-5 text-gray-700">
                            You can support the work of the Society by becoming a member, which is open to individuals
                            and families. The benefits include:
                        </p>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex gap-3">
                                <span class="font-bold text-[#49853b]" aria-hidden="true">✓</span>
                                <span>Free admission to the Museum of Scottish Railways.</span>
                            </li>
                            <li class="flex gap-3">
                                <span class="font-bold text-[#49853b]" aria-hidden="true">✓</span>
                                <span>The Society's Blastpipe magazine each quarter.</span>
                            </li>
                            <li class="flex gap-3">
                                <span class="font-bold text-[#49853b]" aria-hidden="true">✓</span>
                                <span>Member vouchers for travel on the Bo'ness &amp; Kinneil Railway (not transferable; terms and conditions apply).</span>
                            </li>
                            <li class="flex gap-3">
                                <span class="font-bold text-[#49853b]" aria-hidden="true">✓</span>
                                <span>Participation in activities, subject to rules and competency.</span>
                            </li>
                            <li class="flex gap-3">
                                <span class="font-bold text-[#49853b]" aria-hidden="true">✓</span>
                                <span>Adult members can vote at General Meetings and be nominated for election to the Board.</span>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-auto border-t border-gray-200 bg-[#f3f7f8] p-6 sm:p-8">
                        <a :href="MFUrl" download class="btn border-0 bg-[#003149] text-white hover:bg-[#004663]">
                            Download membership form
                        </a>
                        <p class="mt-4 text-sm text-gray-700">
                            If you are a UK taxpayer, please consider Gift Aid when applying. Print the form and send
                            the completed application to the address on it, or hand it in to the shop at Bo'ness station.
                        </p>
                    </div>
                </article>

                <article class="flex flex-col overflow-hidden rounded-2xl border border-gray-200 border-t-4 border-t-[#49853b] bg-white shadow-lg">
                    <img
                        class="h-56 w-full object-cover sm:h-64"
                        src="@/assets/SteamGala750.jpg"
                        alt="Volunteers at a steam gala"
                    />
                    <div class="flex flex-1 flex-col p-6 sm:p-8">
                        <h2 class="mb-3 text-2xl font-bold text-[#003149]">Become a volunteer</h2>
                        <p class="mb-4 text-gray-700">
                            Feel like doing a bit more? We welcome everyone, whether you are skilled or unskilled, and
                            no help is too small. Volunteering is an immensely rewarding experience for people of all
                            ages and abilities.
                        </p>
                        <ul class="mb-5 list-inside list-disc space-y-2 text-gray-700">
                            <li>Enjoy a satisfying hobby and try something new.</li>
                            <li>Pass on your skills and knowledge for future generations.</li>
                            <li>Achieve your dream - become an Engine Driver!</li>
                        </ul>
                        <p class="mb-3 text-gray-700">There is a whole range of rewarding and diverse activities available, such as:</p>
                        <ul class="mb-6 list-inside list-disc space-y-1 text-gray-700">
                            <li>Operating the trains and the signals.</li>
                            <li>Restoring and preserving historic locomotives and rolling stock.</li>
                            <li>Maintaining and improving the railway track, lineside, bridges and buildings.</li>
                            <li>Staffing the stations, the museum, the sales shop and stands at exhibitions.</li>
                            <li>Stewarding and catering on our mainline railtour trains.</li>
                            <li>Helping Santa or Thomas on special event days.</li>
                            <li>Helping from home with marketing, advertising, publicity, fundraising, archiving, record keeping and accounting.</li>
                        </ul>
                        <a
                            href="mailto:liz.paton@srps.org.uk"
                            class="btn mt-auto self-start border-0 bg-[#49853b] text-white hover:bg-[#386b2e]"
                        >
                            Email us to volunteer
                        </a>
                        <p class="mt-5 font-semibold text-[#003149]">We look forward to seeing you on your railway!</p>
                    </div>
                </article>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
    import MFUrl from '@/assets/membform2026.pdf';
</script>
