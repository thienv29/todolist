import React from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
export default function App() {
     const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <div className="main">
      <Input />
      <TodoList />
    </div>
  );
}
