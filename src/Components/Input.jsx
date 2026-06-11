export default function Input({ label, newProject, setNewProject, textarea }) {
  const classes =
    "w-full bg-stone-200 p-1 outline-none border-b-2 border-stone-50 focus:border-stone-600 transition-border duration-300 rounded-sm text-stone-600";
  return (
    <p>
      <label>{label === "duedate" ? "DUE DATE" : label.toUpperCase()}</label>
      {textarea ? (
        <textarea
          value={newProject[label]}
          onChange={(event) =>
            setNewProject((prev) => ({
              ...prev,
              [label]: event.target.value,
            }))
          }
          required
          type={label === "duedate" ? "date" : "text"}
          name={label}
          id={label}
          className={classes}
        />
      ) : (
        <input
          // ref={title}
          value={newProject[label]}
          onChange={(event) =>
            setNewProject((prev) => ({
              ...prev,
              [label]: event.target.value,
            }))
          }
          required
          type={label === "duedate" ? "date" : "text"}
          name={label}
          id={label}
          className={classes}
        />
      )}
    </p>
  );
}
