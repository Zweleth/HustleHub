<template lang="">
    <div class="page" id="mysites" v-if="L_C_I?.l_c_k != null">
    <ClientSites/>
    <LoadingSites/>
    </div>
    <div class="page" @mouseover="mOver()" v-else></div>
</template>
<script>
import ClientSites from '@/components/ClientSites.vue';
import LoadingSites from '@/components/LoadingSites.vue';
import { mapActions, mapGetters} from 'vuex';
export default {
    components: {
        ClientSites,
        LoadingSites
    },
    computed: {
        ...mapGetters(["L_C_I"])
    },
    methods: {
        ...mapActions(["fetchClientsSites"]),
        mOver() {
            window.location.reload()
        }
    },
    created() {
        this.fetchClientsSites();
    },
}
</script>
<style scoped>

</style>