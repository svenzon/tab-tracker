<template>
    <panel title="YouTube">
        <youtube
         :video-id="youtubeId"
         :player-width="320"
         :player-height="240">
        </youtube>
    </panel>
</template>
<script>

export default {
    props: [
        'youtubeId'
    ]
}
</script>
<style scoped>

</style>
