<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const s = reactive({ value : false})

function update(event) { if(window.scrollY > 60) { s.value= true } else if (window.scrollY < 60) { s.value= false}}
onMounted(() => window.addEventListener('scroll', update))
onUnmounted(() => window.removeEventListener('scroll', update))
</script>

<template>
    <header class="nav_container" :class="[s.value ? 'nav_scroll' : 'nav_height']">
        <div class="nav_logo"><NuxtLink :to="localePath('/')"><IconsLogo /></NuxtLink></div>
        <div class=""></div>
        <div class="nav_menu">
            <nav class="nav_desktop">
                <ul class="nav_desktop_items">
                    <li><NuxtLink :to="localePath('/vini')">Vini</NuxtLink></li>
                    <li><a href="">Vieni a trovarci</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contatti</a></li>
                    <li><a href="">IN</a></li>
                    <li><a href="">FA</a></li>
                    <li><NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{locale.name}}</NuxtLink></li>
                    <li><a href="">CA</a></li>
                </ul>
            </nav>
            <div class="nav_mobile">mobile</div>
        </div>
        <div class="nav_mobile_menu_container">
          <ul class="nav_mobile_items">
            <li><NuxtLink :to="localePath('/vini')">Vini</NuxtLink></li>
            <li><a href="">Vieni a trovarci</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contatti</a></li>
            <li><a href="">IN</a></li>
            <li><a href="">CA</a></li>
            <li><a href="">FA</a></li>
            <li><NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{locale.name}}</NuxtLink></li>
          </ul>
        </div>
      </header>
</template>
