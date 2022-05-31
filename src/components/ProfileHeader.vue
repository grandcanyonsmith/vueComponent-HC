<template>
  <div class="profile-header">
    <user-container-box
      :avatarImgProps="userContainerBoxProps.avatarImgProps"
      :userNameContainerProps="userContainerBoxProps.userNameContainerProps"
    />
    <frame15082 :profile="frame15082Props.profile" :groups="frame15082Props.groups" />
  </div>
</template>

<script>
import UserContainerBox from "./UserContainerBox";
import Frame15082 from "./Frame15082";
export default {
  name: "ProfileHeader",
  components: {
    UserContainerBox,
    Frame15082,
  },
  props: ["userContainerBoxProps", "frame15082Props"],
};
</script>

<style lang="sass">
.profile-header
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 245px
  position: relative
  width: 330px
</style>
