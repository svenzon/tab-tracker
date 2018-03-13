<template>
    <v-layout>
        <v-flex xs6>
            <song-meta-data :song="song"/>
        </v-flex>

        <v-flex xs6 class="ml-2">
            <you-tube></you-tube>
        </v-flex>

        <v-layout>
            <v-flex xs6>
            </v-flex>
        </v-layout>
    </v-layout>
</template>
<script>
import YouTube from './YouTube'
import SongMetaData from './SongMetaData'
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    data () {
        return {
            song: {}
        }
    },
    async mounted () {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
    },
    components: {
        Panel,
        SongMetaData,
        YouTube
    }
}
</script>
<style scoped>

textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
    resize: none;
}
</style>
