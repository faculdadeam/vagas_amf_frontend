import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import React from "react";

interface Props {
  values: string[];
  value: string[];
  onChange:
    | ((event: SelectChangeEvent<any>, child: React.ReactNode) => void)
    | undefined;
  label: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(item: string, values: readonly string[], theme: Theme) {
  return {
    fontWeight:
      values.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ChipSelect: React.FC<Props> = ({ onChange, values, value, label }) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth>
      <InputLabel id="multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {values.map((item) => (
          <MenuItem
            key={item}
            value={item}
            style={getStyles(item, value, theme)}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChipSelect;
