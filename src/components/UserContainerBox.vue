<template>
  <div class="user-container-box">
    <div class="top-container">
      <div class="banner-button">
        <div class="group-13574">
          <div class="group-13608">
            <img
              class="vector"
              src="https://anima-uploads.s3.amazonaws.com/projects/60dd2ed7dc2a1a5a1d75dbf9/releases/629662f44eacea26869cda11/img/vector@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="profile-container">
        <avatar-img :src="avatarImgProps.src" />
        <user-name-container
          :meleciaGladwell="userNameContainerProps.meleciaGladwell"
          :melecia="userNameContainerProps.melecia"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AvatarImg from "./AvatarImg";
import UserNameContainer from "./UserNameContainer";
export default {
  name: "UserContainerBox",
  components: {
    AvatarImg,
    UserNameContainer,
  },
  props: ["avatarImgProps", "userNameContainerProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.user-container-box
  background: linear-gradient(180deg, rgb(66, 182, 183) 0%, rgb(38, 152, 208) 100%)
  border-radius: 10px 10px 0px 0px
  display: flex
  flex-direction: column
  height: 208px
  width: 330px

.top-container
  display: flex
  height: 78.05px
  width: 330px

.banner-button
  align-items: flex-start
  display: flex
  height: 32.05px
  margin-left: 288px
  margin-top: 10px
  width: 32px

.group-13574
  display: flex
  height: 32px
  width: 32px

.group-13608
  align-items: flex-start
  background-color: $white
  border-radius: 16px/16.02px
  display: flex
  flex: 1
  justify-content: flex-end
  min-width: 32px
  padding: 8.6px 9.6px

.vector
  height: 13px
  width: 13px

.bottom-container
  background-color: $white
  display: flex
  height: 130px
  width: 330px

.profile-container
  display: flex
  height: 110px
  margin-left: 10px
  margin-top: 10px
  position: relative
  width: 310px
</style>
