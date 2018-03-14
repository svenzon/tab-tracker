<template>
    <v-layout column class="mt-4">
        <v-flex xs6 offset-xs3>
            <songs-search-panel/>
            <songs-panel/>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
    components: {
        SongsPanel,
        SongsSearchPanel
    }
}
</script>

<style scoped>

</style>
