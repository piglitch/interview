import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export function ContactUs() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const labelStyles = { label: { color: 'black' } };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <form onSubmit={form.onSubmit(() => {})} style={{ width: '100%', maxWidth: 500 }}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Outfit, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={2} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            styles={labelStyles}
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            styles={labelStyles}
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          styles={labelStyles}
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md" color='green'>
            Send message
          </Button>
        </Group>
      </form>
    </div>
  );
}