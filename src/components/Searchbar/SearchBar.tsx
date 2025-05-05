import { TextInput, TextInputProps } from '@mantine/core';

export function Searchbar(props: TextInputProps) {
  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search products"
      rightSectionWidth={42}
    //   icon={<IconSearch size={18} stroke={1.5} />}
    //   rightSection={
    //     <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
    //       <IconArrowRight size={18} stroke={1.5} />
    //     </ActionIcon>
    //   }
      {...props}
    />
  );
}