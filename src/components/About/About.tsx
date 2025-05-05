import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from '@tabler/icons-react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './About.module.css';

const features = [
    {
        icon: IconReceiptOff,
        title: 'Secure Payments',
        description: 'Your transactions are protected with industry-leading encryption and security.',
    },
    {
        icon: IconFileCode,
        title: 'Wide Product Range',
        description: 'Explore millions of products across various categories tailored to your needs.',
    },
    {
        icon: IconCircleDotted,
        title: 'Fast Delivery',
        description: 'Get your orders delivered quickly with our efficient logistics network.',
    },
    {
        icon: IconFlame,
        title: 'Exclusive Deals',
        description: 'Enjoy discounts and offers on top brands and products every day.',
    },
];

export function About() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col xs={12} md={5}>
          <Title className={classes.title} order={2}>
            Your one-stop shop for all your needs
          </Title>
          <Text c="dimmed" style={{fontSize: '16px', marginTop: '10px'}}>
            Discover a seamless shopping experience with our platform – offering a wide range of products, secure payments, and fast delivery to make your life easier.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col xs={12} md={7}>
          <SimpleGrid cols={2} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}