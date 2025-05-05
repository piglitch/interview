import { useState } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import { useProductStore } from '../../store/app.store';

export function Searchbar(props: TextInputProps) {
  const searchText = useProductStore((state) => state.searchText);
  const setSearchText = useProductStore((state) => state.setSearchText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search products"
      rightSectionWidth={42}
      value={searchText}
      onChange={handleChange}
      {...props}
    />
  );
}