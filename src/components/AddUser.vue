<template>
  <div v-show="shownSection.isAddBlockShown" class="add-user">
    <header class="add-user__header">
        <h4 class="add-user__title">Добавление Пользователя</h4>
        <CloseButton v-bind:onClose="onClose" class="add-user__close-btn"/>
    </header>
    <form @submit.prevent="onSubmit">
        <ul class="add-user__input-list">
            <li>
                <label for="user-name">Имя</label>
                <input type="text" name="name" id="user-name" v-model="userData.name">
            </li>
            <li>
                <label for="user-phone">Телефон</label>
                <input type="text" name="phone" id="user-phone" v-on:input="formatNumber" v-model="userData.phoneNumber">
            </li>
            <li>
                <label for="user-сhief">Начальник</label>
                <select class="select" type="select" name="сhief" id="user-сhief" v-model="userData.chief">
                    <option v-for="option in selectOptions" v-bind:value="option.name" :key="option.id">
                        {{ option.name }}
                    </option>
                </select>
            </li>
        </ul>
        <MainButton class="add-user__save-btn"
           v-bind:btnText="btnText"
           v-bind:onClick="onClickSubmit"
        />
        <span v-show="errorMessage" class="add-user__error-message">Поля 'Имя' и 'Телефон' должны быть заполнены</span>
    </form>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton'
import MainButton from '@/components/MainButton'
import {formattingNumbers} from '@/utils/formatPhoneNumber'
export default {
  props: ['selectOptions', 'shownSection', 'users'],
  components: {
    CloseButton,
    MainButton
  },
  data () {
    return {
      btnText: 'Cохранить',
      userData: {
        name: '',
        phoneNumber: '',
        сhief: ''
      },
      errorMessage: false
    }
  },
  methods: {
    onSubmit () {
      if (this.userData.name && this.userData.phoneNumber) {
        const newUser = {
          id: (this.users.length + 1),
          name: this.userData.name,
          phoneNumber: this.userData.phoneNumber,
          chief: this.userData.chief
        }
        this.$emit('add-user', newUser)
        this.userData.name = ''
        this.userData.phoneNumber = ''
        this.userData.chief = ''
        this.errorMessage = false
      } else {
        this.errorMessage = true
      }
    },
    onClose () {
      this.shownSection.isAddBlockShown = false
      this.userData.name = ''
      this.userData.phoneNumber = ''
      this.userData.chief = ''
      this.errorMessage = false
    },
    formatNumber () {
      this.userData.phoneNumber = formattingNumbers(this.userData.phoneNumber)
    },
    onClickSubmit () {}
  }
}
</script>

<style>
    .add-user {
        position: relative;
        width: 30%;
        height: fit-content;
        margin-top: 47px;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        border: 1px solid #000;
        padding: 10px 20px 20px 20px;
    }

    .add-user__header {
        display: flex;
        margin-bottom: 40px;
    }

    .add-user__input-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .add-user__input-list li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        padding-left: 1px;
    }

    .add-user__input-list li input{
        width: 40%;
    }

    .add-user__close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .add-user__title {
        margin: 0;
    }

    .add-user__save-btn {
        display: block;
        margin-right: auto;
    }

    .add-user .select {
        width: 42%;
    }

    .add-user__error-message {
        display: block;
        margin-top: 5px;
        color: red;
    }
</style>
