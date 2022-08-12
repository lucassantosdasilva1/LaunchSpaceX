import React, { forwardRef } from "react";
import { NativeMethods, TextInputProps } from "react-native";
import { InputContainer, Input, Button, SearchIcon, ClearIcon } from "./styles";

type Props = {
  placeholder: string;
  defaultValue: string;
  onChange: (string: string) => void;
  clear: () => void;
};

const Search = forwardRef<NativeMethods, Props>(({ placeholder, defaultValue, onChange, clear }, ref) => (
    <InputContainer>
      <Input
        ref={ref}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChange}
      />

      {defaultValue.length > 0 ? (
        <Button onPress={clear}>
          <ClearIcon />
        </Button>
      ) : (
        <SearchIcon />
      )}
    </InputContainer>
  )
);

export default Search;
