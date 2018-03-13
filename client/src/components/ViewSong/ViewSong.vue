<template>
    <div>
        <v-layout class="mt-4">
            <v-flex xs6>
                <song-meta-data :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <you-tube :youtubeId="song.youtubeId"/>
            </v-flex>
        </v-layout>

        <v-layout class="mt-2">
            <v-flex xs6>
                <lyrics :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <tab :song="song"/>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import Lyrics from './Lyrics'
import SongMetaData from './SongMetaData'
import Tab from './Tab'
import YouTube from './YouTube'
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
        Lyrics,
        Panel,
        SongMetaData,
        Tab,
        YouTube
    }
}
</script>
<style scoped>
</style>
