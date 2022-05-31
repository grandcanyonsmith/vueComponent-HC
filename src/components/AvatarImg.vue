<template>
  <div class="avatar-img" :style="{ 'background-image': 'url(' + src + ')' }"></div>
</template>

<script>
export default {
  name: "AvatarImg",
  props: ["src"],
};
</script>

<style lang="sass">
.avatar-img
  background-position: 50% 50%
  background-size: cover
  height: 86px
  margin-left: 10px
  margin-top: 12px
  width: 87px
</style>
