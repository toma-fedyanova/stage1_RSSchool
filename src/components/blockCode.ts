import { arrayString } from '../types/type';

export const CodeText: arrayString = [
  ['<car>', '<dog></dog>', '<cat></cat>', '<bird></bird>', '</car>'],
  ['<car>', '<cat></cat>', '<cat></cat>', '<dog></dog>', '</car>'],
  ['<car>', '<bird id="bird"></bird>', '<cat></cat>', '<dog></dog>', '</car>'],
  ['<car>', '<dog class="dog"></dog>', '<cat></cat>', '<dog class="dog"></dog>', '</car>'],
  ['<car>', '<dog></dog>', '<cat>', '<fish></fish>', '<fish></fish>', '<fish></fish>', '</cat>', '<dog></dog>', '</car>'],
  ['<car>', '<dog></dog>', '<cat name="Пушок"></cat>', '<dog></dog>', '</car>'],
  ['<car>', '<dog name="Маркиз"></dog>', '<dog name="Пушок"></dog>', '<dog name="Мартин"></dog>', '</car>'],
  ['<car>', '<cat name="Макс"></dog>', '<dog name="Бакс"></dog>', '<bird></bird>', '</car>'],
  ['<car>', '<cat></cat>', '<dog></dog>', '<bird></bird>', '</car>'],
  ['<car>', '<cat></cat>', '<dog></dog>', '<dog></dog>', '</car>'],
]