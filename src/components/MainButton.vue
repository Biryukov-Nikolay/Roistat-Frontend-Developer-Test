<template>
    <button v-on:click="onClick" class="main-btn">{{btnText}}</button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true
    },
    onClick: {
      type: Function
    }
  }
}
</script>

<style >
    .main-btn {
        cursor: pointer;
        padding: 10px 30px;
        border-radius: 15px;
        background: lightgrey;
        border: 1px #000 solid;
    }

    .main-btn:hover {
        opacity: 0.5;
    }
</style>
