<script>
import IpInfoCard from "@/components/IpInfoCard";
import Header from "@/components/Header";

import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  components: { IpInfoCard, Header },
  setup() {
    const store = useStore();

    const ipAddressInfo = computed(() => {
      return store.getters["ipInfo"];
    });

    onMounted(() => {
      store.dispatch("getIpAddressInfo");
    });

    return {
      ipAddressInfo,
    };
  },
};
</script>

<template>
  <Header />
  <div class="ip-info" v-if="ipAddressInfo != null">
    <IpInfoCard :title="'ip address'" :value="ipAddressInfo.ip" />
    <IpInfoCard :title="'location'" :value="ipAddressInfo.city" />
    <IpInfoCard :title="'timezone'" :value="ipAddressInfo.timezone" />
    <IpInfoCard :title="'country'" :value="ipAddressInfo.country" />
  </div>
  <div class="map" v-if="ipAddressInfo != null">
    <GoogleMap
      :center="{ lat: ipAddressInfo.lat, lng: ipAddressInfo.lng }"
      :zoom="8"
      :mapType="'hybrid'"
      :markers="[
        {
          lat: ipAddressInfo.lat,
          lng: ipAddressInfo.lng,
        },
      ]"
    />
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-roboto: "Roboto", sans-serif;

  --radius-value: 0.8em;
}

body {
  font-family: var(--font-roboto);
}

#app {
  display: grid;
  grid-template-columns: 7em 1fr 7em;
  grid-template-rows: 10em 5em 5em;
}

.ip-info {
  z-index: 1;
  height: 10em;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  grid-column: 2/3;
  grid-row: 2 / 4;
  border-radius: 0.7em;
  display: flex;
}

.map {
  height: 70vh;
  grid-column: 1 / -1;
  grid-row-start: 3;
  background: cornflowerblue;
}
</style>