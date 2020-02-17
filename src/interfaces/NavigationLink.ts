export default interface INavigationLink {
    label: string
    to: string
    exact: boolean
    subLinks?: INavigationLink[]
}