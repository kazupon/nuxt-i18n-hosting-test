<script setup>
const { t } = useI18n()
const route = useRoute()

const {data: wine } = await useFetch(`http://localhost:8080/store-api/public/api/v1/wines/${route.params.slug}`)
if (!wine.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>


<template>
    <section class="main_section">
        <div class="data_title"><h1>{{ wine.name }}</h1></div>
        <div class="data_caption container_margin">una sacco di testo vkdkdksks</div>
        <div class="container_margin"><h2>Scheda Tecnica</h2></div>
        <div class="grid_container">
            <div class="grid_column">
                <ul class="sc_list">
                    <li><b>{{ t('schedaTecnica.nomeVino') }}</b>: {{ wine.name }}</li>
                    <li><b>{{ t('schedaTecnica.denominazione') }}</b>: Indicazione Geografica Tipica Toscana</li>
                    <li><b>{{ t('schedaTecnica.volume') }}</b>: 750ml</li>
                    <li><b>{{ t('schedaTecnica.uve') }}</b>: Vermentino 70%, Ansonica 30%</li>
                    <li><b>{{ t('schedaTecnica.origine') }}</b>: Suolo misto Argilloso</li>
                    <li><b>{{ t('schedaTecnica.sistema') }}</b>: Cordone Speronato</li>
                    <li><b>{{ t('schedaTecnica.densità') }}</b>: 4000 piante/ha</li>
                    <li><b>{{ t('schedaTecnica.eta') }}</b>: 4 Anni</li>
                    <li><b>{{ t('schedaTecnica.periodo') }}</b>: Fine Agosto</li>
                    <li><b>{{ t('schedaTecnica.vinificazione') }}</b>: Raccola a mano delle uve, macerazione per qualche ora, pigiatura soffice. Decantazione a freddo e fermentazione a temperatura controllata per 12 giorni. Affinamento di 4 mesi in acciaio.</li>
                    <li><b>{{ t('schedaTecnica.affinamento') }}</b>: 2 mesi</li>
                    <li><b>{{ t('schedaTecnica.alcol') }}</b>: 12,5 %Vol</li>
                </ul>
            </div>
            <div class="grid_column"><img class="sc_bottle_image" src="https://via.placeholder.com/150"></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        <div class="sc_links">
            <div><a class="button_orange" href="/">ACQUISTA</a></div>
            <div><a class="button_orange">SCHEDA TECNICA</a></div>
        </div>
        
    </section>
</template>