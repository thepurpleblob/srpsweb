<template>
    <main class="md:container md:mx-auto min-h-[40vh] px-8 py-24">
        <h1 class="mb-8 text-2xl font-bold text-center">SRPS Reports and Documents</h1>
        <a
            class="mx-auto flex max-w-2xl items-center gap-4 rounded-lg border border-base-300 px-5 py-4 shadow-sm transition hover:shadow-md"
            :href="ConsolidatedReportUrl"
        >
            <img :src="PDFIconURL" alt="PDF" class="h-10 w-10 shrink-0">
            <span class="font-medium text-info hover:underline">
                SRPS Consolidated Report and Financial Statements 2025
            </span>
        </a>
    </main>
</template>

<script setup lang="ts">
    import ConsolidatedReportUrl from '@/assets/SRPS_Consolidated_Report_and_Financial_Statements_2025.pdf';
    import PDFIconURL from '@/assets/pdficon.png';
</script>
