
const img = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APlaceholder_view_vector.svg&psig=AOvVaw3WNq7pGQQAgScfrQFX1MrB&ust=1709994660879000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiW0dTw5IQDFQAAAAAdAAAAABAJ"
const img1 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F941607221092508263%2Fimage-placeholder-component&psig=AOvVaw3WNq7pGQQAgScfrQFX1MrB&ust=1709994660879000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiW0dTw5IQDFQAAAAAdAAAAABAE"

const drugs = [
  {
    id: '1',
    label: 'Drug 1',
    price: 10,
    producer: 'AAA',
    imageUrl: img,
  },
  {
    id: '2',
    label: 'Drug 2',
    price: 12,
    producer: 'Poland',
    imageUrl: img,
  },
  {
    id: '3',
    label: 'Drug 3',
    price: 13,
    producer: 'GB',
    imageUrl: img,
  },
  {
    id: '4',
    label: 'Drug 4',
    price: 11,
    producer: 'USA',
    imageUrl: img,
  },
  {
    id: '5',
    label: 'Drug 5',
    price: 100,
    producer: 'Ukraine',
    imageUrl: img,
  },
  {
    id: '6',
    label: 'Drug 6',
    price: 10,
    producer: 'Poland',
    imageUrl: img,
  },
  {
    id: '7',
    label: 'Drug 7',
    price: 12,
    producer: 'Denmark',
    imageUrl: img,
  },
  {
    id: '8',
    label: 'Drug 8',
    price: 18,
    producer: 'USA',
    imageUrl: img,
  },
];
const tinctures = [
  {
    id: '1',
    label: 'Tincture 1',
    price: 10,
    producer: 'Ukraine',
    imageUrl: img1,
  },
  {
    id: '2',
    label: 'Tincture 2',
    price: 12,
    producer: 'Poland',
    imageUrl: img1,
  },
  {
    id: '3',
    label: 'Tincture 3',
    price: 13,
    producer: 'GB',
    imageUrl: img1,
  },
  {
    id: '4',
    label: 'Tincture 4',
    price: 11,
    producer: 'USA',
    imageUrl: img1,
  },
  {
    id: '5',
    label: 'Tincture 5',
    price: 100,
    producer: 'USA',
    imageUrl: img1,
  },
  {
    id: '6',
    label: 'Tincture 6',
    price: 10,
    producer: 'AAA',
    imageUrl: img1,
  },
  {
    id: '7',
    label: 'Tincture 7',
    price: 12,
    producer: 'Denmark',
    imageUrl: img1,
  },
  {
    id: '8',
    label: 'Tincture 8',
    price: 18,
    producer: 'Poland',
    imageUrl: img1,
  },
];
const medicaments = {
  drugs,
  tinctures,
};

module.exports = {
  getMedicaments: () => medicaments
}
