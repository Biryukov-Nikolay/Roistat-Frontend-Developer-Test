<template>
    <li>
        <span class="user user--name">{{user.name}}</span>
        <span class="user user--phone">{{user.phoneNumber}}</span>
    </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .user--name {
    border-right: solid #000 1px;
  }
  .user {
    text-align: left;
    padding: 10px;
    width: 50%;
  }
</style>
