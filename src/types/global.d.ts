// * Menu
declare namespace Menu {
  interface NavOptions {
    path: string
    label: string
    icon?: string
  }
  interface CategoryOptions {
    label: string
    total: number
    target: string
  }
  interface tagOptions {
    label: string
    total: number
  }
}
