import { getTodos } from "@/lib/todo"

export default async function Home() {

  const { todos } = await getTodos()
  return (
    <section className="py-20">
      <div className="container">
        <h1>Todos</h1>
        <ul>
          {todos?.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
        <h2>Previous todos:</h2>
      </div>
    </section >
  )
}
