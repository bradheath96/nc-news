import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const SortBy = () => {
    const [sortBy, setSortBy] = useState(null)
    const [order, setOrder] = useState(null)

    return (
        <Box sx={{ minWidth: 400, display: "flex", flexDirection: "row", margin: 5}}>
            <FormControl fullwidth>
                <InputLabel id="simple-select">Sort By
                </InputLabel>
            </FormControl>
        </Box>
    )
}