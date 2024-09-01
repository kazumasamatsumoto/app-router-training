import { Task } from "@/app/api/tasks/route";

const getTasks = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    // GET http://localhost:3000/api/tasks 200 in 7ms (cache hit)キャッシュが利用されている（APIリクエストを送信していない）
    // GET http://localhost:3000/api/tasks 200 in 107ms (cache skip)キャッシュが（キャッシュを利用していない場合）
    // Cache skipped reason: (cache: no-store)
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data.tasks;
};

const TaskPage = async () => {
  const tasks: Task[] = await getTasks();
  return (
    <div>
      <div>TaskPage</div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};

export default TaskPage;
