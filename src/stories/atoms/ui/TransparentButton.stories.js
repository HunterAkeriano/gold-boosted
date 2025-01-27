import TransparentButton from '@/components/atoms/ui/TransparentButton/TransparentButton.vue'

export default {
  title: 'Components/Atoms/TransparentButton',
  component: TransparentButton
}

const Template = (args) => ({
  components: { TransparentButton },
  setup() {
    return { args }
  },
  template: '<TransparentButton>Catalog</TransparentButton>'
})

export const Default = Template.bind({})
