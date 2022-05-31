<template>
  <div class="user-name-container">
    <div class="frame-15090">
      <div class="frame-1509">
        <h1 class="title">{{ meleciaGladwell }}</h1>
      </div>
      <div class="frame-1509">
        <div class="melecia">{{ melecia }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNameContainer",
  props: ["meleciaGladwell", "melecia"],
};
</script>

<style lang="sass">
@import '../../variables'

.user-name-container
  display: flex
  height: 90px
  margin-left: 10px
  margin-top: 10px
  width: 193px

.frame-15090
  display: flex
  flex-direction: column
  height: 96px
  margin-top: -3px
  width: 193px

.frame-1509
  display: flex
  margin-left: 10px
  margin-top: 10px
  width: 173px

.title
  color: $white2222
  font-family: $font-family-dm_sans
  font-size: $font-size-l
  font-weight: 700
  height: 52px
  letter-spacing: 0.40px
  line-height: 26px
  width: 173px

.melecia
  color: #ffffffcc
  font-family: $font-family-dm_sans
  font-size: $font-size-m4
  font-weight: 500
  height: 14px
  letter-spacing: 0.40px
  line-height: 14px
  white-space: nowrap
  width: 69px
</style>
