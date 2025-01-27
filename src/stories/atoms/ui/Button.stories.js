import ButtonUI from '@/components/atoms/ui/ButtonUI/ButtonComponent.vue'

export default {
  title: 'Components/Atoms/Button',
  component: ButtonUI,
  argTypes: {
    click: { action: 'clicked' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonUI },
  template: '<ButtonUI>Catalog</ButtonUI>'
})

export const Default = Template.bind({})
