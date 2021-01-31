<template>
  <div class="user-list">
    <div v-show="!users.length" class="user-list__empty-list">
      <h3 class="user-list__empty-title">Добавте первого пользователя</h3>
    </div>
    <MainButton v-bind:btnText="addBtnText" v-bind:onClick="showAddSection"  class="user-list__add-btn"/>
    <ul v-show="users.length > 0" class="user-list__list">
        <li class="user-list__item list__item--header">
            <h4 v-on:click="onHeaderClick('name')" class="user-list__title user-list__title--name">Имя</h4>
            <h4 v-on:click="onHeaderClick('phoneNumber')" class="user-list__title user-list__title--phone">Телефон</h4>
        </li>
        <UserItem class="user-list__item list__item--user"
          v-for="user in users" :key="user.id"
          v-bind:user="user"
         />
    </ul>
  </div>
</template>

<script>
import MainButton from '@/components/MainButton'
import UserItem from '@/components/UserItem'
export default {
  props: ['users', 'shownSection'],
  components: {
    UserItem,
    MainButton
  },
  data () {
    return {
      addBtnText: 'Добавить'
    }
  },
  methods: {
    showAddSection () {
      this.shownSection.isAddBlockShown = true
    },
    onHeaderClick (sortValue) {
      this.$emit('sort-users', sortValue)
    }
  }
}
</script>

<style>
    .user-list {
      width: 50%;
      margin-right: auto;
    }

    .user-list__add-btn {
      display: block;
      margin-left: auto;
    }

    .user-list__list {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      margin-top: 10px;
      padding: 0;
      border-right: solid #000 1px;
      border-bottom: solid #000 1px;
    }

    .user-list__item {
      display: flex;
      border-left: solid #000 1px;
      border-top: solid #000 1px;
    }

    .user-list__title {
      cursor: pointer;
      padding: 10px;
      width: 50%;
      margin: 0;
      border-left: solid #000 1px;
    };

    .user-list__title--phone {
      border-left: solid #000 1px;
    }

    .user-list__empty-title {
      margin-bottom: -30px;
    }

</style>
