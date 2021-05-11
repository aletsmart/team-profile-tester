<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <div>
      <button @click="$router.push({ name: 'team-profile', params: { teamId: 2 }, query: { season: 1325 } })">
        Go to team profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>

</style>
