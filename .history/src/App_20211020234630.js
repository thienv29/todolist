import React, { useState } from "react";
import TodoList from "./components/TodoList.js";
import Input from "./components/Input.js";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
export default function App() {
    const [mode, setMode] = useState("light");

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    return (
        <ThemeProvider
        <div className="main">
            <Input />
            <TodoList />
        </div>
    );
}
