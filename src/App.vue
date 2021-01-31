<template>
  <div id="app">
    <UserList
      v-bind:users="users"
      v-bind:shownSection="shownSection"
      @sort-users="sortUsers"
    />
    <AddUser
      v-bind:selectOptions="users"
      v-bind:shownSection="shownSection"
      v-bind:users="users"
      @add-user="addNewUser"
    />
  </div>
</template>

<script>
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'
import {sortUsers} from '@/utils/sort'
export default {
  name: 'App',
  components: {
    UserList,
    AddUser
  },
  data () {
    return {
      users: [

      ],
      shownSection: {
        isAddBlockShown: false
      }
    }
  },
  mounted () {
    if (localStorage.getItem('users-test')) {
      try {
        this.users = JSON.parse(localStorage.getItem('users-test'))
      } catch (e) {
        localStorage.removeItem('users-test')
      }
    }
  },
  methods: {
    addNewUser (newUser) {
      this.users.push(newUser)
      localStorage.setItem('users-test', JSON.stringify(this.users))
    },
    sortUsers (sortValue) {
      sortUsers(this.users, sortValue)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
