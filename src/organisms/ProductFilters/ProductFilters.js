class ComponentBuilder {
  constructor() {
    this.components = []
  }

  addComponent(componentData) {
    const { type, title, subfilters } = componentData

    // Створюємо відповідний компонент з даними
    let component = {}

    switch (type) {
      case 'Select':
        component = {
          type: 'FilterDropDown',
          title,
          valuesList: subfilters
        }
        break
      case 'Slider':
        component = {
          type: 'RangeSlider',
          title,
          list: subfilters
        }
        break
      case 'Radio':
        component = {
          type: 'RadioButton',
          title,
          subfilters
        }
        break
      case 'CheckBox':
        component = {
          type: 'CheckboxComponent',
          title,
          subfilters
        }
        break
      default:
        // Обробка невідомого типу компонента
        console.error('Unsupported component type:', type)
    }

    this.components.push(component)
    return this
  }

  build() {
    return this.components
  }
}

// Приклад використання:
const filtersData = [
  {
    subfilters: [
      { id: 258, title: 'Ultra Fast', price: 12 },
      { id: 257, title: 'Max Fast', price: 11 }
      // інші підфільтри
    ],
    type: 'Select',
    title: 'Level'
  }
  // інші фільтри
]

const builder = new ComponentBuilder()

// Додаємо компоненти на основі даних
filtersData.forEach((data) => {
  builder.addComponent(data)
})

// Отримуємо готові компоненти
const components = builder.build()
