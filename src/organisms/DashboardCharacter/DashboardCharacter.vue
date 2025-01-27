<template>
  <section class="user-characters">
    <template v-if="!isCharactersListLoading">
      <CharacterComponent
        class="user-characters__character"
        button
        v-for="(character, index) in charactersList"
        :maxCharacters="maxCharacters"
        :character="character"
        :index="index"
        :key="character.id"
        :charactersLenght="charactersList.length"
        v-model="charactersList[index]"
        @addCharacter="addCharacter"
        @deleteCharacter="deleteCharacter(character.id)"
      />
    </template>

    <CharacterInfoSkeletor v-else />
  </section>
</template>

<script setup>
import CharacterComponent from '@/molecules/CharacterInfo/CharacterInfo.vue'
import { onMounted, ref } from 'vue'
import {
  deleteAsyncDeleteMyCharacter,
  getAsyncMyCharacters,
  postAsyncAddNewCharacter
} from '@/api/users.js'
import { getData } from '@/composables/asyncFunc.js'
import CharacterInfoSkeletor from '@/molecules/CharacterInfo/CharacterInfoSkeletor.vue'

const maxCharacters = 3

const charactersList = ref([])
const isCharactersListLoading = ref(true)

onMounted(() => {
  getCharacters()
})

const getCharacters = () => {
  getData(getAsyncMyCharacters, charactersList, isCharactersListLoading).then(() => {
    if (charactersList.value.length === 0) {
      addCharacter()
    } else {
      charactersList.value.reverse()
    }
  })
}

const addCharacter = async () => {
  await postAsyncAddNewCharacter()
  getCharacters()
}

const deleteCharacter = async (characterId) => {
  await deleteAsyncDeleteMyCharacter(characterId)
  getCharacters()
}
</script>

<style>
@import 'DashboardCharacter.scss';
</style>
