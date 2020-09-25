<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    export default{
        setup(){
            const store = useStore()
            const ipAddress = ref('')

            const getIpAddressInfo = () => {
                store.dispatch('getIpAddressInfo', ipAddress.value)
            }

            return{
                ipAddress,
                getIpAddressInfo
            }

        }
    }
</script>

<template>
  <header>
      <h1>IP Address Tracker</h1>
      <div class="search">
          <input 
            v-model='ipAddress'
            type="text" 
            placeholder="Search for any ip address or domain">
          <button @click='getIpAddressInfo'>
              <img :src="require('../assets/images/icon-arrow.svg')" alt="arrow icon" />
          </button>
      </div>
  </header>
</template>

<style>
header {
  background-image: url("../assets/images/pattern-bg.png");
  background-size: cover;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  text-align: center;
}

header h1{
    color: white;
}

header > * {
    margin-top: 1em;
}

.search{
    display: inline-flex;
}

.search input, .search button{
    border: 0;
    outline: 0;
    padding: 1em;
}

.search input{
    width: 40em;
    border-top-left-radius: var(--radius-value);
    border-bottom-left-radius: var(--radius-value);
}

.search button{
    cursor: pointer;
    padding: 0 2em;
    background: black;
    border-top-right-radius: var(--radius-value);
    border-bottom-right-radius: var(--radius-value);
}

</style>