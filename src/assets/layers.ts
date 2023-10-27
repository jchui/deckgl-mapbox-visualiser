import Students from './json/Students.json';
import LifeExpectancyMale from './json/life_expectancy_male.json';
import LifeExpectancyFemale from './json/life_expectancy_female.json';
import Carehomes from './json/carehomes1.json';
import Carehomes2 from './json/carehomes2.json';
import NursingHomes from './json/nursing_homes_london.json';

const commonCoordinates = {
  longitude: -1.49,
  latitude: 53.5,
  zoom: 5.5,
};

const layers = [
  {
    id: 1,
    name: 'Class of 2025',
    description: 'Where students have travelled from to attend this MSc programme',
    json: Students,
    layer: 'arc',
    height: 0.5,
    width: 2,
    sourceColor: [21, 53, 87],
    targetColor: [107, 194, 221],
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 2,
    name: 'Life Expectancy (Male)',
    description: 'Male average life expectancy by region in the UK. (From Kaitlyn)',
    json: LifeExpectancyMale,
    hexagonColor: ['#ffffcc', '#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837'],
    opacity: 1,
    layer: 'hexagon',
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 3,
    name: 'Life Expectancy (Female)',
    description: 'Female average life expectancy by region in the UK. (From Kaitlyn)',
    json: LifeExpectancyFemale,
    hexagonColor: ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#e34a33', '#b30000'],
    opacity: 1,
    layer: 'hexagon',
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 4,
    name: 'Care Homes UK',
    description: 'Care homes in the UK! (From Fil)',
    json: Carehomes,
    layer: 'scatterplot',
    scatterplotColor: [0, 181, 12],
    radius: 50,
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 5,
    name: 'Care Homes UK 2',
    description: 'Care homes in the UK! (From Christy)',
    json: Carehomes2,
    layer: 'scatterplot',
    scatterplotColor: [7, 127, 7],
    radius: 50,
    isShown: false,
    ...commonCoordinates,
  },
  {
    id: 6,
    name: 'Nursing Homes (London)',
    description: 'Nursing homes in Greater London (From Christy)',
    json: NursingHomes,
    layer: 'scatterplot',
    scatterplotColor: [198, 35, 216],
    radius: 50,
    isShown: false,
    ...commonCoordinates,
  },
];

export default layers;
