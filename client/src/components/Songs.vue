<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <v-btn
                    class="cyan accent-2"
                    light
                    small
                    absolute
                    right
                    middle
                    fab
                    slot="action"
                    @click="navigateTo({name: 'songs-create'})">
                        <v-icon>add</v-icon>
                </v-btn>
                <div v-for="song in songs" :key="song.id">
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
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
    },
    async mounted () {
        // find the songs in the backend
        this.songs = (await SongsService.index()).data
    }
}
</script>

<style scoped>

</style>
