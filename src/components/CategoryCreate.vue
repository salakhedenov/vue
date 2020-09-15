<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @click.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{invalid: $v.title.$dirty && !$v.title.$required}"
          />
          <label for="name">Название</label>
          <span
            v-if="$v.title.$dirty && $v.title.$required"
            class="helper-text invalid"
          >
          Введите название
          </span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model="limit"
          />
          <label for="limit">Лимит</label>
          <span class="helper-text invalid">Минимальная величина</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minValue
} from 'vuelidate/lib/validators'

export default {
  data: () => ({
    title: '',
    limit: 100
  }),
  validators: {
    title: {
      required
    },
    limit: {
      minValue: minValue(100)
    }
  },
  mounted () {

  },
  methods: {
    submitHandler () {
    }
  }
}
</script>
