export const themes: ITheme[] = [
  {
    name: "root",
    value: "",
  },
  {
    name: "emrald",
    value: "emrald",
  },
  {
    name: "barbie",
    value: "barbie",
  },
  {
    name: "fuchsia",
    value: "fuchsia",
  },
  {
    name: "lime",
    value: "lime",
  },
  {
    name: "slate",
    value: "slate",
  },
]

interface ITheme {
  name: string;
  value: string;
  descrtiption?: string;
}