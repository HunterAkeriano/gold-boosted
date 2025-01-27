import CircleButton from '@/components/atoms/ui/CircleButton/CircleButton.vue'

export default {
  title: 'Components/Atoms/CircleButton',
  component: CircleButton,
  argTypes: {
    click: { action: 'clicked' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CircleButton },
  template: '<CircleButton>Catalog</CircleButton>'
})

export const Default = Template.bind({})
