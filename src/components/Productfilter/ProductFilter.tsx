import { SegmentedControl } from '@mantine/core';
import classes from './productfilter.module.css';
import { useEffect, useState } from 'react';
import { useProductStore } from '../../store/app.store';
import { useNavigate } from 'react-router-dom';

export function ProductFilter() {
  const [categories, setCategories] = useState<string[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { setCategory } = useProductStore();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchCategories() {  
      try {
      const data = await fetch('https://fakestoreapi.in/api/products/category');
      const categoriesJson = await data.json();
      const categories = categoriesJson.categories;
      setCategories(categories);
      console.log(categories);
      } catch (error) {
      console.log(error);
      }
    }
    fetchCategories();    
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCategory(selectedCategory);
    if (value === 'all') {
      navigate('/products');
      return;
    }
    navigate(`/products/category?type=${value}`);
    console.log('Selected category:', value);
  };

  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['all', ...categories || []]}
      value={selectedCategory}
      onChange={handleCategoryChange}
      classNames={{
        root: classes.root,
        indicator: classes.indicator,
        control: classes.control,
        label: classes.label,
      }}
    />
  );
}