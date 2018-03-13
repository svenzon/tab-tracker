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
import Panel from '@/components/Panel'

export default {
    props: [
        'youtubeId'
    ],
    components: {
        Panel
    }
}
</script>
<style scoped>

</style>
