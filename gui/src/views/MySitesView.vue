<template lang="">
    <div class="page" id="mysites">
    <ClientSites/>
    <LoadingSites/>
    </div>
</template>
<script>
import ClientSites from '@/components/ClientSites.vue';
import LoadingSites from '@/components/LoadingSites.vue';
export default {
    components: {
        ClientSites,
        LoadingSites
    }
}
</script>
<style scoped>
    
</style>