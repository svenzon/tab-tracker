<template>
    <panel title="Song Info">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>
                <div class="song-artist">
                    {{song.artist}}
                </div>
                <div class="song-genre">
                    {{song.genre}}
                </div>
                <v-btn
                    dark
                    class="cyan"
                    :to="({
                        name: 'song-edit',
                        params () {
                            return {
                                songId: song.id
                            }
                        }
                })">
                Edit Song
                </v-btn>

                <v-btn
                    v-if="isUserLoggedIn"
                    dark
                    class="cyan"
                    @click="bookmark">
                    Bookmark
                </v-btn>

                <v-btn
                    v-if="isUserLoggedIn"
                    dark
                    class="cyan"
                    @click="unbookmark">
                    Unbookmark
                </v-btn>
            </v-flex>

            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl">
                <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>
<script>
import {mapState} from 'vuex'

export default {
    props: [
        'song'
    ],
    methods: {
        bookmark () {
            console.log('bookmarked')
        },
        unbookmark () {
            console.log('unbookmark')
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    }
}
</script>
<style scoped>
.song-title {
    font-size: 30px;
    text-align: left;
}

.song-artist {
    font-size: 24px;
    text-align: left;
}

.song-genre {
    font-size: 18px;
    text-align: left;
}

.album-image {
    width: 100%;
    margin: 0 auto;
}
</style>
