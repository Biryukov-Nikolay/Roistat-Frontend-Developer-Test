<template>
    <button v-on:click="onClose" class="close-btn"></button>
</template>

<script>
export default {
  props: {
    onClose: {
      type: Function,
      required: true
    }
  }
}
</script>

<style >
    .close-btn {
        cursor: pointer;
        background: none;
        border: none;
        width: 20px;
        height: 20px;
    }

    .clone-btn:hover {
        opacity: 0.8;
    }

    .close-btn::after {
        display: block;
        content: '';
        width: 22px;
        height: 1px;
        background-color: #000;
        transform: rotate(45deg);
        position: absolute;
        top: 7px;
        right: -3px;
    }

    .close-btn::before {
        display: block;
        content: '';
        width: 22px;
        height: 1px;
        background-color: #000;
        transform: rotate(135deg);
        position: absolute;
        top: 7px;
        right: -3px;
    }
</style>
