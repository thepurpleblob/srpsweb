<template>
    <main>
        <div class="text-justify md:container md:mx-auto px-8 py-3 border-b-2 mb-4">
            <h2 class="text-4xl font-bold mb-6">Marketing and Communications Manager</h2>

            <p>The Scottish Railway Preservation Society exists to educate the general public in the history of railways in Scotland.  It achieves this through operation of:</p>
            <ul class="list-disc list-inside mt-2">
                <li>the Museum of Scottish Railways, the largest collection of railway items outisde of the National Railway Museum</li>
                <li>Bo’ness & Kinneil Railway, a 5 mile heritage railway and</li>
                <li>SRPS Railtours, Britain's longest established operator of scenic rail excursions.</li>
            </ul>
            <p>The Society is a Charity and is largely run by volunteers with a small permanent staff.</p>
            <p class="mt-4">Working for the SRPS provides a unique workplace where no two days are the same.  Our employee benefits include:</p>
            <ul class="list-disc list-inside mt-2">
                <li>Competitive  salary which is reviewed annually</li>
                <li>Free parking</li>
                <li>Flexible working options</li>
                <li>Contributory pension scheme</li>
                <li>Generous holiday entitlement</li>
                <li>Generous sick pay entitlement</li>
                <li>Work for a charity in the heritage sector where all profits are reinvested into further developing the society and its people.</li>
            </ul>
            <p class="mt-4">We are looking to recruit a Marketing & Communications Manager who will play the leading role in sustaining and developing growth.
                To find out more about the role, please see the <a :href="MarketingManagerAdvertURL" class="font-medium text-info hover:underline">advert</a> and
                <a :href="MarketingManagerJDURL" class="font-medium text-info hover:underline">job description</a>.</p>
            <p class="mt-4">For informal enquiries, or to apply for the post please contact Seonaid Scott, seonaid.scott@srps.org.uk.  </p>

            <ul class="mt-6">
                <li><img :src="PDFIconURL" class="h-[40px] inline"><a :href="MarketingManagerAdvertURL" class="font-medium text-info hover:underline">Marketing and Communications Manager Advert</a></li>
                <li><img :src="PDFIconURL" class="h-[40px] inline"><a :href="MarketingManagerJDURL" class="font-medium text-info hover:underline">Marketing and Communications Manager Job Description</a></li>
            </ul>
        </div>

        <div class="text-justify md:container md:mx-auto px-8 py-3 border-b-2 mb-4 mt-8">
            <h2 class="text-4xl font-bold mb-6">Bookkeeper</h2>

            <p>The Scottish Railway Preservation Society exists to educate the general public in the history of railways in Scotland.  It achieves this through operation of:</p>
            <ul class="list-disc list-inside mt-2">
                <li>the Museum of Scottish Railways, the largest collection of railway items outisde of the National Railway Museum</li>
                <li>Bo’ness & Kinneil Railway, a 5 mile heritage railway and</li>
                <li>SRPS Railtours, Britain's longest established operator of scenic rail excursions.</li>
            </ul>
            <p>The Society is a Charity and is largely run by volunteers with a small permanent staff.</p>
            <p class="mt-4">Working for the SRPS provides a unique workplace where no two days are the same.  Our employee benefits include:</p>
            <ul class="list-disc list-inside mt-2">
                <li>Competitive  salary which is reviewed annually</li>
                <li>Free parking</li>
                <li>Flexible working options</li>
                <li>Contributory pension scheme</li>
                <li>Generous holiday entitlement</li>
                <li>Generous sick pay entitlement</li>
                <li>Work for a charity in the heritage sector where all profits are reinvested into further developing the society and its people.</li>
            </ul>
            <p class="mt-4">We are looking to recruit a Bookkeeper who will contribute to the preservation of railway heritage.
                To find out more about the role, please see the <a :href="BookkeeperAdvertURL" class="font-medium text-info hover:underline">advert</a> and
                <a :href="BookkeeperJDURL" class="font-medium text-info hover:underline">job description</a>.</p>
            <p class="mt-4">For informal enquiries, or to apply for the post please contact Seonaid Scott, seonaid.scott@srps.org.uk.  </p>

            <ul class="mt-6">
                <li><img :src="PDFIconURL" class="h-[40px] inline"><a :href="BookkeeperAdvertURL" class="font-medium text-info hover:underline">Bookkeeper Advert</a></li>
                <li><img :src="PDFIconURL" class="h-[40px] inline"><a :href="BookkeeperJDURL" class="font-medium text-info hover:underline">Bookkeeper Job Description</a></li>
            </ul>
        </div>
    </main>

</template>

<script setup lang="ts">
    import MarketingManagerAdvertURL from '../assets/MarketingManagerAdvert.pdf';
    import MarketingManagerJDURL from '../assets/MarketingManagerJD.pdf';
    import BookkeeperAdvertURL from '../assets/BookkeeperAdvert.pdf';
    import BookkeeperJDURL from '../assets/BookkeeperJD.pdf';
    import PDFIconURL from '../assets/pdficon.png';
</script>