import { createApp } from "vue";
import { Button, Cell, CellGroup, Icon, Image as VanImage, Toast, Field, Form } from 'vant';

export default function loadComponent(app: ReturnType<typeof createApp>) {
  app.use(Button).use(Cell).use(CellGroup).use(Icon).use(VanImage).use(Toast).use(Field).use(Form)
}