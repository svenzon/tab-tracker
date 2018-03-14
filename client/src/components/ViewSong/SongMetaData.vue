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
export default {
    props: [
        'song'
    ],
    methods: {
        navigateTo (route) {
            this.$router.push(route)
        }
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
