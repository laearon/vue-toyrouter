<template>
  <div>
    <div>
      <span @click="toyRouter.push('index')">A</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span @click="toyRouter.push('yourPage')">B</span>
    </div>
    <Router name="index" />
  </div>
</template>

<script>
// @flow
export default {
  beforeCreate() {
  },
}
</script>

<style>
</style>
