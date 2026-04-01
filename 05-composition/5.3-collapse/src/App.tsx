import {Collapse} from "./components/Collapse"

export function App() {
  return (
    <div>
      <Collapse 
        title="Часто задаваемые вопросы"
        collapsedLabel="Показать"
        expandedLabel="Скрыть"
      >
        <p>Это содержимое коллапса, которое появляется и исчезает при нажатии на кнопку.</p>
      </Collapse>

      <Collapse title="Дополнительная информация">
        <p>Используются значения по умолчанию: "Развернуть" и "Свернуть"</p>
      </Collapse>
    </div>
  )
}