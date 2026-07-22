import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
  useNavigate,
} from "react-router";

import { FaUserCircle } from "react-icons/fa";

import {
  FiCheck,
  FiClock,
  FiEdit2,
  FiLogOut,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import "./DashboardPage.css";

const THREE_HOURS_IN_MILLISECONDS =
  3 * 60 * 60 * 1000;

function getLoggedInUser() {
  const savedUser = localStorage.getItem(
    "loggedInUser"
  );

  if (!savedUser) {
    return null;
  }

  try {
    return JSON.parse(savedUser);
  } catch {
    localStorage.removeItem("loggedInUser");

    return null;
  }
}

function getSavedTasks(storageKey) {
  const savedTasks = localStorage.getItem(storageKey);

  if (!savedTasks) {
    return [];
  }

  try {
    const parsedTasks = JSON.parse(savedTasks);

    return Array.isArray(parsedTasks)
      ? parsedTasks
      : [];
  } catch {
    return [];
  }
}

function DashboardPage() {
  const navigate = useNavigate();

  const [loggedInUser] = useState(
    getLoggedInUser
  );

  const taskStorageKey = loggedInUser
    ? `taskManagerTasks:${loggedInUser.email.toLowerCase()}`
    : "taskManagerTasks:guest";

  const [tasks, setTasks] = useState(() =>
    getSavedTasks(taskStorageKey)
  );

  const [taskInput, setTaskInput] = useState("");
  const [taskError, setTaskError] = useState("");

  const [editingTaskId, setEditingTaskId] =
    useState(null);

  const [editedTaskText, setEditedTaskText] =
    useState("");

  const [taskToDelete, setTaskToDelete] =
    useState(null);

  const [currentTime, setCurrentTime] =
    useState(Date.now());

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

    localStorage.setItem(
      taskStorageKey,
      JSON.stringify(tasks)
    );
  }, [
    tasks,
    taskStorageKey,
    loggedInUser,
  ]);

  useEffect(() => {
    const reminderInterval = window.setInterval(
      () => {
        setCurrentTime(Date.now());
      },
      60000
    );

    return () => {
      window.clearInterval(reminderInterval);
    };
  }, []);

  if (!loggedInUser) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  function handleTaskInputChange(event) {
    setTaskInput(event.target.value);
    setTaskError("");
  }

  function handleAddTask(event) {
    event.preventDefault();

    const cleanedTask = taskInput.trim();

    if (!cleanedTask) {
      setTaskError(
        "Please enter a task before adding it."
      );

      return;
    }

    const newTask = {
      id: Date.now(),
      title: cleanedTask,
      completed: false,
      createdAt: Date.now(),
      updatedAt: null,
      completedAt: null,
    };

    setTasks((previousTasks) => [
      newTask,
      ...previousTasks,
    ]);

    setTaskInput("");
    setTaskError("");
  }

  function handleToggleTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === taskId) {
          const newCompletedStatus =
            !task.completed;

          return {
            ...task,
            completed: newCompletedStatus,
            completedAt: newCompletedStatus
              ? Date.now()
              : null,
          };
        }

        return task;
      })
    );
  }

  function handleStartEdit(task) {
    setEditingTaskId(task.id);
    setEditedTaskText(task.title);
    setTaskError("");
  }

  function handleEditInputChange(event) {
    setEditedTaskText(event.target.value);
    setTaskError("");
  }

  function handleSaveEdit(event, taskId) {
    event.preventDefault();

    const cleanedTask =
      editedTaskText.trim();

    if (!cleanedTask) {
      setTaskError(
        "The edited task cannot be empty."
      );

      return;
    }

    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: cleanedTask,
              updatedAt: Date.now(),
            }
          : task
      )
    );

    setEditingTaskId(null);
    setEditedTaskText("");
    setTaskError("");
  }

  function handleCancelEdit() {
    setEditingTaskId(null);
    setEditedTaskText("");
    setTaskError("");
  }

  function handleRequestDelete(task) {
    setTaskToDelete(task);
  }

  function handleCancelDelete() {
    setTaskToDelete(null);
  }

  function handleConfirmDelete() {
    if (!taskToDelete) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) =>
          task.id !== taskToDelete.id
      )
    );

    if (
      editingTaskId === taskToDelete.id
    ) {
      handleCancelEdit();
    }

    setTaskToDelete(null);
  }

  function handleLogout() {
    localStorage.removeItem("loggedInUser");

    navigate("/login", {
      replace: true,
    });
  }

  function formatTaskDate(timestamp) {
    return new Date(timestamp).toLocaleString();
  }

  function getTaskPendingTime(createdAt) {
    const elapsedTime = Math.max(
      0,
      currentTime - createdAt
    );

    const hours = Math.floor(
      elapsedTime / (60 * 60 * 1000)
    );

    const minutes = Math.floor(
      (elapsedTime % (60 * 60 * 1000)) /
        (60 * 1000)
    );

    return `${hours}h ${minutes}m`;
  }

  function isTaskOverdue(task) {
    return (
      !task.completed &&
      currentTime - task.createdAt >=
        THREE_HOURS_IN_MILLISECONDS
    );
  }

  const completedTaskCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTaskCount =
    tasks.length - completedTaskCount;

  const overdueTasks = tasks.filter(
    isTaskOverdue
  );

  return (
    <main className="dashboardPage">
      <div className="dashboardContainer">
        <header className="dashboardHeader">
          <div className="dashboardUser">
            <FaUserCircle
              className="dashboardUserIcon"
              aria-hidden="true"
            />

            <div>
              <p className="dashboardTag">
                User dashboard
              </p>

              <h1 id="dashboardTitle">
                Welcome, {loggedInUser.name}
              </h1>

              <p className="dashboardEmail">
                {loggedInUser.email}
              </p>
            </div>
          </div>

          <button
            className="logoutButton"
            type="button"
            onClick={handleLogout}
          >
            <FiLogOut aria-hidden="true" />
            <span>Log Out</span>
          </button>
        </header>

        <section
          className="dashboardStats"
          aria-label="Task summary"
        >
          <article className="statCard statCardTotal">
            <p>Total tasks</p>
            <strong>{tasks.length}</strong>
          </article>

          <article className="statCard statCardPending">
            <p>Pending</p>
            <strong>{pendingTaskCount}</strong>
          </article>

          <article className="statCard statCardCompleted">
            <p>Completed</p>
            <strong>
              {completedTaskCount}
            </strong>
          </article>

          <article className="statCard statCardOverdue">
            <p>Overdue</p>
            <strong>
              {overdueTasks.length}
            </strong>
          </article>
        </section>

        {overdueTasks.length > 0 ? (
          <aside
            className="reminderBanner"
            aria-labelledby="reminderTitle"
            aria-live="polite"
          >
            <FiClock
              className="reminderIcon"
              aria-hidden="true"
            />

            <div className="reminderContent">
              <h2 id="reminderTitle">
                Task reminder
              </h2>

              <p>
                {overdueTasks.length === 1
                  ? "You have one unfinished task that has been pending for at least three hours."
                  : `You have ${overdueTasks.length} unfinished tasks that have been pending for at least three hours.`}
              </p>

              <ul className="reminderList">
                {overdueTasks.map((task) => (
                  <li key={task.id}>
                    <strong>
                      {task.title}
                    </strong>

                    <span>
                      Pending for{" "}
                      {getTaskPendingTime(
                        task.createdAt
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}

        <section
          className="taskManagerSection"
          aria-labelledby="taskManagerTitle"
        >
          <header className="taskManagerHeader">
            <div>
              <p className="taskManagerTag">
                Stay organised
              </p>

              <h2 id="taskManagerTitle">
                Task Manager
              </h2>

              <p>
                Add your tasks and mark them
                when completed.
              </p>
            </div>
          </header>

          <form
            className="addTaskForm"
            onSubmit={handleAddTask}
          >
            <label htmlFor="newTask">
              Task description
            </label>

            <div className="addTaskControls">
              <input
                id="newTask"
                type="text"
                value={taskInput}
                onChange={
                  handleTaskInputChange
                }
                placeholder="What do you need to do?"
                maxLength="150"
              />

              <button
                className="addTaskButton"
                type="submit"
              >
                <FiPlus aria-hidden="true" />
                <span>Add Task</span>
              </button>
            </div>
          </form>

          {taskError ? (
            <p
              className="taskError"
              role="alert"
            >
              {taskError}
            </p>
          ) : null}

          {tasks.length === 0 ? (
            <div className="emptyTaskState">
              <FiCheck
                className="emptyTaskIcon"
                aria-hidden="true"
              />

              <h3>No tasks added yet</h3>

              <p>
                Enter your first task using
                the form above.
              </p>
            </div>
          ) : (
            <ul className="taskList">
              {tasks.map((task) => (
                <li
                  className="taskListItem"
                  key={task.id}
                >
                  {editingTaskId ===
                  task.id ? (
                    <form
                      className="editTaskForm"
                      onSubmit={(event) =>
                        handleSaveEdit(
                          event,
                          task.id
                        )
                      }
                    >
                      <label
                        className="visuallyHidden"
                        htmlFor={`editTask-${task.id}`}
                      >
                        Edit task
                      </label>

                      <input
                        id={`editTask-${task.id}`}
                        type="text"
                        value={editedTaskText}
                        onChange={
                          handleEditInputChange
                        }
                        maxLength="150"
                        autoFocus
                      />

                      <div className="editTaskActions">
                        <button
                          className="saveEditButton"
                          type="submit"
                        >
                          <FiCheck
                            aria-hidden="true"
                          />

                          <span>Save</span>
                        </button>

                        <button
                          className="cancelEditButton"
                          type="button"
                          onClick={
                            handleCancelEdit
                          }
                        >
                          <FiX
                            aria-hidden="true"
                          />

                          <span>Cancel</span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <article
                      className={`taskItem ${
                        task.completed
                          ? "taskItemCompleted"
                          : ""
                      }`}
                    >
                      <div className="taskMain">
                        <input
                          className="taskCheckbox"
                          id={`task-${task.id}`}
                          type="checkbox"
                          checked={
                            task.completed
                          }
                          onChange={() =>
                            handleToggleTask(
                              task.id
                            )
                          }
                        />

                        <div className="taskDetails">
                          <label
                            className={`taskTitle ${
                              task.completed
                                ? "taskTitleCompleted"
                                : ""
                            }`}
                            htmlFor={`task-${task.id}`}
                          >
                            {task.title}
                          </label>

                          <p className="taskMeta">
                            Added{" "}
                            {formatTaskDate(
                              task.createdAt
                            )}
                          </p>

                          {task.updatedAt ? (
                            <p className="taskMeta">
                              Last edited{" "}
                              {formatTaskDate(
                                task.updatedAt
                              )}
                            </p>
                          ) : null}

                          {isTaskOverdue(
                            task
                          ) ? (
                            <span className="overdueBadge">
                              <FiClock
                                aria-hidden="true"
                              />

                              Pending for{" "}
                              {getTaskPendingTime(
                                task.createdAt
                              )}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="taskActions">
                        <button
                          className="taskActionButton editTaskButton"
                          type="button"
                          onClick={() =>
                            handleStartEdit(
                              task
                            )
                          }
                          aria-label={`Edit ${task.title}`}
                        >
                          <FiEdit2
                            aria-hidden="true"
                          />

                          <span>Edit</span>
                        </button>

                        <button
                          className="taskActionButton deleteTaskButton"
                          type="button"
                          onClick={() =>
                            handleRequestDelete(
                              task
                            )
                          }
                          aria-label={`Delete ${task.title}`}
                        >
                          <FiTrash2
                            aria-hidden="true"
                          />

                          <span>Delete</span>
                        </button>
                      </div>
                    </article>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {taskToDelete ? (
        <div className="dialogOverlay">
          <section
            className="deleteDialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="deleteDialogTitle"
            aria-describedby="deleteDialogDescription"
          >
            <div
              className="deleteDialogIcon"
              aria-hidden="true"
            >
              <FiTrash2 />
            </div>

            <h2 id="deleteDialogTitle">
              Delete this task?
            </h2>

            <p id="deleteDialogDescription">
              You are about to delete{" "}
              <strong>
                “{taskToDelete.title}”
              </strong>
              . This action cannot be undone.
            </p>

            <div className="deleteDialogActions">
              <button
                className="cancelDeleteButton"
                type="button"
                onClick={
                  handleCancelDelete
                }
              >
                Cancel
              </button>

              <button
                className="confirmDeleteButton"
                type="button"
                onClick={
                  handleConfirmDelete
                }
              >
                <FiTrash2
                  aria-hidden="true"
                />

                <span>Delete Task</span>
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}

export default DashboardPage;