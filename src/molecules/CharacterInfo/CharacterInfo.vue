<template>
  <div class="character-block">
    <div class="character-block__item character-block__item-battleTag">
      <label class="character-block__item-label" :for="`BattleTag${index}`">
        {{ $t('dashboardPage.battleTag') }}
        <InputComponent
          class="character-block__item-input"
          :id="`BattleTag${index}`"
          v-model="character['battle_tag']"
          @inputChange="inputChange"
        />
      </label>
    </div>

    <div class="character-block__item character-block__item-class">
      <div class="character-block__item-label">
        {{ $t('dashboardPage.classAndSpec') }}
        <CharacterDropDown
          class="product-filter__dropdown"
          :valuesList="classList"
          v-model="character['class_and_spec']"
          :id="`ClassAndSpec${index}`"
          @selectOption="selectOption($event, 'class_and_spec')"
        />
      </div>
    </div>

    <div class="character-block__item character-block__item-character-name">
      <label class="character-block__item-label" :for="`CharacterName${index}`">
        {{ $t('dashboardPage.characterName') }}
        <InputComponent
          class="character-block__item-input"
          :id="`CharacterName${index}`"
          v-model="character['name']"
          @inputChange="inputChange"
        />
      </label>
    </div>

    <div class="character-block__item character-block__item-faction">
      <div class="character-block__item-label">
        {{ $t('dashboardPage.faction') }}
        <CharacterDropDown
          class="product-filter__dropdown"
          :valuesList="factionList"
          v-model="character['faction']"
          :id="`Faction${index}`"
          @selectOption="selectOption($event, 'faction')"
        />
      </div>
    </div>

    <div class="character-block__item character-block__item-realm">
      <div class="character-block__item-label">
        {{ $t('dashboardPage.realm') }}
        <CharacterDropDown
          class="product-filter__dropdown"
          :valuesList="realmList"
          v-model="character['realm']"
          :id="`Realm${index}`"
          @selectOption="selectOption($event, 'realm')"
        />
      </div>
    </div>

    <div class="character-block__item character-block__item-additional">
      <label class="character-block__item-label" :for="`AdditionalInfo${index}`">
        {{ $t('dashboardPage.additionalInfo') }}
        <InputComponent
          class="character-block__item-input"
          :id="`AdditionalInfo${index}`"
          v-model="character['additional_info']"
          @inputChange="inputChange"
        />
      </label>
    </div>

    <div class="character-block__item">
      <ButtonComponent
        v-if="index + 1 === charactersLenght && index + 1 !== maxCharacters"
        rectangle
        @click="$emit('add-character')"
      >
        {{ $t('dashboardPage.addACharacter') }} ( {{ maxCharacters - charactersLenght }} )
      </ButtonComponent>
    </div>

    <div class="character-block__item">
      <ButtonComponent
        v-if="charactersLenght > 1"
        class="character-block__item-button-delete"
        rectangle
        @click="$emit('delete-character', character.id)"
      >
        {{ $t('dashboardPage.deleteACharacter') }}
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import ButtonComponent from '@/atoms/ui/UIButton/UIButton.vue'
import { patchAsyncUpdateMyCharacter } from '@/api/users.js'
import CharacterDropDown from '@/molecules/CharacterDropDown/CharacterDropDown.vue'

defineProps(['button', 'index', 'charactersLenght', 'maxCharacters'])
defineEmits(['delete-character', 'add-character'])

const character = defineModel()

const classList = [
  'Warrior',
  'Paladin',
  'Hunter',
  'Rogue',
  'Priest',
  'Shaman',
  'Mage',
  'Warlock',
  'Monk',
  'Druid'
]

const factionList = ['Horde', 'Alliance']

const realmList = ['EU', 'US', 'KR']

const selectOption = (value, inputName) => {
  character.value[inputName] = value
  patchAsyncUpdateMyCharacter(character.value.id, character.value)
}

const inputChange = () => {
  patchAsyncUpdateMyCharacter(character.value.id, character.value)
}
</script>

<style>
@import 'CharacterInfo.scss';
</style>
