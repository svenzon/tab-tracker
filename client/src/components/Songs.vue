<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <div v-for="song in songs" :key="song.title">
                    {{song.title}} -
                    {{song.artist}} -
                    {{song.album}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    data () {
        return {
            songs: []
        }
    },
    components: {
        Panel
    },
    async mounted () {
        // find the songs in the backend
        this.songs = await SongsService.index()
    }
}
</script>

<style scoped>

</style>
