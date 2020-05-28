<template>
  <div>
    <service-bar></service-bar>
  </div>
</template>

<script>
  import serviceBar from "../components/ServiceBar";

  export default {
    name: "index",
    components: {
      // eslint-disable-next-line vue/no-unused-components
      serviceBar
    },
  };
</script>
