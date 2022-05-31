<template>
  <div class="frame-15082">
    <div class="frame-15083">
      <div class="profile valign-text-middle dmsans-bold-black-14px">{{ profile }}</div>
      <div class="rectangle-6570"></div>
    </div>
    <div class="frame-15084">
      <div class="groups valign-text-bottom dmsans-bold-black-14px">{{ groups }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame15082",
  props: ["profile", "groups"],
};
</script>

<style lang="sass">
@import '../../variables'

.frame-15082
  background-color: $white2222
  border-radius: 0px 0px 12px 12px
  display: flex
  height: 37px
  width: 330px

.frame-15083
  display: flex
  flex-direction: column
  height: 24px
  margin-top: 13.0px
  width: 165px

.profile
  height: 21px
  letter-spacing: 0.40px
  line-height: 21px
  margin-left: 60px
  text-align: center
  white-space: nowrap
  width: 45px

.rectangle-6570
  background-color: $pelorous
  border-radius: 2px
  height: 2px
  margin-left: 10px
  margin-top: 1px
  width: 145px

.frame-15084
  display: flex
  height: 24px
  margin-top: 13.0px
  width: 165px

.groups
  height: 21px
  letter-spacing: 0.40px
  line-height: 21px
  margin-left: 56.5px
  margin-top: 1.5px
  text-align: center
  white-space: nowrap
  width: 52px
</style>
