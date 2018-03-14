<template>
    <v-layout column class="mt-4">
        <v-flex xs6 offset-xs3>
            <songs-panel/>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'

export default {
    components: {
        SongsPanel
    }
}
</script>

<style scoped>

</style>
